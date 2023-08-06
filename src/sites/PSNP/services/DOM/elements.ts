import {waitForEl} from '../../../../shared/utils/domUtil';

export const PsnpHTMLElements = {
	Common: {
		body: waitForEl(),
		navBar: waitForEl(`div.navigation.md-show`),
		userBarPsnId: waitForEl<HTMLElement>(':is(a.dropdown-toggle.cf > span, #elUserLink)'),
		headerH3: waitForEl(`#banner > div.banner-overlay > div > div.title-bar.flex.v-align > div.grow > h3`),
		header: waitForEl<HTMLElement>(`#content :is(div.col-xs-8 div.grow, div.col-xs-12 > div.title)`),
		search: waitForEl<HTMLInputElement>('input#search'),
		table: waitForEl<HTMLTableSectionElement>(':is(#search-results tbody, #game_list > tbody, #gamesTable > tbody)'),
		/** When the footer is loaded, it should be safe to do pretty much anything. */
		footer: waitForEl<HTMLElement>('.footer, footer'),
	} as const,
	Profile: {
		headerStats: waitForEl(`span.stat.grow`),
		flagBoxTitle: waitForEl(`div.red`),
	} as const,
} as const;

/** Returns the \<tbody\> that holds the games on the current (or passed) page. */
export function getGameTable(doc: Document) {
	return doc.querySelector<HTMLTableSectionElement>(`:is(#search-results tbody, #game_list > tbody, #gamesTable > tbody)`);
}
