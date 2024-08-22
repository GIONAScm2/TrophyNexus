import {PsnpTrophy} from 'trophyutil';
import {newElement} from './domUtil';

/** Populates a trophy/achievement list with checkboxes that allow easy copying to
 *  clipboard with RTF designed specifically for OneNote. */
export class CopyCheckbox {
	doc: Document;
	members: PsnpTrophy[];
	selected: PsnpTrophy[];
	richContainer = newElement(`div`, {});
	/** @param {Trophy[]} trophies */
	constructor(doc: Document, ...trophies: PsnpTrophy[]) {
		this.doc = doc;
		this.members = [];
		this.selected = [];
		this.addMembers(...trophies);
	}
	addMembers(...trophies: PsnpTrophy[]) {
		trophies.forEach(ach => {
			const trophyElement = ach.getElement(this.doc);
			const cb = (trophyElement?.querySelector(`input.copyCheck`) ||
				newElement(`input`, {
					type: `checkbox`,
					style: `margin-left:5px;`,
					class: `copyCheck`,
				})) as HTMLInputElement;
			cb.addEventListener(`change`, (e: Event) => {
				if ((e.currentTarget as HTMLInputElement)?.checked) this.selected.push(ach);
				else this.selected.splice(this.selected.indexOf(ach), 1);
				this.richContainer.innerHTML = ``;
				this.selected.forEach(sel => {
					this.richContainer.innerHTML += `<b>${sel.name}:</b> ${sel.desc}<br>`;
				});
				copyToClipboard(this.richContainer.innerHTML);
			});
			trophyElement?.querySelector(`:is(td > a.title, .titleAnchor)`)?.after(cb);
		});
		this.members = [...this.members, ...trophies];
	}
}

export function copyToClipboard(text: string) {
	var type = `text/html`;
	var blob = new Blob([text], {type});
	var data = [new ClipboardItem({[type]: blob})];
	navigator.clipboard.write(data);
}
