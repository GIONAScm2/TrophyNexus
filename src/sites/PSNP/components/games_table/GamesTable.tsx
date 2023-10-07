import {useMemo, useState} from 'preact/hooks';
import {DbGame} from '../../models/dbGame';
import {createColumnHelper, flexRender, getCoreRowModel, useReactTable} from '@tanstack/react-table';
import {SeriesRowName} from '../series_table/SeriesRow';
import * as css from '../css/SeriesTable';
import {GameRowImage, GameRowName, GameRowPlatform} from './GameRow';
import {TrophyCountRow} from '../TrophyCount';

interface GamesTableProps {
	allGames: DbGame[];
}

const col = createColumnHelper<DbGame>();

export const GamesTable: preact.FunctionComponent<GamesTableProps> = ({allGames}) => {
	const [numRowsToShow, setNumRowsToShow] = useState(50);

	const columns = useMemo(() => {
		return [
			col.accessor('_id', {
				size: 80,
				maxSize: 100,
				cell: ({row}) => <GameRowImage game={row.original} />,
				header: h => (
					<>
						{/* <FilterIcon headerContext={h} /> */}
						<span style={{margin: '0px 5px'}}>Name</span>
						{/* <SortingIcon column={h.column} /> */}
					</>
				),
				sortingFn: (rowA, rowB, columnId) => rowA.original.name.localeCompare(rowB.original.name),
			}),
			col.accessor('name', {
				size: 350,
				maxSize: 400,
				cell: ({row}) => <GameRowName game={row.original} />,
				header: h => (
					<>
						{/* <FilterIcon headerContext={h} /> */}
						<span style={{margin: '0px 5px'}}>Name</span>
						{/* <SortingIcon column={h.column} /> */}
					</>
				),
				sortingFn: (rowA, rowB, columnId) => rowA.original.name.localeCompare(rowB.original.name),
			}),
			col.accessor('platforms', {
				size: 30,
				maxSize: 50,
				cell: ({row}) => <GameRowPlatform game={row.original} />,
			}),
			col.accessor('trophyCount', {
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
		// state: {
		// 	sorting,
		// 	columnFilters,
		// },
		getCoreRowModel: getCoreRowModel(),
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
