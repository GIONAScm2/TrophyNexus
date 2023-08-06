import {type BrowserContext} from 'trophyutil';
import {UserPrefs} from '../shared/services/userPrefs';
import {TrophyIDB} from './PSNP/services/db/IDB';
import {BooleanPrefKey, PrefTimestampKey} from '../shared/services/userPrefs/types';

export const HostnameToSiteName = {
	'psnprofiles.com': 'PSNP',
	'forum.psnprofiles.com': 'PSNPForum',
	'www.truetrophies.com': 'TT',
	'www.trueachievements.com': 'TA',
} as const;

export type Hostname = keyof typeof HostnameToSiteName;
export type SiteName = (typeof HostnameToSiteName)[Hostname];

export function getSiteName(hostname: string): SiteName | undefined {
	if (hostname in HostnameToSiteName) {
		return HostnameToSiteName[hostname as Hostname];
	}
	return;
}

interface NexusOptions {
	browserContext: BrowserContext;
	siteName: SiteName;
	userPrefs: UserPrefs;
}

export default class TrophyNexus {
	public readonly idb = TrophyIDB;
	public browserContext: BrowserContext;
	public readonly siteName: SiteName;
	public readonly userPrefs: UserPrefs;

	constructor({siteName, userPrefs, browserContext}: NexusOptions) {
		this.browserContext = browserContext;
		this.siteName = siteName;
		this.userPrefs = userPrefs;
	}

	/** Indicates whether the script is running from a local file URI. */
	get devMode() {
		return GM.info.script.name.includes('TEST');
	}
	get doc() {
		return this.browserContext.window.document;
	}
	get url() {
		return this.browserContext.url;
	}
	get searchParams() {
		return this.url.searchParams;
	}
	/** Returns `true` if the user doesn't have a stored PSN ID, indicating ID-dependent features shouldn't run. */
	get guest() {
		return !this.userPrefs.psnId;
	}

	/** Returns the number of hours since a particular field was last updated. */
	hoursSinceLastUpdate(type: PrefTimestampKey) {
		const ONE_HOUR = 1000 * 60 * 60;

		const timeNow = new Date().valueOf();
		const timeLastUpdated = this.userPrefs.PSNP[type];
		const hoursSinceLastUpdate = (timeNow - timeLastUpdated) / ONE_HOUR;

		return hoursSinceLastUpdate;
	}
}
