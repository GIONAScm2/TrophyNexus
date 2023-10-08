import {DbGame} from '../../models/dbGame';
import * as css from '../css/GameRow';

interface GameRowProps {
	game: DbGame;
}

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
					</span>
				</div>
				<div class="platforms" style="width:100%; text-align: left">
					{g.platforms.map(platform => (
						<span class={`tag platform ${platform.toLowerCase()}`} style="text-align: center">
							{platform}
						</span>
					))}
				</div>
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
