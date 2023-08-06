import {msToSpeedString} from 'trophyutil';
import {DbGame} from '../models/dbGame';
import {msToDateString} from '../util/dates';

// Whitelists PSNP's intrinsic <bullet> tag. https://stackoverflow.com/questions/61015445/using-web-components-within-preact-and-typescript?noredirect=1&lq=1
declare module 'preact' {
	namespace JSX {
		interface IntrinsicElements {
			bullet: OverlayTriggerAttributes;
		}
	}
}
interface OverlayTriggerAttributes extends preact.JSX.HTMLAttributes<HTMLElement> {
	placement?: string;
}

interface ProfileGameProps {
	game: DbGame;
}

export const ProfileGame: preact.FunctionComponent<ProfileGameProps> = ({game, children}) => {
	const renderTrophiesEarned = () => {
		if (game.userNumTrophies === game.numTrophies) {
			return (
				<>
					All <b>{game.numTrophies}</b> Trophies
				</>
			);
		} else
			return (
				<>
					<b>{game.userNumTrophies ?? 0}</b> of <b>{game.numTrophies}</b> Trophies
				</>
			);
	};

	const renderCompletionSpeed = () => {
		if (!game.completionSpeedType || !game.completionSpeed) return <></>;

		return (
			<>
				<bullet> • </bullet>
				{game.completionSpeedType} in <b>{msToSpeedString(game.completionSpeed)}</b>
			</>
		);
	};

	const renderRarityCell = () => {
		const iconType = game.trophyCount?.platinum ? 'platinum-18' : 'completion';
		const iconEarned = iconType === 'platinum-18' ? !!game.userTrophyCount?.platinum : game.percent === 100;
		const earnedClass = iconEarned ? 'earned' : '';
		/** Games without plats - or with plats *and* DLC - will have a "completion rate" */
		const hasCompletionRate = !!game.rarityDlc || !game.trophyCount?.platinum;

		return (
			<td style="">
				<span class="separator completion-status">
					<img class={`icon-sprite ${iconType} ${iconEarned ? 'earned' : ''}`} src="/lib/img/layout/spacer.png" />
					<br />
					{!!game.trophyCount?.platinum && (
						<span title="Platinum Rarity" class={`platinum ${earnedClass}`}>
							{game.rarityBaseString}%
						</span>
					)}
					{hasCompletionRate && (
						<span title="Completion Rate" class={`completion ${earnedClass}`}>
							{game.rarityDlcString ?? game.rarityBaseString}%
						</span>
					)}
				</span>
			</td>
		);
	};

	return (
		<tr class={game.completionStatus ?? ''}>
			<td style="width: 1%">
				<a href={game.url} rel="nofollow">
					<picture class="game" alt={game.name}>
						<img src={game.src} />
					</picture>
				</a>
			</td>

			<td style="width: 100%">
				<div class="ellipsis">
					<span>
						<a class="title" href={game.url} rel="nofollow">
							{game.name}
						</a>
						{game.stackLabel && (
							<>
								<bullet> • </bullet>
								{game.stackLabel}
							</>
						)}
					</span>
				</div>

				<div class="small-info" style="margin-top: 4px">
					{renderTrophiesEarned()}
				</div>

				<div class="small-info" style="margin-top: 4px">
					{game.latestTrophy && msToDateString(game.latestTrophy)}
					{renderCompletionSpeed()}
				</div>
			</td>

			<td>
				<span class="separator right">
					<div class="platforms" style="width: 100%">
						{game.platforms.map(platform => (
							<span class={`tag platform ${platform.toLowerCase()}`}>{platform}</span>
						))}
					</div>
				</span>
			</td>

			<td>
				<span class="separator right">
					<span class={`game-rank ${game.completionRank}`}>{game.completionRank}</span>
					<br />
					<span class="typo-bottom">RANK</span>
				</span>
			</td>

			<td style="">
				<span class="separator right">
					<div class="trophy-count">
						<div class="flex v-align center">
							<span class="icon-sprite gold"></span>
							<span>{game.userTrophyCount?.gold ?? 0}</span>
							<span class="icon-sprite silver"></span>
							<span>{game.userTrophyCount?.silver ?? 0}</span>
							<span class="icon-sprite bronze"></span>
							<span>{game.userTrophyCount?.bronze ?? 0}</span>
						</div>
						<div class="progress-bar">
							<span>{game.percent ?? 0}%</span>
							<div style={`width: ${game.percent ?? 0}%`}></div>
						</div>
					</div>
				</span>
			</td>
			{renderRarityCell()}

			{children}
		</tr>
	);
};
