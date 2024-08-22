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
			renderGamesTable: {
				value: false as boolean,
				name: 'Render Games Table',
				desc: `Replaces the games catalog with a powerful custom table`,
				category: 'general',
			},
			rarestTrophiesUnique: {
				value: true as boolean,
				name: 'Unique rarest trophies',
				desc: `Forces 'Rarest Trophies' to show only one trophy per game.`,
				category: 'general',
			},
			trophyCheckboxes: {
				value: false as boolean,
				name: 'Copyable trophies',
				desc: 'Adds checkboxes to trophy lists to copy their names and descriptions to clipboard.',
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
				desc: 'Hides nonplat games/stages from game series.',
				category: 'platify',
			},
		},
	},
} satisfies IUserSettings;

export default DefaultUserSettings;
