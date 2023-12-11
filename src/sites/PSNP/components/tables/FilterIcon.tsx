import { faFilter } from "@fortawesome/free-solid-svg-icons/faFilter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HeaderContext } from "@tanstack/react-table";
import { DbSeries } from "../../models/dbSeries";
import { DbGame } from "../../models/dbGame";


export const FilterIcon: preact.FunctionComponent<{headerContext: HeaderContext<any, unknown>}> = ({headerContext}) => {
	const isFiltered = headerContext.column.getIsFiltered();
	return isFiltered ? <span>{<FontAwesomeIcon icon={faFilter} />}</span> : null;
};