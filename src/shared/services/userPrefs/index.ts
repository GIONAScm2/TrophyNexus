import {pruneExtraneousProperties} from 'trophyutil';
import DefaultUserPrefs from './defaults';
import {type IUserPrefs, isUserPrefs} from './types';

export class UserPrefs implements IUserPrefs {
	static readonly KEY = 'tn-prefs';
	psnId: string;
	PSNP: IUserPrefs['PSNP'];

	constructor(prefs: Partial<IUserPrefs> = {}) {
		this.psnId = prefs.psnId ?? DefaultUserPrefs.psnId;
		this.PSNP = {
			...DefaultUserPrefs.PSNP,
			...prefs.PSNP,
			bools: {
				...DefaultUserPrefs.PSNP.bools,
				...prefs.PSNP?.bools ?? {},
			},
		};
	}

	async save(): Promise<void> {
		await GM.setValue(UserPrefs.KEY, JSON.stringify(this));
	}

	async update(updateObj: Partial<IUserPrefs>): Promise<void> {
		const updatedPrefs: IUserPrefs = {
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
		const loadedData = JSON.parse(await GM.getValue(UserPrefs.KEY, '{}'));
		if (!isUserPrefs(loadedData)) {
			console.info(`[TrophyNexus] No user prefs detected; using defaults.`);
		}

		const updatedData = pruneExtraneousProperties(DefaultUserPrefs, loadedData) ?? {};

		return new UserPrefs(updatedData);
	}
}
