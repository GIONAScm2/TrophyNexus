import {SortingState, Row} from '@tanstack/react-table';

function compareDates<T>(getter: (item: T) => number, isDesc: boolean = false) {
	return (a: T, b: T): number => {
		const dateA = getter(a);
		const dateB = getter(b);

		if (dateA === 0) return isDesc ? -1 : 1;
		if (dateB === 0) return isDesc ? 1 : -1;

		return dateA - dateB;
	};
}

export const sortColumnByDate = <T>(sorting: SortingState, rowA: T, rowB: T, columnId: string, getter: (row: T) => number): number => {
	const isDesc = sorting.find(s => s.id === columnId)?.desc || false;
	return compareDates(getter, isDesc)(rowA, rowB);
};
