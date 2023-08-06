import {waitForEl, newElement} from '../../../shared/utils/domUtil';
import {fetchDoc} from '../../../shared/utils/fetch';
import TrophyNexus from '../../nexus';

export default async function injectShortcutToTrophyList(nexus: TrophyNexus) {
	const doc = nexus.doc;
	waitForEl<HTMLElement>('ul[itemscope]').then(nav => {
		const breadcrumbText = nav.querySelector<HTMLElement>(`li:nth-child(3) > a > span`)?.textContent?.trim();
		if (!breadcrumbText || breadcrumbText !== 'Game Forums') {
			return;
		}

		const urlToGameSubforum = nav.querySelector(`li:nth-child(5) a`)?.getAttribute(`href`);
		if (!urlToGameSubforum) {
			console.error(`Failed to find game's subforum URL`);
			return;
		}

		// Pre-emptively inject shortcut icon
		const placeholderTrophyIcon = newElement(
			`li`,
			{itemprop: `itemListElement`, itemscope: ``},
			newElement(`a`, {id: `trophylist`}, '🏆', newElement(`i`, {class: `fa fa-angle-right`}))
		);
		nav.querySelector(`li:nth-child(5)`)?.before(placeholderTrophyIcon);

		const trophyIconBtn = doc.querySelector('#trophylist');
		if (!trophyIconBtn) {
			console.error(`Failed to locate trophyIconBtn`);
			return;
		}

		// Fetch the link, then add it to shortcut icon
		fetchDoc(urlToGameSubforum).then(res => {
			const urlToTrophyList = res.doc.querySelector(`div.ipsType_richText.ipsType_normal > a`)?.getAttribute(`href`);
			if (!urlToTrophyList) {
				trophyIconBtn.remove();
				return;
			}
			trophyIconBtn.setAttribute(`href`, urlToTrophyList);
		});
	});
}
