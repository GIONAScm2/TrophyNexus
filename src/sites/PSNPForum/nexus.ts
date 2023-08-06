import {PsnpForumPageType} from 'trophyutil';
import TrophyNexus from '../nexus';

export class TrophyNexusPsnpForum extends TrophyNexus {
	readonly pageType: PsnpForumPageType;

	constructor(nexus: TrophyNexus, pageType: PsnpForumPageType) {
		super(nexus);
		this.pageType = pageType;
	}
}
