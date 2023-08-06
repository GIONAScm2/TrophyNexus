import {JSXInternal} from 'preact/src/jsx';

interface ButtonStyleArgs {
	color?: string;
	background?: string;
}
const defaults = {color: '#fff', background: '#64a75c'};

export const button = ({color, background}: ButtonStyleArgs = defaults) =>
	({
		color,
		background,
		fontWeight: '500',
		textTransform: 'none',
		display: 'inline-block',
		fontFamily: "'Roboto', Arial, Verdana, sans-serif",
		textAlign: 'center',
		padding: '4px 8px 4px 8px',
		borderRadius: '2px',
		whiteSpace: 'nowrap',
		marginRight: '20px',
		fontSize: '14px',
	} as const satisfies JSXInternal.CSSProperties);
