import {DbGame} from '../../models/dbGame';
import {TrophyNexusPsnp} from '../../nexus';
import {ScrapeResult} from './types';
import {
	calculateNumProfilePages,
	classifyPageData,
	commitDbGameChanges,
	fetchNewGameDetails,
	initScrapeResult,
	isFinished,
	logChanges,
} from './util';
import {ProgressMetrics, getProgressMetrics} from '../../../../shared/utils/getProgress';
import {ParserGamePlayable, PsnpGamePlayable, PsnpPageType} from 'trophyutil';
import {fetchDoc} from '../../../../shared/utils/fetch';

/** Auto-caches user's profile games if it isn't their first time caching. */
export async function updateUserGamesPassively(nexus: TrophyNexusPsnp) {
	const uninitialized = nexus.userPrefs.PSNP.lastUpdatedUserGames === 0;
	const hoursSinceLastFetch = nexus.hoursSinceLastUpdate('lastUpdatedUserGames');

	const shouldAutoCache = !nexus.guest && !uninitialized && (hoursSinceLastFetch >= 1 || nexus.viewingOwnProfile);
	if (!shouldAutoCache) return;

	await nexus.elements.Common.footer;
	for await (const progress of updateUserGames(nexus)) {
		console.log(`Passively cached page ${progress.a}`);
	}
	nexus.userPrefs.PSNP.lastUpdatedUserGames = Date.now();
	await nexus.userPrefs.save();
}

export async function* updateUserGames(nexus: TrophyNexusPsnp): AsyncGenerator<ProgressMetrics, ScrapeResult<DbGame>, void> {
	const changes = initScrapeResult<DbGame>();
	let doc = await fetchProfilePage(nexus, 1);
	const NUM_PAGES = calculateNumProfilePages(doc);

	let currentPage = 1;
	let finished = false;
	while (!finished) {
		try {
			doc = await fetchProfilePage(nexus, currentPage, doc);
			const pageItems = parseProfileGames(doc);

			const pageData = await nexus.idb.getItemData('psnp_games', pageItems);
			pageData.forEach(x => {
				x.dbItem = x.dbItem && new DbGame(x.dbItem);
				x.domItem = new DbGame(x.domItem);
			});
			const {newItems, updateData} = classifyPageData(pageData);

			await fetchNewGameDetails(newItems, '[USER GAMES]');
			await commitDbGameChanges(nexus, changes, newItems, updateData);

			finished = isFinished({
				currentPage,
				maxPages: NUM_PAGES,
				newPageItems: newItems,
				updatedPageItems: updateData,
				itemsPerPage: 100,
			});

			if (!(finished && currentPage === 1)) {
				console.log(`Parsed page ${currentPage}`);
			}

			yield getProgressMetrics(currentPage, NUM_PAGES);
			currentPage++;
		} catch (err) {
			console.error(`Error while parsing page ${currentPage}`);
		}
	}
	nexus.userPrefs.PSNP.lastUpdatedUserGames = Date.now();
	nexus.userPrefs.save();

	logChanges(changes, '[USER GAMES] ');
	return changes;
}

function parseProfileGames(doc: Document) {
	const parser = new ParserGamePlayable();
	const gameNodes = PsnpGamePlayable.getGameNodes(PsnpPageType.Profile, doc);
	// The returned games must be wrapped by `DbGame` to prevent conflicts with `user`-properties.
	// const games = gameNodes.map(node => new DbGame(DbGame.wrapProfileGame(parser.parse(node))));
	const games = gameNodes.map(node => DbGame.wrapProfileGame(parser.parse(node)));
	return games;
}

/** Fetches `targetPage` of the user's profile.
 * @param prevDoc (Optional) A pre-existing document whose presence can prevent unnecessary fetching */
async function fetchProfilePage(nexus: TrophyNexusPsnp, targetPage: number, prevDoc?: Document | undefined) {
	const alreadyOnPage = targetPage === 1 && nexus.viewingOwnProfile;
	if (alreadyOnPage) {
		return nexus.doc;
	}
	const alreadyFetchedPage = prevDoc && targetPage === 1;
	if (alreadyFetchedPage) {
		return prevDoc;
	}
	const url = `https://psnprofiles.com/${nexus.userPrefs.psnId}?completion=all&order=last-played&pf=all&page=${targetPage}`;
	const res = await fetchDoc(url);
	return res.doc;
}
