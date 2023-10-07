import type {JSXInternal} from 'preact/src/jsx';
import type {TrophyCount, TrophyGrade} from 'trophyutil';
import type {DbSeries} from '../models/dbSeries';
import type {DbGame} from '../models/dbGame';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrophy} from '@fortawesome/free-solid-svg-icons/faTrophy';
import {faStar} from '@fortawesome/free-solid-svg-icons/faStar';
import * as css from './css/TrophyCount';
import {JSX} from 'preact';

interface RowProps {
	entity: DbGame | DbSeries;
}

interface IconGroupProps {
	tcAll: TrophyCount;
	tcUser?: TrophyCount;
}

interface IconProps {
	iconType: IconType;
	total: number;
	grade?: Lowercase<TrophyGrade>;
	earned?: number;
}

export type IconType = 'grade' | 'numTrophies' | 'numPoints';

interface MetricsProps {
	numTrophies: number;
	numPoints: number;
	userNumTrophies?: number;
	userNumPoints?: number;
}

/** 1x2 grid: one row for trophy icons, one for count of trophies & points. */
export const TrophyCountRow: preact.FunctionComponent<RowProps> = ({entity}) => {
	const fallback: TrophyCount = {
		bronze: 0,
		silver: 0,
		gold: 0,
		platinum: 0,
	};
	return (
		<div class="tc-cell" style={css.tcCell}>
			<GradeIconGroup tcAll={entity.trophyCount ?? fallback} tcUser={entity.userTrophyCount} />
			<MetricIconGroup
				numTrophies={entity.numTrophies ?? 0}
				numPoints={entity.points ?? 0}
				userNumTrophies={entity.userNumTrophies}
				userNumPoints={entity.userPoints}
			/>
		</div>
	);
};

/** 4x1 grid, each cell containing a trophy icon and its count. */
const GradeIconGroup: preact.FunctionComponent<IconGroupProps> = ({tcAll, tcUser}) => {
	return (
		<div class="tcGradeIconGroup" style={css.tcGradeIconGroup}>
			<IconCount iconType="grade" grade="platinum" total={tcAll.platinum} earned={tcUser?.platinum} />
			<IconCount iconType="grade" grade="gold" total={tcAll.gold} earned={tcUser?.gold} />
			<IconCount iconType="grade" grade="silver" total={tcAll.silver} earned={tcUser?.silver} />
			<IconCount iconType="grade" grade="bronze" total={tcAll.bronze} earned={tcUser?.bronze} />
		</div>
	);
};

/** A 2x1 grid of numTrophies and numPoints. */
const MetricIconGroup: preact.FunctionComponent<MetricsProps> = ({numTrophies, numPoints, userNumPoints, userNumTrophies}) => {
	return (
		<div class="tcMetricIconGroup" style={css.tcMetricIconGroup}>
			<IconCount iconType="numTrophies" total={numTrophies} earned={userNumTrophies} />
			<IconCount iconType="numPoints" total={numPoints} earned={userNumPoints} />
		</div>
	);
};

/** 2x2 grid representing an icon (left column) and its quantity (right column).
 * If `earned` is passed, count is displayed as a fraction. */
const IconCount: preact.FunctionComponent<IconProps> = ({iconType, total, grade, earned}) => {
	let iconSprite;

	if (iconType === 'grade' && grade) {
		const trophyGradeCSS = css.getTrophyGradeCSS(grade);
		iconSprite = (
			<div class={`icon-sprite ${grade}`} style={{...css.iconCountSprite(iconType, !!earned), ...trophyGradeCSS}}></div>
		);
	} else if (iconType === 'numTrophies') {
		iconSprite = <FontAwesomeIcon icon={faTrophy} style={{...css.iconCountSprite(iconType, !!earned)}} />;
	} else if (iconType === 'numPoints') {
		iconSprite = <FontAwesomeIcon icon={faStar} style={{...css.iconCountSprite(iconType, !!earned)}} />;
	}

	if (grade === 'platinum' && total === 0) return <div />;

	return (
		<div class={`iconCount`} style={css.iconCount(iconType)}>
			{iconSprite}
			{!!earned && <div>{earned.toLocaleString()}</div>}
			<div style={earned ? {borderTop: '1px solid black'} : {}}>{total.toLocaleString()}</div>
		</div>
	);
};
