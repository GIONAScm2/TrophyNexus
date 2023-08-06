import * as css from './css/progressBar';

interface LoadingBarProps {
	/** Float between 0 and 1 */
	progress: number;
	/** Text to display */
	caption?: string;
	color?: string;
	colorPreset?: 'game_completion';
}

const colorPresetMap = {
	/** The blue that PSNP games use */
	game_completion: 'rgb(249, 249, 249)',
};

export const ProgressBar: preact.FunctionComponent<LoadingBarProps> = ({progress, caption, color, colorPreset, children}) => {
	const barColor = colorPreset ? colorPresetMap[colorPreset] : color;
	return (
		<div>
			<div style={css.container}>
				<div style={{...css.bar(barColor), width: `${progress * 100}%`}}>{children}</div>
			</div>
			{!!caption && <div style={css.caption}>{caption}</div>}
		</div>
	);
};

export default ProgressBar;
