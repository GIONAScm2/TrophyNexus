import type {JSXInternal} from 'preact/src/jsx';

/** 2x1: Image, Name, Platform(s) */
export const outerGrid = {
	display: 'grid',
	gridTemplateColumns: 'min-content auto',
	columnGap: '1rem',
	// gridTemplateRows: '1fr 1fr',
	// justifyItems: 'center',
	// rowGap: '1rem',
} as const satisfies JSXInternal.CSSProperties;
