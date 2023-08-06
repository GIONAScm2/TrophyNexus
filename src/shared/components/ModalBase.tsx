import * as css from './css/ModalBase';
import {JSXInternal} from 'preact/src/jsx';

export interface ButtonAttrs extends JSXInternal.HTMLAttributes<HTMLButtonElement> {
	onClick: JSXInternal.MouseEventHandler<HTMLButtonElement>;
}

export interface ButtonConfig {
	name: string;
	attrs: ButtonAttrs;
}
export interface ModalGenericProps {
	isOpen: boolean;
	title: string;
	extraButtons?: ButtonConfig[];
	/** Specify a custom close button */
	closeBtn: ButtonConfig;
}

const ModalBase: preact.FunctionComponent<ModalGenericProps> = ({isOpen, title, closeBtn, extraButtons = [], children}) => {
	if (!isOpen) {
		return null;
	}
	const buttons: ButtonConfig[] = [...extraButtons, closeBtn];

	return (
		<>
			<div style={css.backgroundStyle} id="tn-modal-bg" />
			<div style={css.modalStyle} id="tn-modal">
				<div id="tn-modal-content">
					<h2 style={{textAlign: 'center', marginBottom: '2rem'}}>{title}</h2>
					<div>{children}</div>
					<div
						className="tn-button"
						style={{
							display: 'flex',
							justifyContent: 'center',
							marginTop: '2rem',
						}}
					>
						{buttons.map(({name, attrs}, index) => {
							return (
								<button
									{...attrs}
									style={{
										marginTop: '20px',
										marginBottom: '10px',
										marginRight: index !== buttons.length - 1 ? '50px' : undefined,
									}}
								>
									{name}
								</button>
							);
						})}
					</div>
				</div>
			</div>
		</>
	);
};

export default ModalBase;
