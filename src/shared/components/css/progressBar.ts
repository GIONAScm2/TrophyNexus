import {JSXInternal} from 'preact/src/jsx';

export const container = {
	width: '100%',
	height: '20px',
	backgroundColor: '#ddd',
	borderRadius: '4px',
	marginTop: '20px',
	marginBottom: '5px',
	border: '1px solid #ccc',
} as const satisfies JSXInternal.CSSProperties;

export const bar = (color = 'rgb(51, 98, 145)') =>
	({
		height: '100%',
		backgroundColor: color,
		borderRadius: '4px',
		color: 'rgb(249, 249, 249)',
		fontWeight: 600,
		textAlign: 'center',
	} as const satisfies JSXInternal.CSSProperties);

export const caption = {
	fontStyle: 'italic',
	textAlign: 'center',
} as const satisfies JSXInternal.CSSProperties;
