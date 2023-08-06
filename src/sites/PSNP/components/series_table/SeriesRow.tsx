import ProgressBar from '../../../../shared/components/ProgressBar';
import {DbSeries} from '../../models/dbSeries';
import {msToDateString} from '../../util/dates';
import {TrophyCountIcons, TrophyCountMetrics} from '../TrophyCount';
import * as _css from '../css/SeriesRow';

interface SeriesRowProps {
	series: DbSeries;
}

/** Series name, image, and date of last trophy earned */
export const SeriesRowName: preact.FunctionComponent<SeriesRowProps> = ({series: s}) => {
	return (
		<>
			{/* TODO: Create a flex container with a small ratio for row number on left side. */}
			<div class="game-title" style={{fontSize: '2rem', fontWeight: 'bold', paddingBottom: '0.5rem'}}>
				{s.name}
			</div>
			<a href={`/series/${s._idAndName}`}>
				<picture class="series">
					<img src={s.src} />
				</picture>
			</a>
			{!!s.userLatestTrophy && (
				<div class="small-info" style="margin-top: 4px">
					{msToDateString(s.userLatestTrophy)}
				</div>
			)}
		</>
	);
};

export const SeriesRowStages: preact.FunctionComponent<SeriesRowProps> = ({series: s}) => {
	const stagePercentage = s.userPercentStagesCompleted;
	return (
		<>
			<span class="separator">
				<span class="typo-top" style={_css.fractionInner}>
					{`${s.userNumStagesCompleted}/${s.userNumStagesTotal}`}
				</span>
				<ProgressBar progress={stagePercentage / 100}>{`${stagePercentage}%`}</ProgressBar>
			</span>
		</>
	);
};
export const SeriesRowGames: preact.FunctionComponent<SeriesRowProps> = ({series: s}) => {
	return (
		<>
			<span class="separator">
				<span class="typo-top" style={_css.fractionInner}>
					{`${s.userNumGamesCompleted}/${s.userNumGamesTotal}`}
				</span>
				<ProgressBar progress={s.userPercentGamesCompleted / 100}>{`${s.userPercentGamesCompleted}%`}</ProgressBar>
			</span>
		</>
	);
};

/** A 1x2 grid housing one row for the trophy icons and one for the count of trophies & points. */
export const SeriesRowTrophyCount: preact.FunctionComponent<SeriesRowProps> = ({series: s}) => {
	return (
		<div class="tc-cell" style={{display: 'grid', gridTemplateRows: '1fr 1fr', justifyItems: 'center', rowGap: '1rem'}}>
			<TrophyCountIcons tcAll={s.trophyCount} tcUser={s.userTrophyCount} />
			<TrophyCountMetrics
				numTrophies={s.numTrophies}
				numPoints={s.points}
				userNumTrophies={s.userNumTrophies}
				userNumPoints={s.userPoints}
			/>
		</div>
	);
};
