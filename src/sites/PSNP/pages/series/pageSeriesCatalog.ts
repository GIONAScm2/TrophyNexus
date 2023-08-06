import {ParserSeriesListing, PsnpGameBase, PsnpPageType} from 'trophyutil';
import { TrophyNexusPsnp } from '../../nexus';

export default async function seriesCatalog(nexus: TrophyNexusPsnp) {
	const parser = new ParserSeriesListing();

	window.addEventListener('DOMContentLoaded', async event => {
		// Remove search icon
		nexus.doc.querySelector(`a.search-button`)?.remove();

		// Add 'Enter' listener to search bar
		// nexus.doc.querySelector<HTMLInputElement>(`#search`)?.addEventListener('keyup', (ev) => {
		// 	//
		// })

		const nodes = PsnpGameBase.getGameNodes(PsnpPageType.SeriesCatalog, nexus.doc);
		const seriesListings = nodes.map(n => parser.parse(n));

		const idsOnPage = seriesListings.map(s => s._id);
		console.log(idsOnPage);

		const storedSeries = await nexus.idb.getByIds('psnp_series', idsOnPage);
		console.log(storedSeries);
		// await idbSeries.loadIntoMem();
		// const results = await idbSeries.search('Call of');
		// const newSeries = seriesListings.filter(s=>!results?.find(r=>r._id===s._id))
	});
}
