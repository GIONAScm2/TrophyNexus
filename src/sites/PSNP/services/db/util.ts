import {diffUpdate, ParserGamePage, ChangeData, Select, IPsnpEntity} from 'trophyutil';
import {fetchDoc} from '../../../../shared/utils/fetch';
import {DbGame, GameDocIDB, GameDocMongo} from '../../models/dbGame';
import type {TrophyNexusPsnp} from '../../nexus';
import parseHeaderStats from '../../pages/profile/parseHeaderStats';
import {type CacheStoppingOptions, type PageItemData, type ScrapeResult, type UpdateData} from './types';
import {DbSeries} from '../../models/dbSeries';
import {findItems} from '../../../../shared/services/mongoApi';

export function initScrapeResult<T>(): ScrapeResult<T> {
	return {
		newItems: [],
		updateData: [],
	};
}

export function calculateNumProfilePages(doc: Document) {
	const stats = parseHeaderStats(doc);
	return Math.ceil(stats.numGamesPlayed / 100);
}

/** Identifies the last page number from the DOM. */
export function parseMaxPageNum(doc: Document): number {
	const maxPages = doc.querySelector(Select.MAX_PAGE_NUM)?.textContent ?? '';
	const pageNum = +maxPages;
	if (!pageNum || Number.isNaN(pageNum)) {
		throw new Error(`Unable to parse max page number`);
	}
	return pageNum;
}

/**
 * Given {@link PageItemData}, returns a {@link ScrapeResult}. If `strictUpdateChecks` is used, only meaningful
 * updates are counted. */
export function classifyPageData<T extends IPsnpEntity>(pageData: PageItemData<T>, strictUpdateChecks = false) {
	const newItems: T[] = [];
	const updateData: UpdateData<T>[] = [];

	for (const itemData of pageData) {
		if (!itemData.dbItem) {
			newItems.push(itemData.domItem);
			continue;
		}
		const changeData = diffUpdate(itemData.dbItem, itemData.domItem, true);

		changeData.changes = changeData.changes.filter(change => {
			return !change.key.endsWith('At');
		});

		if (strictUpdateChecks) {
			const meaningfulChanges = getMeaningfulChanges([changeData]); // 0 or 1
			if (changeData.changes.length && meaningfulChanges.length > 0) {
				updateData.push([itemData.dbItem, changeData]);
			}
		} else {
			if (changeData.changes.length) {
				updateData.push([itemData.dbItem, changeData]);
			}
		}
	}
	return {newItems, updateData} satisfies ScrapeResult<T>;
}

/** Determines whether ChangeData is (relatively) unchanged. Excludes additions - only checks updates. */
function isUnchanged(changeData: ChangeData) {
	const isUpdate = changeData.operation === 'update';

	const negligibleKeys = ['rarity', 'createdAt', 'updatedAt'];
	const isNegligibleUpdate = changeData.changes.every(change => {
		return negligibleKeys.some(key => change.key.includes(key));
	});

	return isUpdate && (isNegligibleUpdate || changeData.changes.length === 0);
}

/** Given an array of UpdateData, returns the *meaningful* updates - that is, any with changed fields
 * other than rarity or auto-timestamps. */
function getMeaningfulChanges(changeData: ChangeData[]) {
	const changedItems = changeData.filter(x => !isUnchanged(x));
	return changedItems;
}

export async function commitDbGameChanges(
	nexus: TrophyNexusPsnp,
	changes: ScrapeResult<GameDocIDB>,
	newPageGames: GameDocIDB[],
	updatedPageGames: UpdateData<GameDocIDB>[]
) {
	if (newPageGames.length > 0) {
		changes.newItems.push(...newPageGames);
		await nexus.idb.upsert(
			'psnp_games',
			newPageGames.map(x => new DbGame(x))
		);
	}
	if (updatedPageGames.length > 0) {
		changes.updateData.push(...updatedPageGames);
		await nexus.idb.upsert(
			'psnp_games',
			updatedPageGames.map(x => x[0])
		);
	}
	return changes;
}

/** Mutates an array of DbGames with trophy list details. */
export async function fetchNewGameDetails(newGames: IPsnpEntity[], consoleLogPrefix?: string) {
	if (newGames.length) {
		const msg = `⚡${consoleLogPrefix} Fetching page details for ${newGames.length} games...`;
		console.log('%c' + msg, 'color:yellowgreen');
	}

	const sortedNewGames = newGames.sort((a, b) => a._id - b._id);

	
	if (sortedNewGames.length >= 10) { // To avoid making too many fetch requests, let's update from the server.
		const sortedVerboseGames = (await findItems({
			collection: 'games',
			limit: 2000,
			offset: 0,
			projection: {},
			filter: {
				_id: {
					$in: sortedNewGames.map(g => g._id),
				},
			},
			sort: {
				_id: 1,
			},
		})) as GameDocMongo[];

		sortedVerboseGames.forEach((game, i) => {
			Object.assign(sortedNewGames[i] ?? {}, game);
		});
	} else {
		const parser = new ParserGamePage();
		for (const game of sortedNewGames) {
			const doc = (await fetchDoc(DbGame.url(game))).doc;
			const gamePage = parser.parse(doc);
			Object.assign(game, gamePage);
		}
	}

	console.log(`fetchNewGameDetails updated ${sortedNewGames.length} games.`)
}

export function isFinished({currentPage, maxPages, newPageItems, updatedPageItems, itemsPerPage}: CacheStoppingOptions): boolean {
	const numMeaningfulChanges = getMeaningfulChanges(updatedPageItems.map(x => x[1])).length + newPageItems.length;

	const parsedAllPages = currentPage >= maxPages;
	const caughtUp = itemsPerPage > numMeaningfulChanges;

	return parsedAllPages || caughtUp;
}

export function logChanges<T = DbGame | DbSeries>(changes: ScrapeResult<T>, prefix = '') {
	const meaningfulChanges = changes.updateData.filter(change => !change[1].changes.every(x => x.key.includes('At')));

	const msg = `🏁${prefix}Caching finished: ${changes.newItems.length} new, ${meaningfulChanges.length} updated.`;
	console.log('%c' + msg, 'color:limegreen');
	if (changes.newItems.length) console.log(changes.newItems);
	if (meaningfulChanges.length) console.log(meaningfulChanges);
}
