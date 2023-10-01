import {render} from 'preact';
import {TrophyNexusPsnp} from '../nexus';
import { GamesTable } from '../components/games_table/GamesTable';
import { DbGamesController } from '../services/DbGamesController';

export async function initGamesCatalog(nexus: TrophyNexusPsnp) {
	if (!nexus.userPrefs.PSNP.bools.renderGamesTable.value) return;
	
	const gamesController = new DbGamesController(nexus);

	const allGamesPromise = gamesController.retrieveAllGames();
	const tablePromise = nexus.elements.Common.table;

	Promise.all([allGamesPromise, tablePromise]).then(([allGames, table]) => {
		const deletables = [...nexus.doc.querySelectorAll('div.title-bar .no-shrink')];
		deletables.forEach(el=>el.remove())

		const defaultRows = [...table.querySelectorAll('tr')];
		defaultRows.forEach(tr => tr.remove());

		const root = table.closest('div.col-xs-8')?.parentElement;
		root?.replaceChildren();
		root && render(<GamesTable allGames={allGames} />, root);
	});
}
