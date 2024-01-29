export type IUserSettings = {psnId: string; PSNP: UserDataPSNP};

export type UserDataPSNP = {
	isFlagged: boolean;
	lastUpdatedUserGames: number;
	lastUpdatedAllGames: number;
	lastUpdatedAllSeries: number;
	/** If true, ModalCache isn't rendered and the user must manually initiate it. */
	suppressCacheModal: boolean;
	bools: UserBoolsPSNP;
};

export interface UserBoolsPSNP {
	/** May wish to disable on lower-end hardware. */
	renderSeriesTable: BoolProps;
	renderGamesTable: BoolProps;
	rarestTrophiesUnique: BoolProps;
	hideFlagBlock: BoolProps;
	trophyCheckboxes: BoolProps;
	/** Platted games are treated as completed games, like when viewing a game series stage. */
	platifyComplation: BoolProps;
	/** Hides nonplats on series pages */
	platifySeriesHideNonplats: BoolProps;
	/** Platted games always display a full progress bar. (number is unaffected) */
	// platifyProgressBarFilled = 'platifyProgressBarFilled',
	/** Platted games' progress bar always displays 100%. (bar fill is unaffected) */
	// platifyProgressBar100 = 'platifyProgressBar100',
	// inject100Club = 'inject100Club',
}
export type BoolProps = {
	/** User-facing alias */
	name: string;
	desc: string;
	value: boolean;
	category: 'general' | 'platify' | 'flagged';
};

export type PrefTimestampKey = keyof Pick<
	IUserSettings['PSNP'],
	'lastUpdatedAllGames' | 'lastUpdatedAllSeries' | 'lastUpdatedUserGames'
>;
