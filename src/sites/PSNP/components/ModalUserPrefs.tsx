import {useState} from 'preact/hooks';
import * as css from './css/ModalUserPrefs';
import {tooltipStyle, tooltipTextStyle, tooltipHoverStyle} from './css/tooltip';
import {faCircleInfo} from '@fortawesome/free-solid-svg-icons/faCircleInfo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { UserBoolsPSNP } from 'src/shared/services/userPrefs/types';
import {TrophyNexusPsnp} from '../nexus';

type UserPrefsMenuProps = {
	nexus: TrophyNexusPsnp;
	onClose: () => void;
};

export const ModalUserPrefs: preact.FunctionComponent<UserPrefsMenuProps> = ({nexus, onClose}) => {
	const [activeTab, setActiveTab] = useState('General');

	const handleCheckboxChange = (key: string) => async (e: Event) => {
		const target = e.target as HTMLInputElement;

		nexus.userPrefs.PSNP.bools[key as keyof UserBoolsPSNP].value = target.checked;
		await nexus.userPrefs.save();
	};

	const renderBoolSection = (title: string, bools: UserBoolsPSNP) => (
		<div>
			<h2 style={{textAlign: 'center'}}>{title}</h2>
			{Object.entries(bools).map(([key, pref]) => {
				const [isHovered, setIsHovered] = useState(false);
				return (
					<div key={key} style={css.settingRowStyle}>
						<div style={css.inputLabelContainerStyle}>
							<input
								type="checkbox"
								checked={pref.value}
								onChange={handleCheckboxChange(key)}
								style={css.checkboxStyle}
							/>
							<label>{pref.name}</label>
							<div
								style={{...tooltipStyle, ...css.iconStyle}}
								onMouseEnter={() => setIsHovered(true)}
								onMouseLeave={() => setIsHovered(false)}
							>
								<FontAwesomeIcon icon={faCircleInfo} />
								<span style={isHovered ? {...tooltipTextStyle, ...tooltipHoverStyle} : tooltipTextStyle}>
									{pref.desc}
								</span>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);

	const renderTab = (title: string) => (
		<button onClick={() => setActiveTab(title)} style={css.tabButtonStyle(activeTab === title)}>
			{title}
		</button>
	);

	const renderTabs = () => (
		<div style={css.tabsContainerStyle}>
			{renderTab('General')}
			{renderTab('Platify')}
			{nexus.userPrefs.PSNP.isFlagged && renderTab('Flagged')}
		</div>
	);

	const renderContent = () => {
		const generalBools = {} as UserBoolsPSNP;
		const platifyBools = {} as UserBoolsPSNP;
		const flaggedBools = {} as UserBoolsPSNP;

		Object.entries(nexus.userPrefs.PSNP.bools).forEach(([key, pref]) => {
			if (pref.category === 'general') generalBools[key as keyof UserBoolsPSNP] = pref;
			if (pref.category === 'platify') platifyBools[key as keyof UserBoolsPSNP] = pref;
			if (pref.category === 'flagged' && nexus.userPrefs.PSNP.isFlagged) flaggedBools[key as keyof UserBoolsPSNP] = pref;
		});

		switch (activeTab) {
			case 'General':
				return renderBoolSection('General Settings', generalBools);
			case 'Platify':
				return renderBoolSection('Platify Settings', platifyBools);
			case 'Flagged':
				return renderBoolSection('Flagged Settings', flaggedBools);
			default:
				return null;
		}
	};

	return (
		<>
			<div className="overlay" style={css.overlayStyle} onClick={onClose}></div>
			<div className="user-prefs-menu" style={css.userPrefsMenuStyle}>
				{renderTabs()}
				{renderContent()}
			</div>
		</>
	);
};
