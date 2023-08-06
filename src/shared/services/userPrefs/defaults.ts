import {PrefBoolProps, PrefCategory} from './types';

export enum PrefKey {
	/** Replaces the series catalog with a powerful custom table */
	renderSeriesTable = 'renderSeriesTable',
	rarestTrophiesUnique = 'rarestTrophiesUnique',
	/** Hides red flag block from profile */
	hideFlagBlock = 'hideFlagBlock',
	/** Inject yourself into '100% Club' leaderboards */
	// inject100Club = 'inject100Club',
	/** Doesn't show games for which you've completed all stacks */
	// stackifyHideCompleted = 'stackifyHideCompleted',
	/** Platted games are treated as completed games, like when viewing a game series stage. */
	platifyComplation = 'platifyComplation',
	/** Platted games always display a full progress bar. (number is unaffected) */
	// platifyProgressBarFilled = 'platifyProgressBarFilled',
	/** Platted games' progress bar always displays 100%. (bar fill is unaffected) */
	// platifyProgressBar100 = 'platifyProgressBar100',
	/** Hides nonplats on series pages */
	platifySeriesHideNonplats = 'platifySeriesHideNonplats',
}

/** A boolean setting */
export type PrefBools = Record<PrefKey, PrefBoolProps>;

const DefaultUserPrefs = {
	psnId: '',
	PSNP: {
		/** Whether the user is flagged. */
		isFlagged: false,
		/** Timestamp at which user game data was last updated. */
		lastUpdatedUserGames: 0,
		/** Timestamp at which all Games/DLC data was last updated. */
		lastUpdatedAllGames: 0,
		/** Timestamp at which all Series data was last updated. */
		lastUpdatedAllSeries: 0,
		/** If true, ModalCache isn't rendered and the user must manually initiate it. */
		suppressCacheModal: false,

		/** Boolean, toggleable preferences. */
		bools: {
			[PrefKey.renderSeriesTable]: {
				value: true,
				name: 'Render Series Table',
				desc: `Replaces the series catalog with a powerful custom table`,
				category: PrefCategory.General,
			},
			[PrefKey.rarestTrophiesUnique]: {
				value: true,
				name: 'Unique rarest trophies',
				desc: `Forces 'Rarest Trophies' to show only one trophy per game.`,
				category: PrefCategory.General,
			},
			[PrefKey.hideFlagBlock]: {
				value: true,
				name: 'Hide flag block',
				desc: 'Hides red flag block from profile',
				category: PrefCategory.Flagged,
			},
			// [PrefKey.inject100Club]: {
			// 	value: true,
			// 	name: `Show me in '100% Club'`,
			// 	desc: `Inject yourself into '100% Club' leaderboards`,
			// 	category: PrefCategory.Flagged,
			// },

			// [PrefKey.stackifyHideCompleted]: {
			// 	value: false,
			// 	name: `Stackify - Hide Completed`,
			// 	desc: `Doesn't show games for which you've completed all stacks`,
			// 	category: PrefCategory.General,
			// },
			// rarestTrophiesDistinct: {
			// 	val: false,
			// 	name: `Distinct 'Rarest Trophies' games`,
			// 	desc: `Only shows one trophy per game.`,
			// },

			[PrefKey.platifyComplation]: {
				value: false,
				name: `Complation`,
				desc: `Platted games are treated as completed games, like when viewing a game series stage.`,
				category: PrefCategory.Platify,
			},
			// [PrefKey.platifyProgressBarFilled]: {
			// 	value: false,
			// 	name: `Show as 100% (bar fill)`,
			// 	desc: `Platted games always display a full progress bar. (number is unaffected)`,
			// 	category: PrefCategory.Platify,
			// },
			// [PrefKey.platifyProgressBar100]: {
			// 	value: false,
			// 	name: `Show as 100% (number)`,
			// 	desc: `Platted games' progress bar always displays 100%. (bar fill is unaffected)`,
			// 	category: PrefCategory.Platify,
			// },
			[PrefKey.platifySeriesHideNonplats]: {
				value: false,
				name: '[Series] Hide Nonplats',
				desc: 'Hides nonplats on series pages',
				category: PrefCategory.Platify,
			},

			// ownershipIcons: {
			//     val: true,
			//     name: `Ownership Icons`,
			//     desc: `Lets you mark any game as 'owned', coloring it blue whenever it appears`,
			// },
			// loadAllHideCompleted: {
			//     val: false,
			//     name: `[Load All] Hide Completed`,
			//     desc: `"Load All" buttons will hide your completed games instead of coloring them`,
			// },
			// hideMultiplatform: {
			//     val: false,
			//     name: `Hide Multiplatform From Filtered`,
			//     desc: `Hides multiplatform games from the 'Games' page when a platform filter is applied`,
			// },
		} satisfies PrefBools,
	},
};

export default DefaultUserPrefs;
