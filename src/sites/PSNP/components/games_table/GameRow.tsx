import {TrophyCount} from 'trophyutil';
import {DbGame} from '../../models/dbGame';
import {TrophyCountIcons, TrophyCountMetrics} from '../TrophyCount';

interface GameRowProps {
	game: DbGame;
}

export const GameRowImage: preact.FunctionComponent<GameRowProps> = ({game: g}) => {
	return (
		<td>
			<a href={`/trophies/${g._idAndName}`}>
				<picture class="game">
					<img src={g.src} />
				</picture>
			</a>
		</td>
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
		<td>
			<span class="separator right">
				<div class="platforms" style="width:100%">
                {g.platforms.map(platform => (
							<span class={`tag platform ${platform.toLowerCase()}`}>{platform}</span>
						))}
				</div>
			</span>
		</td>
	);
};

/** A 1x2 grid housing one row for the trophy icons and one for the count of trophies & points. */
export const GameRowTrophyCount: preact.FunctionComponent<GameRowProps> = ({game: g}) => {
	const fallbackTrophyCount: TrophyCount = {
		bronze: 0,
		silver: 0,
		gold: 0,
		platinum: 0,
	};
	return (
		<div class="tc-cell" style={{display: 'grid', gridTemplateRows: '1fr 1fr', justifyItems: 'center', rowGap: '1rem'}}>
			<TrophyCountIcons tcAll={g.trophyCount} tcUser={g.userTrophyCount} />
			<TrophyCountMetrics
				numTrophies={g.numTrophies}
				numPoints={g.points}
				userNumTrophies={g.userNumTrophies}
				userNumPoints={g.userPoints}
			/>
		</div>
	);
};
