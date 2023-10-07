import {DbSeries} from '../../models/dbSeries';
import {SeriesRowGames, SeriesRowName, SeriesRowStages} from './SeriesRow';
import {TrophyCountRow} from '../TrophyCount';
import * as css from '../css/SeriesTable';
import {
	Column,
	ColumnFiltersState,
	HeaderContext,
	SortingState,
	Table,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getFacetedMinMaxValues,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import {StateUpdater, useEffect, useMemo, useState} from 'preact/hooks';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort} from '@fortawesome/free-solid-svg-icons/faSort';
import {faSortUp} from '@fortawesome/free-solid-svg-icons/faSortUp';
import {faSortDown} from '@fortawesome/free-solid-svg-icons/faSortDown';
import {faFilter} from '@fortawesome/free-solid-svg-icons/faFilter';
import {TrophyCount, parseNum} from 'trophyutil';
import {fractionInner} from '../css/SeriesRow';
import {JSX} from 'preact';
import {JSXInternal} from 'preact/src/jsx';
import {IUserSettings} from '../../../../shared/services/userPrefs/types';

interface SeriesTableProps {
	allSeries: DbSeries[];
	prefs: IUserSettings;
}

// TODO: Add advanced filter (Show|hide) series missing (>|exactly|<)  <text input num> (games|stages)

const col = createColumnHelper<DbSeries>();

type CheckboxFilterOpts = {
	labelText: string;
	state: boolean;
	setState: StateUpdater<boolean>;
};
const renderCheckboxFilter: preact.FunctionComponent<CheckboxFilterOpts> = props => {
	return (
		<div className="filter-bool">
			<label>
				<input
					type="checkbox"
					checked={props.state}
					onChange={e => props.setState(e.currentTarget.checked)}
					style={{marginRight: '5px'}}
				/>
				{props.labelText}
			</label>
		</div>
	);
};

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
type MiscSortKey = 'userLatestTrophy' | 'bestCompleted';

interface SortingIconProps {
	column: Column<DbSeries, unknown> | undefined;
	css?: JSXInternal.CSSProperties;
}
const SortingIcon: preact.FunctionComponent<SortingIconProps> = ({column, css = {}}) => {
	if (!column) return null;

	const sortDir = column.getIsSorted();
	const icon = !sortDir ? faSort : sortDir === 'asc' ? faSortUp : faSortDown;

	return (
		<span onClick={column.getToggleSortingHandler()}>
			<FontAwesomeIcon icon={icon} style={{color: sortDir ? 'cornflowerblue' : '', ...css}} />
		</span>
	);
};
const FilterIcon: preact.FunctionComponent<{headerContext: HeaderContext<DbSeries, unknown>}> = ({headerContext}) => {
	const isFiltered = headerContext.column.getIsFiltered();
	return isFiltered ? <span>{<FontAwesomeIcon icon={faFilter} />}</span> : null;
};

export const SeriesTable: preact.FunctionComponent<SeriesTableProps> = ({allSeries, prefs}) => {
	const [numRowsToShow, setNumRowsToShow] = useState(50);
	const [sorting, setSorting] = useState<SortingState>([{id: 'userLatestTrophy', desc: true}]);
	const [stagesCellSortKey, setStagesCellSortKey] = useState<StagesCellSortKey>('userNumStagesCompleted');
	const [gamesCellSortKey, setGamesCellSortKey] = useState<GamesCellSortKey>('userNumGamesCompleted');
	const [trophyCellSortKey, setTrophyCellSortKey] = useState<TrophyCellSortKey>(['userNumTrophies', null]);
	const [miscSortKey, setMiscSortKey] = useState<MiscSortKey>('userLatestTrophy');
	const [radioValPlats, setRadioValPlats] = useState<null | 0 | 1>(prefs.PSNP.bools.platifySeriesHideNonplats.value ? 1 : null);
	const [radioValCompletion, setRadioValCompletion] = useState<null | 0 | 1>(null);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(() => [{id: 'bestCompleted', value: radioValPlats}]);

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
				size: 80,
				maxSize: 100,
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
				cell: ({row, table}) => {
					const index = table.getSortedRowModel().flatRows.indexOf(row) + 1;
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

	const table = useReactTable({
		defaultColumn: {
			minSize: 0,
			size: 0,
		},
		data: allSeries,
		columns,
		initialState: {
			columnVisibility: {
				userLatestTrophy: false,
				bestCompleted: false,
			},
		},
		state: {
			sorting,
			columnFilters,
		},
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedMinMaxValues: getFacetedMinMaxValues(),
		onSortingChange: setSorting,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
	});

	const updatePlatRadioFilter = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
		const val = JSON.parse(e.currentTarget.value) as null | 0 | 1;
		setRadioValPlats(val);
		setColumnFilters(prevFilters => {
			const updated = prevFilters.filter(filter => filter.id !== 'bestCompleted');
			updated.push({id: 'bestCompleted', value: val});
			return updated;
		});
	};
	const updateCompletionRadioFilter = (e: JSX.TargetedEvent<HTMLInputElement, Event>) => {
		const val = JSON.parse(e.currentTarget.value) as null | 0 | 1;
		setRadioValCompletion(val);
		setColumnFilters(prevFilters => {
			const updated = prevFilters.filter(filter => filter.id !== 'userLatestTrophy');
			updated.push({id: 'userLatestTrophy', value: val});
			return updated;
		});
	};

	return (
		<div className="col-xs-8" style={{flexBasis: '100%', maxWidth: '100%'}}>
			<div className="title flex v-align">
				<div className="grow">
					<h3>Series</h3>
				</div>
			</div>
			<div className="p-2">
				{/* START OF INFO PANEL */}
				<div style={{display: 'flex'}}>
					<div className="h-2 tn-grid" id="tn-info-panel" style={css.infoPanel}>
						<div class="tn-grid-col col1" style={{...css.infoPanel1}}>
							<div id="num-rows">
								<select
									name="num-rows"
									id="num-rows-select"
									value={numRowsToShow.toString()}
									onChange={e => {
										const val = e.currentTarget.value;
										const num = parseNum(val);
										const numRows = Number.isNaN(num) ? allSeries.length : num;
										setNumRowsToShow(numRows);
									}}
								>
									{['50', '100', '250', '500', '1000', `${allSeries.length}`].map(num => (
										<option value={num}>{num}</option>
									))}
								</select>
								<label for="num-rows-select"> Rows</label>
							</div>
							<div id="series-count">
								<span style={{...fractionInner, marginRight: '20px'}}>
									{table.getFilteredRowModel().rows.length}/{allSeries.length}
								</span>
							</div>
						</div>
						<div class="tn-grid-col col2" id="sorting-presets" style={{...css.infoPanel2}}>
							<span style={{fontSize: '20px', fontWeight: 'bold'}}>Sorting Presets:</span>
							<div
								style={{
									display: 'grid',
									gridTemplateRows: 'auto',
									gridTemplateColumns: 'min-content auto',
									columnGap: '3px',
									fontSize: '16px',
								}}
							>
								<select
									value={miscSortKey}
									onChange={e => {
										setMiscSortKey(e.currentTarget.value as MiscSortKey);
										setSorting(prevSorting => prevSorting.filter(sort => sort.id !== miscSortKey));
									}}
								>
									<option key={miscSortKey} value={'userLatestTrophy' satisfies MiscSortKey}>
										Date Played
									</option>
									<option key={miscSortKey} value={'bestCompleted' satisfies MiscSortKey}>
										Best Completions
									</option>
								</select>
								<SortingIcon column={table.getColumn(miscSortKey)} css={{height: '26px'}} />
							</div>
						</div>
						<div class="tn-grid-col col3" id="filter-options" style={{...css.infoPanel3}}>
							<span style={{fontSize: '20px', fontWeight: 'bold'}}>Filter Options:</span>
							<div
								style={{
									display: 'grid',
									gridTemplateRows: 'repeat(1, auto)',
									gridTemplateColumns: 'repeat(6, min-content)',
									columnGap: '5px',
									fontSize: '16px',
								}}
							>
								<input
									type="radio"
									id="all"
									name="hasPlat"
									value="null"
									checked={radioValPlats === null}
									onChange={updatePlatRadioFilter}
								/>
								<label for="all">All</label>
								<input
									type="radio"
									id="nonplats"
									name="hasPlat"
									value="0"
									checked={radioValPlats === 0}
									onChange={updatePlatRadioFilter}
								/>
								<label for="nonplats">Nonplats</label>
								<input
									type="radio"
									id="plats"
									name="hasPlat"
									value="1"
									checked={radioValPlats === 1}
									onChange={updatePlatRadioFilter}
								/>
								<label for="plats">Plats</label>
							</div>
							<div
								style={{
									display: 'grid',
									gridTemplateRows: 'repeat(1, auto)',
									gridTemplateColumns: 'repeat(6, min-content)',
									columnGap: '5px',
									fontSize: '16px',
								}}
							>
								<input
									type="radio"
									id="all"
									name="completion"
									value="null"
									checked={radioValCompletion === null}
									onChange={updateCompletionRadioFilter}
								/>
								<label for="all">All</label>
								<input
									type="radio"
									id="incomplete"
									name="completion"
									value="0"
									checked={radioValCompletion === 0}
									onChange={updateCompletionRadioFilter}
								/>
								<label for="incomplete">Incomplete</label>
								<input
									type="radio"
									id="completed"
									name="completion"
									value="1"
									checked={radioValCompletion === 1}
									onChange={updateCompletionRadioFilter}
								/>
								<label for="completed">Completed</label>
							</div>
						</div>
					</div>
				</div>

				{/* END OF INFO PANEL */}

				<table id="game_list" style={css.table}>
					<thead>
						{table.getHeaderGroups().map(headerGroup => (
							<tr key={headerGroup.id}>
								{headerGroup.headers.map(header => (
									<th
										key={header.id}
										colSpan={header.colSpan}
										style={{...css.th, width: header.getSize() !== 0 ? header.getSize() : undefined}}
									>
										{header.isPlaceholder ? null : (
											<>
												<div
													{...{
														className: header.column.getCanSort() ? 'cursor-pointer select-none' : '',
													}}
												>
													{flexRender(header.column.columnDef.header, header.getContext())}
												</div>
												{header.column.getCanFilter() ? (
													<div>
														<Filter column={header.column} table={table} />
													</div>
												) : null}
											</>
										)}
									</th>
								))}
							</tr>
						))}
					</thead>

					<tbody>
						{table
							.getRowModel()
							.rows.slice(0, numRowsToShow)
							.map(row => {
								return (
									<tr key={row.id}>
										{row.getVisibleCells().map(cell => {
											return (
												<td
													key={cell.id}
													style={{
														...css.td,
														width: cell.column.getSize() !== 0 ? cell.column.getSize() : undefined,
													}}
												>
													{flexRender(cell.column.columnDef.cell, cell.getContext())}
												</td>
											);
										})}
									</tr>
								);
							})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

interface DebouncedInputProps extends Omit<JSX.IntrinsicElements['input'], 'onChange'> {
	value: string | number;
	onChange: (value: string | number) => void;
	debounce?: number;
}
const DebouncedInput: preact.FunctionComponent<DebouncedInputProps> = ({
	value: initialValue,
	onChange,
	debounce = 300,
	...props
}) => {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			onChange(value);
		}, debounce);

		return () => clearTimeout(timeout);
	}, [value]);

	return <input {...props} value={value} onInput={(e: any) => setValue(e.target.value)} />;
};

function Filter({column, table}: {column: Column<DbSeries>; table: Table<DbSeries>}) {
	const firstValue = table.getFilteredRowModel().flatRows[0]?.getValue(column.id);
	const columnFilterValue = column.getFilterValue();

	return typeof firstValue === 'number' ? (
		<div>
			<div className="flex space-x-2" style={{justifyContent: 'center'}}>
				<DebouncedInput
					type="number"
					min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
					max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
					value={(columnFilterValue as [number, number])?.[0] ?? ''}
					onChange={value => column.setFilterValue((old: [number, number]) => [value, old?.[1]])}
					placeholder={`Min`}
					className="w-24 border shadow rounded"
					style={{...css.inputDebounced, marginRight: '10px'}}
				/>
				<DebouncedInput
					type="number"
					min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
					max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
					value={(columnFilterValue as [number, number])?.[1] ?? ''}
					onChange={value => column.setFilterValue((old: [number, number]) => [old?.[0], value])}
					placeholder={`Max`}
					className="w-24 border shadow rounded"
					style={css.inputDebounced}
				/>
			</div>
			<div className="h-1" />
		</div>
	) : (
		<>
			<DebouncedInput
				type="text"
				value={(columnFilterValue ?? '') as string}
				onChange={value => column.setFilterValue(value)}
				placeholder={`Search ${column.getFacetedUniqueValues().size} rows`}
				className="w-36 border shadow rounded"
				list={column.id + 'list'}
				style={css.inputDebounced}
			/>
			<div className="h-1" />
		</>
	);
}
