import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSort} from '@fortawesome/free-solid-svg-icons/faSort';
import {faSortUp} from '@fortawesome/free-solid-svg-icons/faSortUp';
import {faSortDown} from '@fortawesome/free-solid-svg-icons/faSortDown';
import {Column, SortDirection} from '@tanstack/react-table';
import {JSXInternal} from 'preact/src/jsx';
import type {DbGame} from '../../models/dbGame';
import type {DbSeries} from '../../models/dbSeries';

interface SortingIconProps {
	column: Column<DbSeries, unknown> | Column<DbGame, unknown> | undefined;
	css?: JSXInternal.CSSProperties;
}

const sortingIconCSS = (sortDir: false | SortDirection) =>
	({
		color: sortDir ? 'cornflowerblue' : '',
		cursor: 'pointer',
	} as const satisfies JSXInternal.CSSProperties);

export const SortingIcon: preact.FunctionComponent<SortingIconProps> = ({column, css = {}}) => {
	if (!column) return null;

	const sortDir = column.getIsSorted();
	const icon = !sortDir ? faSort : sortDir === 'asc' ? faSortUp : faSortDown;

	return (
		<span onClick={column.getToggleSortingHandler()}>
			<FontAwesomeIcon icon={icon} style={{...sortingIconCSS(sortDir), ...css}} />
		</span>
	);
};
