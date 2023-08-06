import type {JSXInternal} from 'preact/src/jsx';

// export const fractionOuter = {
// 	borderCollapse: 'separate',
// 	boxSizing: 'border-box',
// 	color: 'rgb(100, 100, 100)',
// 	cursor: 'auto',
// 	display: 'block',
// 	fontFamily: 'Roboto, Arial, Verdana, sans-serif',
// 	fontSize: '14px',
// 	height: '23px',
// 	lineHeight: '16px',
// 	paddingRight: '11px',
// 	position: 'relative',
// 	textAlign: 'center',
// 	textIndent: '0px',
// 	textSizeAdjust: '100%',
// } as const satisfies JSXInternal.CSSProperties;

export const fractionInner = {
	color: 'rgb(68, 72, 75)',
	display: 'inline',
	fontFamily: 'DP, Arial, Verdana, sans-serif',
	fontSize: '20px',
	fontWeight: 400,
	height: 'auto',
	lineHeight: '20px',
} as const satisfies JSXInternal.CSSProperties;

export const tc = {
	width: '50%',
	margin: 'auto',
} as const satisfies JSXInternal.CSSProperties;
