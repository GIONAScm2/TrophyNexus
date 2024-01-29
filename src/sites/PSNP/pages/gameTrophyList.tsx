import {CopyCheckbox} from '../../../shared/utils/CopyCheckbox';
import {newElement} from '../../../shared/utils/domUtil';
import {TrophyNexusPsnp} from '../nexus';
import {ParserGamePage, PsnpTrophy} from 'trophyutil';

export async function initGameTrophyList(nexus: TrophyNexusPsnp) {
	const parser = new ParserGamePage();

	Promise.all([nexus.elements.Common.footer, nexus.elements.Common.headerH3]).then(([footer, headerH3]) => {
		const gameDetails = parser.parse(nexus.doc);
		const trophies = gameDetails.trophyGroups.flatMap(group => group.trophies.map(trophy => new PsnpTrophy(trophy)));

		if (nexus.userPrefs.PSNP.bools.trophyCheckboxes.value === true) {
			new CopyCheckbox(nexus.doc, ...trophies); // Applies checkboxes to all trophies individually
			
			const cbAll = newElement(`input`, {type: `checkbox`, style: `margin-left:5px;`}, `All`) as HTMLInputElement;
			cbAll.addEventListener(`change`, function () {
				if (this.checked) {
					document.querySelectorAll<HTMLInputElement>(`input.copyCheck`).forEach(cb => {
						if (!cb.checked) {
							cb.click();
						}
					});
				}
				else {
					document.querySelectorAll<HTMLInputElement>(`input.copyCheck`).forEach(cb => {
						if (cb.checked) {
							cb.click();
						}
					});
				}
			});

			headerH3.appendChild(cbAll);
		}
	});
}
