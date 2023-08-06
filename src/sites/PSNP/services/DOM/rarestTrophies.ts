import {ParserTrophy} from 'trophyutil';
import {getLocalStorage, setLocalStorage} from '../../../../shared/hooks/useLocalStorage';
import {TrophyNexusPsnp} from '../../nexus';

export function renderRarestTrophies(nexus: TrophyNexusPsnp) {
	if (nexus.guest || !nexus.viewingOwnProfile) return;

	const rarestTrophies = getLocalStorage<unknown[]>('tn-rarest', []);

	nexus.elements.Common.footer.then(el => {
		const panels = [...nexus.doc.querySelectorAll('.sidebar .title.flex.v-align')];
		const rarestPanel = panels.find(panel => panel.textContent?.trim()?.includes('Rarest Trophies'))?.nextElementSibling;
		const rows = [...(rarestPanel?.querySelectorAll<HTMLTableRowElement>('tr') ?? [])];
		console.log(rows);

        // need a settings var for lastCheckedRarest so that any custom trophies remain up-to-date.
		const parser = new ParserTrophy();
		const trophies = rows.map(row => parser.parse(row));
		console.log(trophies);
	});

	// console.log(rarestTrophies);
	// setLocalStorage('tn-rarest', [{name: 'trophy1'}]);
}

interface ProfileTrophy {
	_id: number;
    src:string;
	name: string;
	desc: string;
}

function parseProfileTrophy(tr: HTMLTableRowElement) {}
