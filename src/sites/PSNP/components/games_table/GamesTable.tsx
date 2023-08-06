import {useMemo} from 'preact/hooks';
import {DbGame} from '../../models/dbGame';
import {createColumnHelper, getCoreRowModel, useReactTable} from '@tanstack/react-table';

interface GamesTableProps {
	allGames: DbGame[];
}

const col = createColumnHelper<DbGame>();

export const GamesTable: preact.FunctionComponent<GamesTableProps> = ({allGames}) => {
	const columns = useMemo(() => {
		return [
			col.accessor('name', {
				cell: ({row}) => <span>{row.original.name}</span>,
				header: h => (
					<>
						{/* <FilterIcon headerContext={h} /> */}
						<span style={{margin: '0px 5px'}}>Name</span>
						{/* <SortingIcon headerContext={h} /> */}
					</>
				),
				// sortingFn: (rowA, rowB, columnId) => {
				// 	let comparisonValue = rowA.original.name.localeCompare(rowB.original.name);
				// 	const columnSort = sorting.find(s => s.id === columnId);
				// 	const isDesc = columnSort?.desc || false;

				// 	// case 'userLatestTrophy':
				// 	// 	if (rowA.original.userLatestTrophy === 0 && rowB.original.userLatestTrophy !== 0)
				// 	// 		comparisonValue = isDesc ? -1 : 1;
				// 	// 	else if (rowB.original.userLatestTrophy === 0 && rowA.original.userLatestTrophy !== 0)
				// 	// 		comparisonValue = isDesc ? 1 : -1;
				// 	// 	else comparisonValue = rowA.original.userLatestTrophy - rowB.original.userLatestTrophy;
				// 	// 	break;
				// 	// case '_id':
				// 	// 	comparisonValue = rowA.original._id - rowB.original._id;
				// 	// 	break;

				// 	return comparisonValue;
				// },
				size: 350,
				maxSize: 400,
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

	return <></>;
};
