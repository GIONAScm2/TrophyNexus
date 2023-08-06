import {newElement} from '../../../../shared/utils/domUtil';
import {TrophyNexusPsnp} from '../../nexus';

/** Affects DOM irrespective of any user prefs. */
export default async function setupIndependentDOM(nexus: TrophyNexusPsnp) {
	addSeriesTabToNavbar(nexus);
	normalizeCasingOfH3(nexus);
}

function addSeriesTabToNavbar(nexus: TrophyNexusPsnp) {
	nexus.elements.Common.navBar.then(_navBar => {
		const seriesTab = newElement(`li`, {}, newElement(`a`, {href: `https://psnprofiles.com/series`}, `Series`));
		const leaderboardTab = document.querySelector(`div.navigation > ul > li:nth-child(4)`);
		leaderboardTab?.after(seriesTab);
	});
}

/** Normalizes casing of page headers */
function normalizeCasingOfH3(nexus: TrophyNexusPsnp) {
	nexus.elements.Common.headerH3.then(h3 => {
		h3.style.textTransform = `none`;
	});
}
