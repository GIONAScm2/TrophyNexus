import {StateUpdater, useState} from 'preact/hooks';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {PsnpPageType} from 'trophyutil';
import * as css from './css/FloatingButton';
import {JSXInternal} from 'preact/src/jsx';
import {TrophyNexusPsnp} from '../nexus';
import {ButtonConfig} from '../../../shared/components/ModalBase';

interface FloatingContextMenuProps {
	onClick: () => void;
	pageType: PsnpPageType;
	nexus: TrophyNexusPsnp;
	contextButtons?: ButtonConfig[];
}

export const ContextMenu: preact.FunctionComponent<FloatingContextMenuProps> = props => {
	const [hovered, setHovered] = useState(false);

	const renderPageContextButtons = () => {
		const buttons: JSXInternal.Element[] = [];

		if (props.contextButtons?.length) {
			buttons.push(
				...props.contextButtons.map(config => (
					<button style={css.contextMenuBtnContextual(hovered)} {...config.attrs}>
						{config.name}
					</button>
				))
			);
		}
		// if ([PsnpPageType.Games, PsnpPageType.SeriesCatalog].includes(props.pageType)) {
		// 	buttons.push(<button style={css.contextMenuBtnContextual(hovered)}>Load All</button>);
		// }

		return <>{...buttons}</>;
	};

	return (
		<>
			<div style={css.contextMenuOuter} onMouseLeave={() => setHovered(false)}>
				<div style={css.contextMenuInner(hovered)}>
					<button
						onClick={props.onClick}
						style={css.contextMenuBtnSettings(hovered)}
						id="tn-settings"
						onMouseEnter={() => setHovered(true)}
					>
						<FontAwesomeIcon icon={faGear} />
						<span style={css.contextMenuTextWrapper(hovered)}>TrophyNexus</span>
					</button>

					<div style={css.contextMenuContextBtns(hovered)}>{renderPageContextButtons()}</div>
				</div>
			</div>
		</>
	);
};
