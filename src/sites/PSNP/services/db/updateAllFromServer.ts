import {Select} from 'trophyutil';
import {fetchDoc} from '../../../../shared/utils/fetch';
import {TrophyNexusPsnp} from '../../nexus';
import {GameDocMongo} from '../../models/dbGame';
import {findItems} from '../../../../shared/services/mongoApi';
import {getProgressMetrics} from '../../../../shared/utils/getProgress';
import {DbStoreName} from './types';
import {SeriesDocMongo} from '../../models/dbSeries';

const MAX_GAMES_PER_REQUEST = 6000;
const MAX_SERIES_PER_REQUEST = 2000;

/** Identifies the last page number from the DOM. */
export function parseMaxPageNum(doc: Document): number {
	const maxPages = doc.querySelector(Select.MAX_PAGE_NUM)?.textContent ?? '';
	const pageNum = +maxPages;
	if (!pageNum || Number.isNaN(pageNum)) {
		throw new Error(`Unable to parse max page number`);
	}
	return pageNum;
}

async function getTotalGames() {
	const MAX_GAMES_PER_PAGE = 50;
	const res = await fetchDoc('https://psnprofiles.com/games?shovelware');
	const numPages = parseMaxPageNum(res.doc);
	return numPages * MAX_GAMES_PER_PAGE;
}
async function getTotalSeries() {
	const MAX_SERIES_PER_PAGE = 50;
	const res = await fetchDoc('https://psnprofiles.com/series');
	const numPages = parseMaxPageNum(res.doc);
	return numPages * MAX_SERIES_PER_PAGE - (MAX_SERIES_PER_PAGE - 1);
}
/** Fetches all games and series from MongoDB and stores them in IDB. */
export async function* populateIDBFromServer(nexus: TrophyNexusPsnp) {
	const [numGames, numSeries] = await Promise.all([getTotalGames(), getTotalSeries()]);
	const totals = {fetched: 0, all: numGames + numSeries};

	const populateStoreFromServer = async function* (storeName: DbStoreName, batchSize: number) {
		const collection = storeName === 'psnp_games' ? 'games' : 'series';

		let offset = 0,
			upToDate = false;
		while (!upToDate) {
			const items = (await findItems({collection, offset, limit: batchSize})) as GameDocMongo[] | SeriesDocMongo[];
			if (items.length < batchSize) {
				upToDate = true;
			}

			await nexus.idb.upsert(storeName, items);
			offset += batchSize;
			totals.fetched += items.length;

			yield getProgressMetrics(totals.fetched, totals.all);
		}
	};

	for await (const t of populateStoreFromServer('psnp_series', MAX_SERIES_PER_REQUEST)) {
		yield t;
	}
	nexus.userPrefs.PSNP.lastUpdatedAllSeries = Date.now();
	await nexus.userPrefs.save();

	for await (const t of populateStoreFromServer('psnp_games', MAX_GAMES_PER_REQUEST)) {
		yield t;
	}

	nexus.userPrefs.PSNP.lastUpdatedAllGames = Date.now();
	await nexus.userPrefs.save();
	return totals;
}
