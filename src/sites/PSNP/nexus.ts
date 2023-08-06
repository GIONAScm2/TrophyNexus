import {PsnpPageType} from 'trophyutil';
import TrophyNexus from '../nexus';
import {PsnpHTMLElements} from './services/DOM/elements';
import {PrefTimestampKey} from '../../shared/services/userPrefs/types';

export class TrophyNexusPsnp extends TrophyNexus {
	readonly elements = PsnpHTMLElements;
	readonly pageType: PsnpPageType;
	/** Returns `true` if the user is signed in and viewing their own profile. */
	get viewingOwnProfile() {
		return !this.guest && this.url.pathname === `/${this.userPrefs.psnId}`;
	}
	/** Returns `true` if the user is signed in and they haven't cached All Games, All Series, or User Games. */
	get needToInitCache() {
		const prefs = this.userPrefs.PSNP;
		const needToInit = [prefs.lastUpdatedAllSeries, prefs.lastUpdatedAllGames, prefs.lastUpdatedUserGames].includes(0);
		return !this.guest && needToInit;
	}

	constructor(nexus: TrophyNexus, pageType: PsnpPageType) {
		super(nexus);
		this.pageType = pageType;
	}
}
