import {useMemo, useState} from 'preact/hooks';
import {DbGame} from '../../../models/dbGame';
import {
	ColumnFiltersState,
	SortingState,
	createColumnHelper,
	flexRender,
	getCoreRowModel,
	getFilteredRowModel,
	getSortedRowModel,
	useReactTable,
} from '@tanstack/react-table';
import * as css from '../../css/SeriesTable';
import {GameRowMain} from './GameRow';
import {TrophyCountRow} from '../../TrophyCount';
import {sortColumnByDate} from '../sorting';

interface GamesTableProps {
	allGames: DbGame[];
}

const col = createColumnHelper<DbGame>();

export const GamesTable: preact.FunctionComponent<GamesTableProps> = ({allGames}) => {
	const [numRowsToShow, setNumRowsToShow] = useState(50);
	const [sorting, setSorting] = useState<SortingState>([{id: 'updatedAt', desc: true}]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(() => []);

	const columns = useMemo(() => {
		return [
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
						{/* <FilterIcon headerContext={h} /> */}
						<span style={{margin: '0px 5px'}}>Game</span>
						{/* <SortingIcon column={h.column} /> */}
					</>
				),
				sortingFn: (rowA, rowB, columnId) => rowA.original.name.localeCompare(rowB.original.name),
			}),
			col.accessor(x => 'Trophies', {
				id: 'Trophies',
				size: 100,
				maxSize: 150,
				cell: ({row}) => <TrophyCountRow entity={row.original} />,
			}),
		];
	}, []);

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
				updatedAt: false
			},
		},
		state: {
			sorting,
			columnFilters,
		},
		onColumnFiltersChange: setColumnFilters,
		getFilteredRowModel: getFilteredRowModel(),
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
													<div>{/* <Filter column={header.column} table={table} /> */}</div>
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
