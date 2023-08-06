import type {JSXInternal} from 'preact/src/jsx';

export const overlayStyle = {
	position: 'fixed',
	top: 0,
	left: 0,
	width: '100%',
	height: '100%',
	backgroundColor: 'rgba(0, 0, 0, 0.5)',
	zIndex: 10000,
} as const satisfies JSXInternal.CSSProperties;

export const userPrefsMenuStyle = {
	position: 'fixed',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -30vh)',
	backgroundColor: 'white',
	borderRadius: '5px',
	padding: '20px',
	zIndex: 10001, // Must be higher than the overlay
	minWidth: '20vw',
	maxWidth: '50vw',
} as const satisfies JSXInternal.CSSProperties;

export const tabsContainerStyle = {
	display: 'flex',
	justifyContent: 'space-around',
	borderBottom: '1px solid #ccc',
	marginBottom: '10px',
} as const satisfies JSXInternal.CSSProperties;

export const tabButtonStyle = (isActive: boolean) =>
	({
		backgroundColor: isActive ? '#f0f0f0' : 'transparent',
		padding: '8px',
		border: 'none',
		cursor: 'pointer',
	} as const satisfies JSXInternal.CSSProperties);

export const settingRowStyle = {
	display: 'flex',
	alignItems: 'center',
	padding: '10px 0',
} as const satisfies JSXInternal.CSSProperties;

export const inputLabelContainerStyle = {
	display: 'flex',
	alignItems: 'center',
	flexGrow: 1, // this will make the label take up the remaining space
	marginRight: '10px',
} as const satisfies JSXInternal.CSSProperties;

export const checkboxStyle = {
	marginRight: '5px', // set the margin you want between the checkbox and the label
} as const satisfies JSXInternal.CSSProperties;

export const iconStyle = {
	marginLeft: '10px', // set the margin you want between the text and the icon
} as const satisfies JSXInternal.CSSProperties;
