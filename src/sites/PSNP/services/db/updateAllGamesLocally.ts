import {IGameDlc, ParserDlcListing, ParserGameStandard, PsnpGameBase, PsnpPageType, diffUpdate} from 'trophyutil';
import {fetchDoc} from '../../../../shared/utils/fetch';
import {TrophyNexusPsnp} from '../../nexus';
import {DbGame} from '../../models/dbGame';
import {
	classifyPageData,
	commitDbGameChanges,
	fetchNewGameDetails,
	initScrapeResult,
	isFinished,
	logChanges,
	parseMaxPageNum,
} from './util';

/** Updates games IDB (incl. DLC) if it's been 1h+ since the last fetch. */
export async function updateAllGamesLocally(nexus: TrophyNexusPsnp) {
	const changes = initScrapeResult<DbGame>();
	const hoursSinceLastFetch = nexus.hoursSinceLastUpdate('lastUpdatedAllGames');
	const shouldUpdate = hoursSinceLastFetch >= 1 || nexus.pageType === PsnpPageType.Games;

	if (!shouldUpdate) return null;

	// UPDATE GAMES
	let currentPage = 1;
	let doc = await fetchGamesOrDLCPage(currentPage, 'games');
	const TOTAL_GAME_PAGES = parseMaxPageNum(doc);

	let upToDate = false;
	while (!upToDate) {
		try {
			doc = await fetchGamesOrDLCPage(currentPage, 'games', doc);
			const pageItems = parseCatalogGames(doc);

			const seriesPageData = await nexus.idb.getItemData('psnp_games', pageItems);
			const {newItems, updateData} = classifyPageData(seriesPageData, true); // We want to be strict about changes since the game catalog has multiple ever-changing fields

			await fetchNewGameDetails(newItems, '[ALL GAMES]');
			await commitDbGameChanges(nexus, changes, newItems, updateData);

			upToDate = isFinished({
				currentPage,
				maxPages: TOTAL_GAME_PAGES,
				newPageItems: newItems,
				updatedPageItems: updateData,
				itemsPerPage: 50,
			});

			currentPage++;
		} catch (err) {
			console.error(err);
		}
	}

	// UPDATE DLC
	const seenGames: Record<number, boolean> = {};
	currentPage = 1;
	// doc = await fetchGamesOrDLCPage(currentPage, 'dlc');

	// upToDate = false;
	// while (!upToDate) {
	// 	try {
	// 		doc = await fetchGamesOrDLCPage(currentPage, 'dlc', doc);
	// 		const dlcListingsRaw = parseCatalogDLCs(doc);
	// 		const dlcListings = filterOutSeenItems(dlcListingsRaw, seenGames); // Only shows one DLC per game ID

	// 		const gameIds = dlcListings.map(dlc => dlc._id);
	// 		const dbGames = await nexus.idb.getByIds('psnp_games', gameIds);

	// 		const gamesToUpdate= [];
	// 		for (const dlc of dlcListings) {
	// 			const dbGame = dbGames.find(g => g?._id === dlc._id);
	// 			const dlcAlreadyExists = dbGame?.trophyGroups?.some(group => group.groupNum === dlc.groupNum);
	// 			if (dlcAlreadyExists) {
	// 				upToDate = true;
	// 				break;
	// 			} else {
	// 				if (dbGame) gamesToUpdate.push([dbGame, dlc, diffUpdate(dbGame,dlc,false)]);
	// 			}
	// 		}
	// 		console.log(gamesToUpdate);
	// 		break;

	// 		await fetchNewGameDetails(gamesToUpdate);
	// 		await commitDbGameChanges(nexus, changes, gamesToUpdate, []);

	// 		if (upToDate) console.log(`DLC: Stopping at page ${currentPage}`);

	// 		currentPage++;
	// 	} catch (err) {
	// 		console.error(err);
	// 	}
	// }

	nexus.userPrefs.PSNP.lastUpdatedAllGames = Date.now();
	nexus.userPrefs.save();

	logChanges(changes, '[ALL GAMES] ');
	return changes;
}

async function fetchGamesOrDLCPage(targetPage: number, type: 'games' | 'dlc', prevDoc?: Document | undefined) {
	const alreadyFetchedPage = prevDoc && targetPage === 1;
	if (alreadyFetchedPage) {
		return prevDoc;
	}
	const url =
		type === 'games'
			? `https://psnprofiles.com/games?page=${targetPage}&shovelware`
			: `https://psnprofiles.com/games/dlc?page=${targetPage}`;
	const res = await fetchDoc(url);
	return res.doc;
}

function parseCatalogGames(doc: Document) {
	const parser = new ParserGameStandard();
	const gameNodes = PsnpGameBase.getGameNodes(PsnpPageType.Games, doc);
	const gameListings = gameNodes.map(tr => parser.parse(tr));
	return gameListings;
}
function parseCatalogDLCs(doc: Document) {
	const parser = new ParserDlcListing();
	const dlcNodes = PsnpGameBase.getGameNodes(PsnpPageType.Games, doc);
	const dlcListings = dlcNodes.map(tr => parser.parse(tr));
	return dlcListings;
}

function filterOutSeenItems(items: IGameDlc[], seenItems: Record<number, boolean>) {
	const uniqueItems = items.filter(dlc => {
		if (seenItems[dlc._id]) {
			return false;
		} else {
			seenItems[dlc._id] = true;
			return true;
		}
	});
	return uniqueItems;
}
