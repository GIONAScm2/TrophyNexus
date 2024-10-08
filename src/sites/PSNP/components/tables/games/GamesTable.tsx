import {useMemo, useState} from 'preact/hooks';
import {DbGame} from '../../../models/dbGame';
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
import * as css from '../../css/SeriesTable';
import {SortingIcon} from '../SortingIcon';
import {ColumnFilter} from '../ColumnFilter';
import {PlatformTag, StackAbbr, parseNum} from 'trophyutil';
import {fractionInner} from '../../css/SeriesRow';
import {IUserSettings} from '../../../../../shared/services/userPrefs/types';
import {JSX} from 'preact';
import {DropdownFilter} from './DropdownFilter';
import {GamesTableMiscSortKey, useGamesTableColumns} from './useGameColumns';

interface GamesTableProps {
	allGames: DbGame[];
	prefs: IUserSettings;
}

export const GamesTable: preact.FunctionComponent<GamesTableProps> = ({allGames}) => {
	const [numRowsToShow, setNumRowsToShow] = useState(50);
	const [sorting, setSorting] = useState<SortingState>([{id: 'latestTrophy', desc: true}]);
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>(() => []);
	const [radioValPlats, setRadioValPlats] = useState<null | 0 | 1>(null);
	const [includeSharedLists, setIncludeSharedLists] = useState(true);
	const {columns, miscSortKey, setMiscSortKey} = useGamesTableColumns({sorting, includeSharedLists, setColumnFilters});
	const platformCounts = useMemo(() => {
		const mutualTags: Array<[string, number]> = [
			['PS3', 0],
			['PS4', 0],
			['PS5', 0],
			['Vita', 0],
		];
		if (includeSharedLists) mutualTags.push(['VR', 0]);
		else mutualTags.push(['PSVR1', 0], ['PSVR2', 0]);

		const platformCountMap = new Map(mutualTags);

		// With shared lists enabled, multiple platform tags put a game in multiple filter options.
		if (includeSharedLists) {
			allGames.reduce((map, game) => {
				game.platforms.forEach(platform => {
					const count = map.get(platform);
					if (typeof count === 'number') {
						map.set(platform, count + 1);
					}
				});
				return map;
			}, platformCountMap);
		} // With shared lists disabled, each game is attributed to only a single platform option.
		else {
			allGames.reduce((map, game) => {
				if (!game.platformString.includes('/')) {
					const count = map.get(game.platformString);
					if (typeof count === 'number') {
						map.set(game.platformString, count + 1);
					}
				}
				return map;
			}, platformCountMap);
		}
		return [...platformCountMap];
	}, [includeSharedLists, columnFilters]);
	const stackCounts = useMemo(() => {
		const map = new Map<string, number>();
		allGames.forEach(game => {
			const key = game.stackLabel ? game.stackLabel : 'N/A';
			const count = map.get(key) ?? 0;
			map.set(key, count + 1);
		});
		return [...map].sort((a, b) => b[1] - a[1]);
	}, [columnFilters]);

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
				filterHasPlat: false,
				filterPlatform: false,
				filterStack: false,
				completionSpeed: false,
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
			const updated = prevFilters.filter(filter => filter.id !== 'filterHasPlat');
			updated.push({id: 'filterHasPlat', value: val});
			return updated;
		});
	};

	const updateStackFilter = (stack: StackAbbr) => {
		setColumnFilters(prevFilters => {
			const prevFilteredStacks = (prevFilters.find(filter => filter.id === 'filterStack')?.value as StackAbbr[]) ?? [];
			const newFilteredStacks = prevFilteredStacks.includes(stack)
				? prevFilteredStacks.filter(p => p !== stack)
				: [...prevFilteredStacks, stack];
			const cleanFilters = prevFilters.filter(filter => filter.id !== 'filterStack');
			const platformFilter = {id: 'filterStack', value: newFilteredStacks};
			return [...cleanFilters, platformFilter];
		});
	};

	const updatePlatformFilter = (platform: PlatformTag) => {
		setColumnFilters(prevFilters => {
			const prevFilteredPlatforms =
				(prevFilters.find(filter => filter.id === 'filterPlatform')?.value as PlatformTag[]) ?? [];
			const newFilteredPlatforms = prevFilteredPlatforms.includes(platform)
				? prevFilteredPlatforms.filter(p => p !== platform)
				: [...prevFilteredPlatforms, platform];
			const cleanFilters = prevFilters.filter(filter => filter.id !== 'filterPlatform');
			const platformFilter = {id: 'filterPlatform', value: newFilteredPlatforms};
			return [...cleanFilters, platformFilter];
		});
	};

	return (
		<div className="col-xs-8" style={{flexBasis: '100%', maxWidth: '100%'}}>
			<div className="title flex v-align">
				<div className="grow">
					<h3>Games</h3>
				</div>
			</div>
			<div className="p-2">
				{/* START OF INFO PANEL */}
				<div style={{display: 'flex'}}>
					<div
						className="h-2 tn-grid"
						id="tn-info-panel"
						style={{...css.infoPanel, gridTemplateColumns: 'repeat(4, auto)'}}
					>
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
										setMiscSortKey(e.currentTarget.value as GamesTableMiscSortKey);
										setSorting(prevSorting => prevSorting.filter(sort => sort.id !== miscSortKey));
									}}
								>
									<option key={miscSortKey} value={'latestTrophy' satisfies GamesTableMiscSortKey}>
										Date Played
									</option>
									<option key={miscSortKey} value={'completionSpeed' satisfies GamesTableMiscSortKey}>
										Completion Speed
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
						</div>

						<div
							class="tn-grid-col col4"
							style={{
								...css.infoPanel2,
								...{display: 'grid', gridTemplateRows: '1fr', gridTemplateColumns: '150px auto', gap: '1rem'},
							}}
						>
							<div>
								<DropdownFilter
									optionsWithCounts={platformCounts}
									onOptionClick={updatePlatformFilter}
									name="Platforms"
								/>
								<div
									style={{cursor: 'pointer', marginTop: '1rem'}}
									onClick={() => setIncludeSharedLists(prev => !prev)}
								>
									<input type="checkbox" checked={includeSharedLists} style={{cursor: 'pointer'}} /> Include
									shared lists
								</div>
							</div>
							<DropdownFilter optionsWithCounts={stackCounts} onOptionClick={updateStackFilter} name="Stack" />
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
