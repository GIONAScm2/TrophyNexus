import {DbGame} from '../../../models/dbGame';
import {msToDateString} from '../../../util/dates';
import * as css from '../../css/GameRow';

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
