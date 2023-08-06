import {isStandardObj} from 'trophyutil';
import type DefaultUserPrefs from './defaults';
import {BooleanKeys} from '../../types';
import {PrefKey} from './defaults';

export function isUserPrefs(obj: unknown): obj is IUserPrefs {
	const keys: (keyof IUserPrefs)[] = ['PSNP', 'psnId'];
	return isStandardObj(obj) && keys.every(key => key in obj);
}

export enum PrefCategory {
	General = 'general',
	Platify = 'platify',
	Flagged = 'flagged',
}
/** Properties of a boolean setting */
export interface PrefBoolProps {
	/** User-friendly alias */
	name: string;
	/** Tooltip that further explains what the setting does */
	desc: string;
	value: boolean;
	/** `general` for general settings.
	 *
	 * `platify` for platinum-oriented settings.
	 *
	 * `flagged` options should only appear to users who are actually flagged. */
	category: PrefCategory;
}

export type IUserPrefs = typeof DefaultUserPrefs;
export type UserPrefsPsnpBools = typeof DefaultUserPrefs.PSNP.bools;
export type PrefTimestampKey = keyof Pick<
	IUserPrefs['PSNP'],
	'lastUpdatedAllGames' | 'lastUpdatedAllSeries' | 'lastUpdatedUserGames'
>;

export type BooleanPrefKey = BooleanKeys<IUserPrefs['PSNP']> | keyof typeof PrefKey;
