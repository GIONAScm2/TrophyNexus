import type {JSXInternal} from 'preact/src/jsx';

export const tooltipStyle = {
	position: 'relative',
	display: 'inline-block',
	cursor: 'pointer',
} as const satisfies JSXInternal.CSSProperties;

export const tooltipTextStyle = {
	visibility: 'hidden',
	minWidth: '200px',
	maxWidth: '300px',
	backgroundColor: '#555555',
	color: '#ffffff',
	textAlign: 'center',
	borderRadius: '6px',
	padding: '5px',
	position: 'absolute',
	zIndex: 1,
	bottom: '125%',
	left: '50%',
	marginLeft: '-100px',
	opacity: 0,
	transition: 'opacity 0.3s',
} as const satisfies JSXInternal.CSSProperties;

export const tooltipHoverStyle = {
	visibility: 'visible',
	opacity: 1,
} as const satisfies JSXInternal.CSSProperties;
