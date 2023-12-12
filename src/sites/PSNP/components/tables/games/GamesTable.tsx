import {useMemo, useState} from 'preact/hooks';
import {DbGame} from '../../../models/dbGame';
import {
	ColumnFiltersState,
	SortingState,
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
import * as css from '../../css/SeriesTable';
import {GameRowMain} from './GameRow';
import {TrophyCountRow} from '../../TrophyCount';
import {sortColumnByDate} from '../sorting';
import {TrophyCellSortKey} from '../series/useSeriesColumns';
import {FilterIcon} from '../FilterIcon';
import {SortingIcon} from '../SortingIcon';
import {ColumnFilter} from '../ColumnFilter';
import {parseNum} from 'trophyutil';
import {fractionInner} from '../../css/SeriesRow';

interface GamesTableProps {
	allGames: DbGame[];
}
type MiscSortKey = 'latestTrophy';

const col = createColumnHelper<DbGame>();

export const GamesTable: preact.FunctionComponent<GamesTableProps> = ({allGames}) => {
	const [numRowsToShow, setNumRowsToShow] = useState(50);
	const [sorting, setSorting] = useState<SortingState>([{id: 'latestTrophy', desc: false}]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(() => []);
	const [trophyCellSortKey, setTrophyCellSortKey] = useState<TrophyCellSortKey>(['userNumTrophies', null]);
	const [miscSortKey, setMiscSortKey] = useState<MiscSortKey>('latestTrophy');

	const columns = useMemo(() => {
		return [
			col.accessor('latestTrophy' satisfies MiscSortKey, {
				enableHiding: true,
				sortingFn: (rowA, rowB, columnId) => {
					return sortColumnByDate(sorting, rowA, rowB, columnId, x => x.original.latestTrophy ?? 0);
				},
			}),
			col.accessor('createdAt', {
				enableHiding: true,
				header: h => 'Date Created',
				sortingFn: (rowA, rowB, columnId) => {
					return sortColumnByDate(sorting, rowA, rowB, columnId, x => Date.parse(x.original.createdAt));
				},
			}),
			col.accessor('updatedAt', {
				enableHiding: true,
				header: h => 'Date Updated',
				sortingFn: (rowA, rowB, columnId) => {
					return sortColumnByDate(sorting, rowA, rowB, columnId, x => Date.parse(x.original.updatedAt));
				},
			}),
			col.accessor('name', {
				id: 'game',
				size: 500,
				maxSize: 500,
				cell: ({row}) => <GameRowMain game={row.original} />,
				header: h => (
					<>
						<FilterIcon headerContext={h} />
						<span style={{margin: '0px 5px'}}>Game</span>
						<SortingIcon column={h.column} />
					</>
				),
				sortingFn: (rowA, rowB, columnId) => rowA.original.name.localeCompare(rowB.original.name),
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
	}, [sorting, trophyCellSortKey, miscSortKey]);

	const table = useReactTable({
		defaultColumn: {
			minSize: 0,
			size: 0,
		},
		data: allGames,
		columns,
		initialState: {
			columnVisibility: {
				createdAt: false,
				updatedAt: false,
				latestTrophy: false,
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

	return (
		<div className="col-xs-8" style={{flexBasis: '100%', maxWidth: '100%'}}>
			<div className="title flex v-align">
				<div className="grow">
					<h3>Games</h3>
				</div>
			</div>
			<div className="p-2">
				{/* START OF INFO PANEL */}
				<div style={{display: 'flex'}}></div>
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
									const numRows = Number.isNaN(num) ? allGames.length : num;
									setNumRowsToShow(numRows);
								}}
							>
								{['50', '100', '250', '500', '1000', `${allGames.length}`].map(num => (
									<option value={num}>{num}</option>
								))}
							</select>
							<label for="num-rows-select"> Rows</label>
						</div>
						<div id="games-count">
							<span style={{...fractionInner, marginRight: '20px'}}>
								{table.getFilteredRowModel().rows.length}/{allGames.length}
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
								<option key={miscSortKey} value={'latestTrophy' satisfies MiscSortKey}>
									Date Played
								</option>
								{/* <option key={miscSortKey} value={'updatedAt' satisfies MiscSortKey}>
										Date Updated
									</option>
									<option key={miscSortKey} value={'bestCompleted' satisfies MiscSortKey}>
										Best Completions
									</option> */}
							</select>
							<SortingIcon column={table.getColumn(miscSortKey)} css={{height: '26px'}} />
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
														padding: 0,
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
