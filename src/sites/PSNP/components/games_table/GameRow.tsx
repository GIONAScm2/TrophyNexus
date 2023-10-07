import {DbGame} from '../../models/dbGame';

interface GameRowProps {
	game: DbGame;
}

export const GameRowImage: preact.FunctionComponent<GameRowProps> = ({game: g}) => {
	return (
		<a href={`/trophies/${g._idAndName}`}>
			<picture class="game">
				<img src={g.src} />
			</picture>
		</a>
	);
};

export const GameRowName: preact.FunctionComponent<GameRowProps> = ({game: g}) => {
	return (
		<td>
			<div class="ellipsis">
				<span>
					<a class="title" href={`/trophies/${g._idAndName}`}>
						{g.name}
					</a>
				</span>
			</div>
			<span class="small-info" style="margin-top: 4px;">
				{g.numOwners && (
					<>
						<b>{g.numOwners.toLocaleString()}</b> Owners
					</>
				)}
			</span>
		</td>
	);
};

export const GameRowPlatform: preact.FunctionComponent<GameRowProps> = ({game: g}) => {
	return (
		<span class="separator right">
			<div class="platforms" style="width:100%">
				{g.platforms.map(platform => (
					<span class={`tag platform ${platform.toLowerCase()}`}>{platform}</span>
				))}
			</div>
		</span>
	);
};
