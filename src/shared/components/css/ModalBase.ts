import {JSXInternal} from 'preact/src/jsx';

export const backgroundStyle = {
	position: 'fixed',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	backgroundColor: 'rgba(0, 0, 0, 0.7)',
	zIndex: 999,
} as const satisfies JSXInternal.CSSProperties;

export const modalStyle = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	minWidth: '30vw',
	transform: 'translate(-50%, -50%)',
	zIndex: 1000,
	backgroundColor: '#fff',
	padding: '20px',
	border: '1px solid #ccc',
	borderRadius: '8px',
} as const satisfies JSXInternal.CSSProperties;
