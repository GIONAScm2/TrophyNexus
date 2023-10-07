import type {JSXInternal} from 'preact/src/jsx';
import {TrophyGrade} from 'trophyutil';
import {IconType} from '../TrophyCount';

type TrophyGradeCSS = {
	color: string;
	backgroundPosition: string;
};

export function getTrophyGradeCSS(grade: Lowercase<TrophyGrade>): TrophyGradeCSS {
	const trophyGradeCSS = {
		bronze: {color: '#C46438', backgroundPosition: '0 -60px'},
		silver: {color: '#777777', backgroundPosition: '0 -40px'},
		gold: {color: '#C2903E', backgroundPosition: '0 -20px'},
		platinum: {color: '#667FB2', backgroundPosition: '0 0px'},
	};

	return trophyGradeCSS[grade];
}

/** 1x2 grid */
export const tcCell = {
	display: 'grid',
	gridTemplateRows: '1fr 1fr',
	justifyItems: 'center',
	rowGap: '1rem',
} as const satisfies JSXInternal.CSSProperties;

/** 4x1 grid */
export const tcGradeIconGroup = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, auto)',
	alignItems: 'center',
	gap: '1rem',
} as const satisfies JSXInternal.CSSProperties;

/** 2x1 grid */
export const tcMetricIconGroup = {
	display: 'grid',
	gridTemplateColumns: 'repeat(2, auto)',
	alignItems: 'center',
	columnGap: '20px',
	// width: 'min-content',
	fontSize: '1.2rem',
	lineHeight: '1.0rem',
	color: '#666666',
} as const satisfies JSXInternal.CSSProperties;

/** 2x2 grid */
export const iconCount = (iconType: IconType) =>
	({
		display: 'grid',
		gridTemplateRows: 'repeat(2, min-content)',
		gridTemplateColumns: 'repeat(2, min-content)',
		alignItems: 'center',
		justifyItems: 'center',
		justifyContent: 'center',
		columnGap: '3px',
		width: '100%',
		lineHeight: iconType === 'grade' ? 'auto' : '1.5rem',
	} as const satisfies JSXInternal.CSSProperties);

export const iconCountSprite = (iconType: IconType, earnedTrophies: boolean) =>
	({
		gridRow: 'span 2',
		height: earnedTrophies ? '50%' : '100%',
		width: iconType === 'grade' ? '14px' : 'auto',
		color: iconType === 'numPoints' ? 'limegreen' : 'auto',
	} as const satisfies JSXInternal.CSSProperties);
