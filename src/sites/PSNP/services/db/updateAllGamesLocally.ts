import {ChangeData, IGameDlc, ParserDlcListing, ParserGameStandard, PsnpGameBase, PsnpPageType, diffUpdate} from 'trophyutil';
import {fetchDoc} from '../../../../shared/utils/fetch';
import {TrophyNexusPsnp} from '../../nexus';
import {DbGame, GameDocIDB} from '../../models/dbGame';
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
	if (!shouldUpdateGames(nexus)) return null;

	const changes = initScrapeResult<DbGame>();

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

	// TODO: Check stackLabel of past couple pages to see if any changed.

	// UPDATE DLC
	const seenGames: Record<number, boolean> = {};
	currentPage = 1;
	doc = await fetchGamesOrDLCPage(currentPage, 'dlc');

	upToDate = false;
	while (!upToDate) {
		try {
			doc = await fetchGamesOrDLCPage(currentPage, 'dlc', doc);
			const dlcListingsRaw = parseCatalogDLCs(doc);
			const dlcListings = filterOutSeenItems(dlcListingsRaw, seenGames); // Only shows one DLC per game ID

			const gameIds = dlcListings.map(dlc => dlc._id);
			const dbGames = await nexus.idb.getByIds('psnp_games', gameIds);

			const gamesToUpdate: [GameDocIDB, IGameDlc, ChangeData][] = [];
			for (const dlc of dlcListings) {
				const dbGame = dbGames.find(g => g?._id === dlc._id);
				const dlcAlreadyExists = dbGame?.trophyGroups?.some(group => group.groupNum === dlc.groupNum);
				if (dlcAlreadyExists) {
					upToDate = true;
					break;
				} else {
					if (dbGame) gamesToUpdate.push([dbGame, dlc, diffUpdate(dbGame, dlc as any, false)]);
				}
			}

			const dbGamesToUpdate = gamesToUpdate.map(tuple=>tuple[0])
			await fetchNewGameDetails(dbGamesToUpdate);
			await commitDbGameChanges(nexus, changes, dbGamesToUpdate, []);

			if (upToDate) console.log(`DLC: Stopping at page ${currentPage}`);

			currentPage++;
		} catch (err) {
			console.error(err);
		}
	}

	nexus.userPrefs.PSNP.lastUpdatedAllGames = Date.now();
	nexus.userPrefs.save();

	logChanges(changes, '[ALL GAMES] ');
	return changes;
}

function shouldUpdateGames(nexus: TrophyNexusPsnp) {
	const hoursSinceLastFetch = nexus.hoursSinceLastUpdate('lastUpdatedAllGames');
	const shouldUpdate = hoursSinceLastFetch >= 1 || nexus.pageType === PsnpPageType.Games;
	return !!shouldUpdate;
}

export async function fetchGamesOrDLCPage(targetPage: number, type: 'games' | 'dlc', prevDoc?: Document | undefined) {
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

export async function fetchLatestGameIdsWithDlc() {
	const latestDlcPage = await fetchGamesOrDLCPage(1, 'dlc');
	const dlcListings = parseCatalogDLCs(latestDlcPage);

	const seenGames: Record<number, boolean> = {};
	const gameIdsToFetchDetailsFor = filterOutSeenItems(dlcListings, seenGames).map(dlc => dlc._id);
	return gameIdsToFetchDetailsFor;
}

function parseCatalogGames(doc: Document) {
	const parser = new ParserGameStandard();
	const gameNodes = PsnpGameBase.getGameNodes(PsnpPageType.Games, doc);
	const gameListings = gameNodes.map(tr => parser.parse(tr));
	return gameListings;
}
export function parseCatalogDLCs(doc: Document) {
	const parser = new ParserDlcListing();
	const dlcNodes = PsnpGameBase.getGameNodes(PsnpPageType.Games, doc);
	const dlcListings = dlcNodes.map(tr => parser.parse(tr));
	return dlcListings;
}

export function filterOutSeenItems(items: IGameDlc[], seenItems: Record<number, boolean>) {
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
