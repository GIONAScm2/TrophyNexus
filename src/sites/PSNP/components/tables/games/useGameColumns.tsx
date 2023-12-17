import {ColumnFiltersState, SortingState, createColumnHelper} from '@tanstack/react-table';
import {DbGame} from '../../../models/dbGame';
import {StateUpdater, useMemo, useState} from 'preact/hooks';
import {StackAbbr, PlatformTag} from 'trophyutil';
import {TrophyCountRow} from '../../TrophyCount';
import {FilterIcon} from '../FilterIcon';
import {SortingIcon} from '../SortingIcon';
import {sortColumnByDate} from '../sorting';
import {GameRowMain} from './GameRow';
import {TrophyCellSortKey} from '../series/useSeriesColumns';

export type GamesTableMiscSortKey = 'latestTrophy';

interface UseGamesTableColumnsProps {
	sorting: SortingState;
	includeSharedLists: boolean;
	setColumnFilters: StateUpdater<ColumnFiltersState>;
}

const col = createColumnHelper<DbGame>();

export function useGamesTableColumns({sorting, includeSharedLists, setColumnFilters}: UseGamesTableColumnsProps) {
	const [miscSortKey, setMiscSortKey] = useState<GamesTableMiscSortKey>('latestTrophy');
	const [trophyCellSortKey, setTrophyCellSortKey] = useState<TrophyCellSortKey>(['userNumTrophies', null]);

	const columns = useMemo(() => {
		return [
			// Column to store filter function
			col.accessor(x => x.stackLabel, {
				id: 'filterStack',
				enableHiding: true,
				filterFn: (row, columnId, value: Array<StackAbbr>, addMeta) => {
					if (!value.length) return true;

					const stackLabel = row.original.stackLabel || 'N/A';
					return value.some(stackFilter => stackFilter === stackLabel);
				},
			}),
			// Column to store filter function
			col.accessor(x => x.platformString, {
				id: 'filterPlatform',
				enableHiding: true,
				filterFn: (row, columnId, value: PlatformTag[] | (Omit<PlatformTag, 'VR'> | 'PSVR1' | 'PSVR2')[], addMeta) => {
					if (!value.length) return true;

					const platforms = row.original.platforms;
					const filterContainsAPlatformTag = value.some(filteredPlatform =>
						platforms.includes(filteredPlatform as string)
					);
					const filterContainsPlatformString = value.some(
						filteredPlatform => row.original.platformString === filteredPlatform
					);

					if (!filterContainsAPlatformTag && !filterContainsPlatformString) return false;
					else if (!includeSharedLists)
						return (
							platforms.length === 1 ||
							(platforms.includes('VR') && value.some(filteredTag => filteredTag.includes('VR')))
						);
					else return true;
				},
			}),
			// Column to store filter function
			col.accessor(x => '', {
				id: 'filterHasPlat',
				enableHiding: true,
				filterFn: (row, columnId, value: null | 0 | 1, addMeta) => {
					if (value === null) return true;

					const hasPlat = !!row.original.trophyCount?.platinum;
					if (value === 1) return hasPlat;
					else return !hasPlat;
				},
			}),
			col.accessor('latestTrophy' satisfies GamesTableMiscSortKey, {
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
					else return val1?.[trophyCellSortKey[1]!];
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
							comparisonValue = rowA.original[key1]![key2] - rowB.original[key1]![key2];
						} else comparisonValue = rowA.original[key1]! - rowB.original[key1]!;
						return comparisonValue;
					},
				}
			),
		];
	}, [sorting, trophyCellSortKey, miscSortKey, includeSharedLists]);

	return {columns, miscSortKey, setMiscSortKey};
}
