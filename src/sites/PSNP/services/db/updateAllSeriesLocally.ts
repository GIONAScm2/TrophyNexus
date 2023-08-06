import {ParserSeriesListing, ParserSeriesPageNeutral, PsnpGameBase, PsnpPageType} from 'trophyutil';
import {fetchDoc} from '../../../../shared/utils/fetch';
import {DbSeries, SeriesDocIDB} from '../../models/dbSeries';
import {TrophyNexusPsnp} from '../../nexus';
import {classifyPageData, initScrapeResult, isFinished, logChanges, parseMaxPageNum} from './util';
import {ScrapeResult, UpdateData} from './types';

/** Updates series IDB if it's been 1h+ since the last fetch, or the user is on the series catalog page. */
export async function updateAllSeriesLocally(nexus: TrophyNexusPsnp) {
	const changes = initScrapeResult<DbSeries>();
	const hoursSinceLastFetch = nexus.hoursSinceLastUpdate('lastUpdatedAllSeries');
	const shouldUpdate = nexus.pageType === PsnpPageType.SeriesCatalog || hoursSinceLastFetch >= 1;

	if (!shouldUpdate) return null;

	let currentPage = 1;
	let doc = await fetchSeriesCatalogPage(nexus, currentPage);
	const TOTAL_PAGES = parseMaxPageNum(doc);

	let upToDate = false;
	while (!upToDate) {
		try {
			doc = await fetchSeriesCatalogPage(nexus, currentPage, doc);
			const pageItems = parseSeriesListings(doc);

			const seriesPageData = await nexus.idb.getItemData('psnp_series', pageItems);
			const pageScrapeResult = classifyPageData(seriesPageData);

			const {newItems, updateData} = await fetchNewSeriesDetails(pageScrapeResult);
			await commitDbSeriesChanges(nexus, changes, newItems, updateData);

			upToDate = isFinished({
				currentPage,
				maxPages: TOTAL_PAGES,
				newPageItems: newItems,
				updatedPageItems: updateData,
				itemsPerPage: 50,
			});

			currentPage++;
		} catch (err) {
			console.error(err);
		}
	}
	nexus.userPrefs.PSNP.lastUpdatedAllSeries = Date.now();
	nexus.userPrefs.save();

	logChanges(changes, '[ALL SERIES] ');
	return changes;
}

/** Returns an updated {@link ScrapeResult} with newly-fetched stages, and items convert to DbSeries. */
async function fetchNewSeriesDetails(scrapeResult: ScrapeResult<SeriesDocIDB>) {
	const result = initScrapeResult<DbSeries>();

	for (const newSeries of scrapeResult.newItems) {
		const stages = await getSeriesStageInfo(DbSeries.url(newSeries));
		const series = new DbSeries({...newSeries, stages});
		result.newItems.push(series);
	}
	for (const update of scrapeResult.updateData) {
		const stages = await getSeriesStageInfo(DbSeries.url(update[0]));
		const series = new DbSeries({...update[0], stages});
		result.updateData.push([series, update[1]]);
	}
	return result;
}

/** Fetches `targetPage` of series catalog.
 * @param prevDoc (Optional) A pre-existing document whose presence can prevent unnecessary fetching */
async function fetchSeriesCatalogPage(nexus: TrophyNexusPsnp, targetPage: number, prevDoc?: Document | undefined) {
	const alreadyOnPage = targetPage === 1 && nexus.pageType === PsnpPageType.SeriesCatalog;
	if (alreadyOnPage) {
		return nexus.doc;
	}
	const alreadyFetchedPage = prevDoc && targetPage === 1;
	if (alreadyFetchedPage) {
		return prevDoc;
	}
	const url = `https://psnprofiles.com/series?page=${targetPage}`;
	const res = await fetchDoc(url);
	return res.doc;
}

function parseSeriesListings(doc: Document) {
	const parser = new ParserSeriesListing();
	const seriesNodes = PsnpGameBase.getGameNodes(PsnpPageType.SeriesCatalog, doc);
	const seriesListings = seriesNodes.map(tr => parser.parse(tr));
	return seriesListings;
}

async function getSeriesStageInfo(url: string) {
	const res = await fetchDoc(url);
	const seriesPageParser = new ParserSeriesPageNeutral();
	const seriesPage = seriesPageParser.parse({document: res.doc, URL, location: {...location, pathname: new URL(url).pathname}});

	const shortenedStages = seriesPage.stages.map(stage => {
		const stageNum = stage.stageNum;
		const gameIds = stage.gameIds;
		return {stageNum, gameIds};
	});
	return shortenedStages;
}

async function commitDbSeriesChanges(
	nexus: TrophyNexusPsnp,
	changes: ScrapeResult<DbSeries>,
	newPageSeries: DbSeries[],
	updatedPageSeries: UpdateData<DbSeries>[]
) {
	if (newPageSeries.length > 0) {
		changes.newItems.push(...newPageSeries);
		await nexus.idb.upsert('psnp_series', newPageSeries);
	}
	if (updatedPageSeries.length > 0) {
		changes.updateData.push(...updatedPageSeries);
		await nexus.idb.upsert(
			'psnp_series',
			updatedPageSeries.map(x => x[0])
		);
	}
	return changes;
}
