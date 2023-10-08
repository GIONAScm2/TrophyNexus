import {Column, ColumnFiltersState, HeaderContext, SortingState, createColumnHelper} from '@tanstack/react-table';
import {DbSeries} from '../../../models/dbSeries';
import {TrophyCount} from 'trophyutil';
import {fractionInner} from '../../css/SeriesRow';
import {JSXInternal} from 'preact/src/jsx';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort} from '@fortawesome/free-solid-svg-icons/faSort';
import {faSortUp} from '@fortawesome/free-solid-svg-icons/faSortUp';
import {faSortDown} from '@fortawesome/free-solid-svg-icons/faSortDown';
import {faFilter} from '@fortawesome/free-solid-svg-icons/faFilter';
import {TrophyCountRow} from '../../TrophyCount';
import {SeriesRowName, SeriesRowStages, SeriesRowGames} from './SeriesRow';
import {useState, useMemo, StateUpdater} from 'preact/hooks';
import { DbGame } from '../../../models/dbGame';
import { SortingIcon } from '../SortingIcon';

type StagesCellSortKey = keyof Pick<
	DbSeries,
	'userNumStagesCompleted' | 'userNumStagesTotal' | 'userPercentStagesCompleted' | 'userNumStagesIncomplete'
>;
type GamesCellSortKey = keyof Pick<
	DbSeries,
	'userNumGamesCompleted' | 'userNumGamesTotal' | 'userPercentGamesCompleted' | 'userNumGamesIncomplete'
>;
type KeyType = keyof Pick<
	DbSeries,
	'trophyCount' | 'userTrophyCount' | 'numTrophies' | 'userNumTrophies' | 'points' | 'userPoints'
>;
type TrophyCellSortKey<K extends KeyType = KeyType> = K extends 'trophyCount' | 'userTrophyCount'
	? [K, keyof TrophyCount]
	: [K, null];
export type MiscSortKey = 'userLatestTrophy' | 'bestCompleted';


const FilterIcon: preact.FunctionComponent<{headerContext: HeaderContext<DbSeries, unknown>}> = ({headerContext}) => {
	const isFiltered = headerContext.column.getIsFiltered();
	return isFiltered ? <span>{<FontAwesomeIcon icon={faFilter} />}</span> : null;
};

const col = createColumnHelper<DbSeries>();

interface UseSeriesTableColumnsProps {
	sorting: SortingState;
	setColumnFilters: StateUpdater<ColumnFiltersState>;
	numRowsToShow: number;
}
export function useSeriesTableColumns({sorting, setColumnFilters, numRowsToShow}: UseSeriesTableColumnsProps) {
	const [stagesCellSortKey, setStagesCellSortKey] = useState<StagesCellSortKey>('userNumStagesCompleted');
	const [gamesCellSortKey, setGamesCellSortKey] = useState<GamesCellSortKey>('userNumGamesCompleted');
	const [trophyCellSortKey, setTrophyCellSortKey] = useState<TrophyCellSortKey>(['userNumTrophies', null]);

	const columns = useMemo(() => {
		return [
			col.accessor(x => '', {
				id: 'bestCompleted' satisfies MiscSortKey,
				enableHiding: true,
				header: h => 'Best Completed',
				sortingFn: (rowA, rowB, columnId) => {
					const sA = rowA.original;
					const sB = rowB.original;

					let aPercent = Number.isNaN(sA.userPercentGamesCompleted) ? -Infinity : sA.userPercentGamesCompleted;
					let bPercent = Number.isNaN(sB.userPercentGamesCompleted) ? -Infinity : sB.userPercentGamesCompleted;

					// If the percentages are nonzero and equal, more completed games takes precedence.
					if (aPercent > 0 && aPercent === bPercent) {
						return sB.userNumGamesCompleted - sA.userNumGamesCompleted;
					}

					// If the percentages are zero and equal, less games takes precedence. (i.e., series is closer to being attainable)
					if (aPercent === 0 && aPercent === bPercent) {
						return sA.userNumGamesTotal - sB.userNumGamesTotal;
					}
					// Otherwise, sort by the percentage
					return bPercent - aPercent;
				},
				// Irrelevant filter; using this slot for convenience/performance
				filterFn: (row, columnId, value, addMeta) => {
					// `value` will either be `null` (all), `0` (nonplats only) or `1` (plats only)
					if (value === null) return true;

					const hasPlat = !!row.original.trophyCount.platinum;
					if (value === 1) return hasPlat;
					else return !hasPlat;
				},
			}),
			col.accessor('userLatestTrophy' satisfies MiscSortKey, {
				enableHiding: true,
				header: h => 'Date',
				sortingFn: (rowA, rowB, columnId) => {
					const dateA = rowA.original.userLatestTrophy;
					const dateB = rowB.original.userLatestTrophy;
					const isDesc = sorting.find(s => s.id === columnId)?.desc || false;

					if (dateA === 0) return isDesc ? -1 : 1;
					if (dateB === 0) return isDesc ? 1 : -1;
					return dateA - dateB;
				},
				// Irrelevant filter; using this slot for convenience/performance
				filterFn: (row, columnId, value, addMeta) => {
					// `value` will either be `null` (all), `0` (incomplete series only) or `1` (completed series only)
					if (value === null) return true;

					const completed = row.original.userPercentGamesCompleted === 100;
					if (value === 1) return completed;
					else return !completed;
				},
			}),
			col.accessor('_id', {
				size: 100,
				maxSize: 150,
				enableColumnFilter: false,
				header: h => {
					return (
						<>
							<FilterIcon headerContext={h} />
							<span style={{margin: '0px 5px'}}>ID</span>
							<SortingIcon column={h.column} />
						</>
					);
				},
				cell: ({row, table, renderValue, cell}) => {
					const sorted = table.getSortedRowModel().flatRows;
					const index = sorted.findIndex(r => r.original._id === row.original._id)+1;

					/** This line stopped working after separating columns into this new file. Always returns index -1. */
					// const index = table.getSortedRowModel().flatRows.indexOf(row) + 1;

					return (
						<div
							style={{
								display: 'grid',
								gridTemplateRows: 'repeat(5, 1fr)',
								justifyItems: 'center',
								alignItems: 'center',
							}}
						>
							<div style={{...fractionInner, fontSize: '30px', gridArea: '1 / 1 / 5 / 2'}}>{index}</div>
							<div style={{gridArea: '5 / 1 / 6 / 2'}}>
								<b>#</b>
								{row.original._id}
							</div>
						</div>
					);
				},
			}),
			col.accessor('name', {
				size: 350,
				maxSize: 400,
				cell: ({row}) => <SeriesRowName series={row.original} />,
				header: h => (
					<>
						<FilterIcon headerContext={h} />
						<span style={{margin: '0px 5px'}}>Name</span>
						<SortingIcon column={h.column} />
					</>
				),
				sortingFn: (rowA, rowB, columnId) => rowA.original.name.localeCompare(rowB.original.name),
			}),

			col.accessor(stagesCellSortKey, {
				id: stagesCellSortKey,
				size: 230,
				maxSize: 250,
				cell: ({row}) => <SeriesRowStages series={row.original} />,
				header: h => (
					<>
						<FilterIcon headerContext={h} />
						<span style={{margin: '0px 5px'}}>Stages</span>
						<SortingIcon column={h.column} />
						<div style={{marginTop: '10px'}}>
							<select
								value={stagesCellSortKey}
								onChange={e => {
									setStagesCellSortKey(e.currentTarget.value as StagesCellSortKey);
									setColumnFilters(prevFilters =>
										prevFilters.filter(filter => filter.id !== stagesCellSortKey)
									);
								}}
								style={{fontWeight: 'normal', fontSize: '14px'}}
							>
								<option value="userNumStagesCompleted"># Completed</option>
								<option value="userNumStagesIncomplete"># Incomplete</option>
								<option value="userNumStagesTotal"># Total</option>
								<option value="userPercentStagesCompleted">% Completed</option>
							</select>
						</div>
					</>
				),
				sortingFn: (rowA, rowB, columnId) => rowA.original[stagesCellSortKey] - rowB.original[stagesCellSortKey],
			}),
			col.accessor(gamesCellSortKey, {
				id: gamesCellSortKey,
				size: 230,
				maxSize: 250,
				cell: ({row}) => <SeriesRowGames series={row.original} />,
				header: h => (
					<>
						<FilterIcon headerContext={h} />
						<span style={{margin: '0px 5px'}}>Games</span>
						<SortingIcon column={h.column} />
						<div style={{marginTop: '10px'}}>
							<select
								value={gamesCellSortKey}
								onChange={e => {
									setGamesCellSortKey(e.currentTarget.value as GamesCellSortKey);
									setColumnFilters(prevFilters => prevFilters.filter(filter => filter.id !== gamesCellSortKey));
								}}
								style={{fontWeight: 'normal', fontSize: '14px'}}
							>
								<option value="userNumGamesCompleted"># Completed</option>
								<option value="userNumGamesIncomplete"># Incomplete</option>
								<option value="userNumGamesTotal"># Total</option>
								<option value="userPercentGamesCompleted">% Completed</option>
							</select>
						</div>
					</>
				),
				sortingFn: (rowA, rowB, columnId) => rowA.original[gamesCellSortKey] - rowB.original[gamesCellSortKey],
			}),
			col.accessor(
				row => {
					const val1 = row[trophyCellSortKey[0]];
					if (typeof val1 === 'number') return val1;
					else return val1[trophyCellSortKey[1]!];
				},
				{
					id: `${trophyCellSortKey[0]}${trophyCellSortKey[1] ?? ''}`,
					size: 250,
					maxSize: 300,
					cell: ({row}) => <TrophyCountRow entity={row.original} />,
					header: h => (
						<>
							<FilterIcon headerContext={h} />
							<span style={{margin: '0px 5px'}}>Trophies</span>
							<SortingIcon column={h.column} />
							<div style={{marginTop: '10px'}}>
								<select
									value={JSON.stringify(trophyCellSortKey)}
									onChange={e => {
										const newValue = JSON.parse(e.currentTarget.value) as TrophyCellSortKey;
										setTrophyCellSortKey(newValue);
										setColumnFilters(prevFilters =>
											prevFilters.filter(
												filter => filter.id !== `${trophyCellSortKey[0]}${trophyCellSortKey[1] ?? ''}`
											)
										);
									}}
									style={{fontWeight: 'normal', fontSize: '14px'}}
								>
									<option value={JSON.stringify(['userPoints', null])}>Points (Earned)</option>
									<option value={JSON.stringify(['points', null])}>Points (All)</option>
									<option value={JSON.stringify(['userNumTrophies', null])}>Trophies (Earned)</option>
									<option value={JSON.stringify(['numTrophies', null])}>Trophies (All)</option>
									<option value={JSON.stringify(['userTrophyCount', 'platinum'])}>Platinum (Earned)</option>
									<option value={JSON.stringify(['trophyCount', 'platinum'])}>Platinum (All)</option>
									<option value={JSON.stringify(['userTrophyCount', 'gold'])}>Gold (Earned)</option>
									<option value={JSON.stringify(['trophyCount', 'gold'])}>Gold (All)</option>
									<option value={JSON.stringify(['userTrophyCount', 'silver'])}>Silver (Earned)</option>
									<option value={JSON.stringify(['trophyCount', 'silver'])}>Silver (All)</option>
									<option value={JSON.stringify(['userTrophyCount', 'bronze'])}>Bronze (Earned)</option>
									<option value={JSON.stringify(['trophyCount', 'bronze'])}>Bronze (All)</option>
								</select>
							</div>
						</>
					),
					sortingFn: (rowA, rowB, columnId) => {
						let comparisonValue = 0;
						const key1 = trophyCellSortKey[0];

						if (key1 === 'trophyCount' || key1 === 'userTrophyCount') {
							const key2 = trophyCellSortKey[1];
							comparisonValue = rowA.original[key1][key2] - rowB.original[key1][key2];
						} else comparisonValue = rowA.original[key1] - rowB.original[key1];
						return comparisonValue;
					},
				}
			),
		];
	}, [sorting, stagesCellSortKey, gamesCellSortKey, trophyCellSortKey]);

	return {columns, setStagesCellSortKey, setGamesCellSortKey, setTrophyCellSortKey};
}
