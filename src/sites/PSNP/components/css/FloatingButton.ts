import type {JSXInternal} from 'preact/src/jsx';

export const contextMenuOuter = {
	position: 'fixed',
	right: '20px',
	bottom: '20px',
	zIndex: 9999,
	display: 'flex',
	flexDirection: 'column',
	alignItems: 'center',
} as const satisfies JSXInternal.CSSProperties;

export const contextMenuInner = (hovered: boolean) =>
	({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		borderRadius: '5px',
		backgroundColor: hovered ? 'rgba(255, 255, 255, 0.9)' : 'transparent',
		padding: '8px',
		boxShadow: hovered ? '0 0 8px rgba(0, 0, 0, 0.1)' : 'none',
		transition: 'background-color 0.3s, box-shadow 0.3s',
	} as const satisfies JSXInternal.CSSProperties);
export const contextMenuBtnSettings = (hovered: boolean) =>
	({
		opacity: hovered ? '1' : '0.5',
		transition: 'opacity 0.3s',
		display: 'flex',
		alignItems: 'center',
		paddingRight: hovered ? '5px' : '0',
	} as const satisfies JSXInternal.CSSProperties);

export const contextMenuTextWrapper = (hovered: boolean) =>
	({
		visibility: hovered ? 'visible' : 'hidden',
		width: hovered ? 'auto' : '0',
		overflow: 'hidden',
		whiteSpace: 'nowrap',
		transition: 'width 0.3s, visibility 0.3s',
		marginLeft: '4px',
	} as const satisfies JSXInternal.CSSProperties);

export const contextMenuContextBtns = (hovered: boolean) =>
	({
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		opacity: hovered ? 1 : 0,
		transition: 'opacity 0.3s',
		marginTop: '4px',
	} as const satisfies JSXInternal.CSSProperties);


export const contextMenuBtnContextual = (hovered: boolean) =>
	({
		opacity: hovered ? '1' : '0.5',
		backgroundColor: '#ddd',
		padding: '5px',
		borderRadius: '3px',
		paddingRight: hovered ? '5px' : '0',
	} as const satisfies JSXInternal.CSSProperties);