import type {IUserSettings} from './types';

const DefaultUserSettings = {
	psnId: '',
	PSNP: {
		isFlagged: false,
		lastUpdatedUserGames: 0,
		lastUpdatedAllGames: 0,
		lastUpdatedAllSeries: 0,
		suppressCacheModal: false,
		bools: {
			renderSeriesTable: {
				value: true as boolean,
				name: 'Render Series Table',
				desc: `Replaces the series catalog with a powerful custom table`,
				category: 'general',
			},
			rarestTrophiesUnique: {
				value: true as boolean,
				name: 'Unique rarest trophies',
				desc: `Forces 'Rarest Trophies' to show only one trophy per game.`,
				category: 'general',
			},
			hideFlagBlock: {
				value: true as boolean,
				name: 'Hide flag block',
				desc: 'Hides red flag block from profile',
				category: 'flagged',
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

			platifyComplation: {
				value: false as boolean,
				name: `Complation`,
				desc: `Platted games are treated as completed games, like when viewing a game series stage.`,
				category: 'platify',
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
			platifySeriesHideNonplats: {
				value: false as boolean,
				name: '[Series] Hide Nonplats',
				desc: 'Hides nonplats on series pages',
				category: 'platify',
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
		},
	},
} satisfies IUserSettings;

export default DefaultUserSettings;
