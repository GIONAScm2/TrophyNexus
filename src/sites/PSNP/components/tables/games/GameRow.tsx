import {msToSpeedString} from 'trophyutil';
import {DbGame} from '../../../models/dbGame';
import {msToDateString} from '../../../util/dates';
import * as css from '../../css/GameRow';
import * as _css from '../../css/SeriesRow';
import ProgressBar from '../../../../../shared/components/ProgressBar';

interface GameRowProps {
	game: DbGame;
}
const bullet = () => <span style={{fontSize: '1.7rem', verticalAlign: '-2px'}}> • </span>;
export const GameRowMain: preact.FunctionComponent<GameRowProps> = ({game: g}) => {
	return (
		<div class="outerGrid" style={css.outerGrid}>
			<a href={`/trophies/${g._idAndName}`}>
				<picture class="game">
					<img src={g.src} />
				</picture>
			</a>
			<div>
				<div class="ellipsis">
					<span>
						<a class="title" href={`/trophies/${g._idAndName}`}>
							{g.name}
						</a>
						{!!g.stackLabel && (
							<>
								{bullet()} {g.stackLabel}
							</>
						)}
					</span>
				</div>
				<div class="platforms" style="width:100%; text-align: left">
					{g.platforms.map(platform => (
						<span class={`tag platform ${platform.toLowerCase()}`} style="text-align: center">
							{platform}
						</span>
					))}
				</div>
				{!!g.latestTrophy && (
					<div class="small-info" style="margin-top: 4px">
						{msToDateString(g.latestTrophy)}
						{typeof g.completionSpeed === 'number' && (
							<>
								{bullet()} {g.completionSpeedType} in <b>{msToSpeedString(g.completionSpeed)}</b>
							</>
						)}
					</div>
				)}

				{/* <span class="small-info" style="margin-top: 4px;">
					{!!g.numOwners && (
						<>
							<b>{g.numOwners.toLocaleString()}</b> Owners
						</>
					)}
				</span> */}
			</div>
		</div>
	);
};

export const GameRowCompletion: preact.FunctionComponent<GameRowProps> = ({game: g}) => {
	return ( 
		<>
			{!!g.percent && <span class="separator">
				<span class="typo-top" style={_css.fractionInner}>
					{`${g.percent}%`}
				</span>
				<ProgressBar progress={g.percent / 100}>{`${g.percent}%`}</ProgressBar>
			</span>}
		</>
	);
};