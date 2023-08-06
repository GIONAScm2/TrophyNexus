import type {JSXInternal} from 'preact/src/jsx';
import type {TrophyCount} from 'trophyutil';
import type {DbSeries} from '../models/dbSeries';
import type {DbGame} from '../models/dbGame';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrophy} from '@fortawesome/free-solid-svg-icons/faTrophy';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';

interface TrophyCountIconProps {
	grade: 'bronze' | 'silver' | 'gold' | 'platinum';
	total: number;
	earned?: number;
}
const tcIconCSS = {
	display: 'grid',
	gridTemplateRows: 'auto auto',
	gridTemplateColumns: 'auto auto',
	alignItems: 'center',
	justifyItems: 'center',
	columnGap: '3px',
} as const satisfies JSXInternal.CSSProperties;

/** A 2x2 grid containing the trophy icon in the left column, and the qnty on the right. If `earned` is passed,
 * count is displayed as a fraction. */
const TrophyCountIcon: preact.FunctionComponent<TrophyCountIconProps> = ({grade, total, earned}) => {
	const css = {
		bronze: {color: '#C46438', backgroundPosition: '0 -60px'},
		silver: {color: '#777777', backgroundPosition: '0 -40px'},
		gold: {color: '#C2903E', backgroundPosition: '0 -20px'},
		platinum: {color: '#667FB2', backgroundPosition: '0 0px'},
	}[grade];

	return (
		<div class="tc-icon" style={tcIconCSS}>
			<div class={`icon-sprite ${grade}`} style={{height: '12px', width: '14px', gridRow: 'span 2', ...css}}></div>
			{typeof earned === 'number' && <div>{earned.toLocaleString()}</div>}
			<div style={typeof earned === 'number' ? {borderTop: '1px solid black'} : {}}>{total.toLocaleString()}</div>
		</div>
	);
};

interface TrophyCountIconsProps {
	tcAll: TrophyCount;
	tcUser?: TrophyCount;
}
const tcIconsCSS = {
	display: 'grid',
	gridTemplateColumns: 'repeat(4, auto)',
	width: 'min-content',
	gap: '10px',
} as const satisfies JSXInternal.CSSProperties;

/** A 4x1 grid, each cell containing the trophy icon and count. */
export const TrophyCountIcons: preact.FunctionComponent<TrophyCountIconsProps> = ({tcAll, tcUser}) => {
	return (
		<div class="tc-icons" style={tcIconsCSS}>
			{!!tcAll.platinum && <TrophyCountIcon grade="platinum" total={tcAll.platinum} earned={tcUser?.platinum} />}
			<TrophyCountIcon grade="gold" total={tcAll.gold} earned={tcUser?.gold} />
			<TrophyCountIcon grade="silver" total={tcAll.silver} earned={tcUser?.silver} />
			<TrophyCountIcon grade="bronze" total={tcAll.bronze} earned={tcUser?.bronze} />
		</div>
	);
};

const tcMetricsCSS = {
	display: 'grid',
	gridTemplateColumns: 'repeat(2, auto)',
	alignItems: 'center',
	columnGap: '20px',
	// width: 'min-content',
	fontSize: '1.2rem',
	lineHeight: '1.0rem',
	color: '#666666',
} as const satisfies JSXInternal.CSSProperties;
interface TrophyCountMetricsProps {
	numTrophies: number;
	numPoints: number;
	userNumTrophies?: number;
	userNumPoints?: number;
}

/** A 3x1 grid of numTrophies, •, and numPoints. */
export const TrophyCountMetrics: preact.FunctionComponent<TrophyCountMetricsProps> = ({
	numTrophies,
	numPoints,
	userNumPoints,
	userNumTrophies,
}) => {
	return (
		<div class="tc-metrics" style={tcMetricsCSS}>
			<div class="tc-num-trophies" style={{...tcIconCSS, alignItems: 'center', lineHeight: '1.5rem'}}>
				{typeof userNumTrophies === 'number' && <div style={{gridColumn: '1'}}>{userNumTrophies.toLocaleString()}</div>}
				<div style={{...(typeof userNumTrophies === 'number' && {borderTop: '1px solid black'}), gridColumn: '1'}}>
					{numTrophies.toLocaleString()}
				</div>
				<FontAwesomeIcon icon={faTrophy} style={{gridArea: '1 / 2 / 3 / 3', height: '50%'}} />
			</div>
			<div class="tc-num-points" style={{...tcIconCSS, alignItems: 'center', lineHeight: '1.5rem'}}>
				{typeof userNumPoints === 'number' && <div style={{gridColumn: '1'}}>{userNumPoints.toLocaleString()}</div>}
				<div style={{...(typeof userNumPoints === 'number' && {borderTop: '1px solid black'}), gridColumn: '1'}}>
					{numPoints.toLocaleString()}
				</div>
				<FontAwesomeIcon icon={faStar} style={{gridArea: '1 / 2 / 3 / 3', height: '50%', color: 'limegreen'}} />
			</div>
		</div>
	);
};
