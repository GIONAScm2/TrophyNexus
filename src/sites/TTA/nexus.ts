import {TTAPageType} from 'trophyutil';
import TrophyNexus from '../nexus';

export class TrophyNexusTTA extends TrophyNexus {
	readonly pageType: TTAPageType;

	constructor(nexus: TrophyNexus, pageType: TTAPageType) {
		super(nexus);
		this.pageType = pageType;
	}
}
