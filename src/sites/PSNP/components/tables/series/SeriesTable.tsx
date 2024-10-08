import {DbSeries} from '../../../models/dbSeries';
import * as css from '../../css/SeriesTable';
import {
	ColumnFiltersState,
	SortingState,
	flexRender,
	getCoreRowModel,
	getFacetedMinMaxValues,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import {useState} from 'preact/hooks';
import {parseNum} from 'trophyutil';
import {JSX} from 'preact';
import {IUserSettings} from '../../../../../shared/services/userPrefs/types';
import {fractionInner} from '../../css/SeriesRow';
import {SeriesTableMiscSortKey, useSeriesTableColumns} from './useSeriesColumns';
import {ColumnFilter} from '../ColumnFilter';
import {SortingIcon} from '../SortingIcon';

interface SeriesTableProps {
	allSeries: DbSeries[];
	prefs: IUserSettings;
}

export const SeriesTable: preact.FunctionComponent<SeriesTableProps> = ({allSeries, prefs}) => {
	const [numRowsToShow, setNumRowsToShow] = useState(50);
	const [sorting, setSorting] = useState<SortingState>([{id: 'userLatestTrophy', desc: true}]);
	const [miscSortKey, setMiscSortKey] = useState<SeriesTableMiscSortKey>('userLatestTrophy');
	const [radioValPlats, setRadioValPlats] = useState<null | 0 | 1>(prefs.PSNP.bools.platifySeriesHideNonplats.value ? 1 : null);
	const [radioValCompletion, setRadioValCompletion] = useState<null | 0 | 1>(null);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(() => [{id: 'bestCompleted', value: radioValPlats}]);
	const {columns} = useSeriesTableColumns({
		sorting,
		setColumnFilters,
	});

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
				updatedAt: false,
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
										setMiscSortKey(e.currentTarget.value as SeriesTableMiscSortKey);
										setSorting(prevSorting => prevSorting.filter(sort => sort.id !== miscSortKey));
									}}
								>
									<option key={miscSortKey} value={'userLatestTrophy' satisfies SeriesTableMiscSortKey}>
										Date Played
									</option>
									<option key={miscSortKey} value={'updatedAt' satisfies SeriesTableMiscSortKey}>
										Date Updated
									</option>
									<option key={miscSortKey} value={'bestCompleted' satisfies SeriesTableMiscSortKey}>
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
														<ColumnFilter column={header.column} table={table} />
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
