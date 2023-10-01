import {IGameDlc, Select} from 'trophyutil';
import {fetchDoc} from '../../../../shared/utils/fetch';
import {TrophyNexusPsnp} from '../../nexus';
import {GameDocMongo} from '../../models/dbGame';
import {findItems} from '../../../../shared/services/mongoApi';
import {getProgressMetrics} from '../../../../shared/utils/getProgress';
import {DbStoreName} from './types';
import {SeriesDocMongo} from '../../models/dbSeries';
import {fetchGamesOrDLCPage, filterOutSeenItems, parseCatalogDLCs} from './updateAllGamesLocally';

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

async function countPsnpGames() {
	const MAX_GAMES_PER_PAGE = 50;
	const res = await fetchDoc('https://psnprofiles.com/games?shovelware');
	const numPages = parseMaxPageNum(res.doc);
	return numPages * MAX_GAMES_PER_PAGE;
}
async function countPsnpSeries() {
	const MAX_SERIES_PER_PAGE = 50;
	const res = await fetchDoc('https://psnprofiles.com/series');
	const numPages = parseMaxPageNum(res.doc);
	return numPages * MAX_SERIES_PER_PAGE - (MAX_SERIES_PER_PAGE - 1);
}
/** Fetches all games and series from MongoDB and stores them in IDB. */
export async function* populateIDBFromServer(nexus: TrophyNexusPsnp) {
	const [numGames, numSeries] = await Promise.all([countPsnpGames(), countPsnpSeries()]);
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

	for await (const progressMetrics of populateStoreFromServer('psnp_series', MAX_SERIES_PER_REQUEST)) {
		yield progressMetrics;
	}
	nexus.userPrefs.PSNP.lastUpdatedAllSeries = Date.now();
	await nexus.userPrefs.save();

	for await (const progressMetrics of populateStoreFromServer('psnp_games', MAX_GAMES_PER_REQUEST)) {
		yield progressMetrics;
	}
	await populateLatestDlcListings(nexus);
	nexus.userPrefs.PSNP.lastUpdatedAllGames = Date.now();
	await nexus.userPrefs.save();

	return totals;
}

async function populateLatestDlcListings(nexus: TrophyNexusPsnp) {
	const latestGameIdsWithDlc = await fetchLatestGameIdsWithDlc();
	const gameDetails = (await findItems({
		collection: 'games',
		projection: {metaData: 1, trophyGroups: 1},
		limit: 50,
		offset: 0,
		filter: {
			_id: {
				$in: latestGameIdsWithDlc,
			},
		},
	})) as GameDocMongo[];
	console.log(gameDetails);
	await nexus.idb.upsert('psnp_games', gameDetails);
}
async function fetchLatestGameIdsWithDlc() {
	const latestDlcPage = await fetchGamesOrDLCPage(1, 'dlc');
	const dlcListings = parseCatalogDLCs(latestDlcPage);

	const gameIdToDlc: Record<number, boolean> = {};
	const gameIdsToFetchDetailsFor = filterOutSeenItems(dlcListings, gameIdToDlc).map(dlc => dlc._id);
	return gameIdsToFetchDetailsFor;
}
