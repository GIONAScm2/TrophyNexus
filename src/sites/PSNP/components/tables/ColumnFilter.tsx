import {Column, Table} from '@tanstack/react-table';
import {JSX} from 'preact';
import {useState, useEffect} from 'preact/hooks';
import {JSXInternal} from 'preact/src/jsx';
import {DbSeries} from '../../models/dbSeries';
import {DbGame} from '../../models/dbGame';

const inputDebouncedCSS = {
	fontWeight: 'normal',
	fontSize: '14px',
	marginTop: '10px',
} as const satisfies JSXInternal.CSSProperties;

interface DebouncedInputProps extends Omit<JSX.IntrinsicElements['input'], 'onChange'> {
	value: string | number;
	onChange: (value: string | number) => void;
	debounce?: number;
}
const DebouncedInput: preact.FunctionComponent<DebouncedInputProps> = ({
	value: initialValue,
	onChange,
	debounce = 300,
	...props
}) => {
	const [value, setValue] = useState(initialValue);

	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	useEffect(() => {
		const timeout = setTimeout(() => {
			onChange(value);
		}, debounce);

		return () => clearTimeout(timeout);
	}, [value]);

	return <input {...props} value={value} onInput={(e: any) => setValue(e.target.value)} />;
};

export function ColumnFilter({
	column,
	table,
}: {
	column: Column<DbSeries> | Column<DbGame>;
	table: Table<DbSeries> | Table<DbGame>;
}) {
	const firstValue = table.getFilteredRowModel().flatRows[0]?.getValue(column.id);
	const columnFilterValue = column.getFilterValue();

	return typeof firstValue === 'number' ? (
		<div>
			<div className="flex space-x-2" style={{justifyContent: 'center'}}>
				<DebouncedInput
					type="number"
					min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
					max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
					value={(columnFilterValue as [number, number])?.[0] ?? ''}
					onChange={value => column.setFilterValue((old: [number, number]) => [value, old?.[1]])}
					placeholder={`Min`}
					className="w-24 border shadow rounded"
					style={{...inputDebouncedCSS, marginRight: '10px'}}
				/>
				<DebouncedInput
					type="number"
					min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
					max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
					value={(columnFilterValue as [number, number])?.[1] ?? ''}
					onChange={value => column.setFilterValue((old: [number, number]) => [old?.[0], value])}
					placeholder={`Max`}
					className="w-24 border shadow rounded"
					style={inputDebouncedCSS}
				/>
			</div>
			<div className="h-1" />
		</div>
	) : (
		<>
			<DebouncedInput
				type="text"
				value={(columnFilterValue ?? '') as string}
				onChange={value => column.setFilterValue(value)}
				placeholder={`Search ${column.getFacetedUniqueValues().size} values`}
				className="w-36 border shadow rounded"
				list={column.id + 'list'}
				style={inputDebouncedCSS}
			/>
			<div className="h-1" />
		</>
	);
}
