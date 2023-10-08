import {render} from 'preact';
import {TrophyNexusPsnp} from '../nexus';
import {DbSeriesController} from '../services/DbSeriesController';
import { SeriesTable } from '../components/tables/series/SeriesTable';

export async function initSeriesCatalog(nexus: TrophyNexusPsnp) {
	if (!nexus.userPrefs.PSNP.bools.renderSeriesTable.value) return;

	const seriesController = new DbSeriesController(nexus);

	const allSeriesPromise = seriesController.retrieveAllSeriesWithProgress();
	const tablePromise = nexus.elements.Common.table;

	Promise.all([allSeriesPromise, tablePromise]).then(([allSeries, table]) => {
		const deletables = [...nexus.doc.querySelectorAll('div.title-bar .no-shrink')];
		deletables.forEach(el => el.remove());

		const defaultRows = [...table.querySelectorAll('tr')];
		defaultRows.forEach(tr => tr.remove());

		const root = table.closest('div.col-xs-8')?.parentElement;
		root?.replaceChildren();
		root && render(<SeriesTable allSeries={allSeries} prefs={nexus.userPrefs} />, root);
	});
}
