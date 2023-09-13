import {isStandardObj, pruneExtraneousProperties} from 'trophyutil';
import defaultSettings from './defaults';
import type {UserDataPSNP, UserBoolsPSNP} from './types';
import {type IUserSettings} from './types';

export class UserSettings implements IUserSettings {
	static readonly KEY = 'tn-prefs';
	psnId: string;
	PSNP: UserDataPSNP;

	constructor(prefs: Partial<IUserSettings> = {}) {
		const vals = this.extractValuesFromPrefBools({
			...defaultSettings.PSNP.bools,
			...(prefs.PSNP?.bools ?? {}),
		});
		console.log(vals);

		this.psnId = prefs.psnId ?? defaultSettings.psnId;
		this.PSNP = {
			...defaultSettings.PSNP,
			...prefs.PSNP,
			bools: {
				...defaultSettings.PSNP.bools,
				...(prefs.PSNP?.bools ?? {}),
			},
		};
	}

	async save(): Promise<void> {
		await GM.setValue(UserSettings.KEY, JSON.stringify(this));
	}

	// private extractValues() {
	// 	const values = Object.entries(this).map(([key, val]) => {});
	// }

	private extractValuesFromPrefBools(bools: UserBoolsPSNP) {
		const valuesOnly = Object.fromEntries(Object.entries(bools).map(([key, pref]) => [key, {value: pref.value}]));
		return valuesOnly;
	}

	async update(updateObj: Partial<IUserSettings>): Promise<void> {
		const updatedPrefs: IUserSettings = {
			...this,
			...updateObj,
			PSNP: {
				...this.PSNP,
				...updateObj.PSNP,
				bools: {
					...this.PSNP.bools,
					...updateObj.PSNP?.bools,
				},
			},
		};

		Object.assign(this, updatedPrefs);
		await this.save();
	}

	static async load() {
		const loadedData = JSON.parse(await GM.getValue(UserSettings.KEY, '{}'));
		if (!isUserSettings(loadedData)) {
			console.info(`[TrophyNexus] No user prefs detected; using defaults.`);
		}

		const updatedData = pruneExtraneousProperties(defaultSettings, loadedData) ?? {};

		return new UserSettings(updatedData);
	}
}

function isUserSettings(obj: unknown): obj is IUserSettings {
	const keys: (keyof IUserSettings)[] = ['PSNP', 'psnId'];
	return isStandardObj(obj) && keys.every(key => key in obj);
}
