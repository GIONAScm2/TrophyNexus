import type {JSXInternal} from 'preact/src/jsx';

// INFO PANEL
export const infoPanel = {
	display: 'grid',
	gridTemplateColumns: 'auto auto auto',
	gap: '20px',
	padding: '10px',
	minHeight: '100px',
} as const satisfies JSXInternal.CSSProperties;
export const infoPanel1 = {
	display: 'grid',
	gridTemplateRows: 'auto auto',
	gridTemplateColumns: 'minmax(120px, 150px)',
	alignItems: 'end',
	justifyItems: 'start',
} as const satisfies JSXInternal.CSSProperties;
export const infoPanel2 = {
	display: 'grid',
	gridTemplateRows: 'repeat(2, min-content)',
	rowGap: '1rem',
	gridTemplateColumns: 'minmax(200px, 1fr)',
	alignItems: 'start',
	justifyItems: 'start',
} as const satisfies JSXInternal.CSSProperties;
export const infoPanel3 = {
	...infoPanel2,
	gridTemplateRows: 'repeat(3, min-content)',
} as const satisfies JSXInternal.CSSProperties;

export const border = {
	border: '1px solid',
} as const satisfies JSXInternal.CSSProperties;

// TABLE

export const table = {
	outline: '1px solid black',
	borderCollapse: 'collapse',
	borderSpacing: 0,
} as const satisfies JSXInternal.CSSProperties;

export const th = {
	border: '1px solid',
	padding: `10px`,
	textAlign: `center`,
	verticalAlign: 'top',
	fontWeight: 'bold',
	fontSize: '26px',
} as const satisfies JSXInternal.CSSProperties;

export const searchName = {
	width: '200px',
	marginBottom: '0.5rem',
} as const satisfies JSXInternal.CSSProperties;

export const filterBools = {
	marginTop: '10px',
	marginBottom: '10px',
} as const satisfies JSXInternal.CSSProperties;

export const td = {
	padding: '10px',
	borderBottom: '1px solid lightgray',
	borderLeft: '1px solid lightgray',
	borderRight: '1px solid lightgray',
} as const satisfies JSXInternal.CSSProperties;

export const inputDebounced = {
	fontWeight: 'normal',
	fontSize: '14px',
	marginTop: '10px',
} as const satisfies JSXInternal.CSSProperties;
