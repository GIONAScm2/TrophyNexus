import {parseNum} from 'trophyutil';

interface ProfileHeaderStats {
    numGamesPlayed: number;
    numGamesCompleted: number;
    completionPercent: number;
    numUnearnedTrophies: number;
    trophiesPerDay: number;
    views: number;
    worldRank: number;
    countryRank: number;
}

export default function parseHeaderStats(doc: Document) {
	const statNodes = [...doc.querySelectorAll<HTMLSpanElement>(`span.stat.grow`)];
	const statValues = statNodes.map(node => node.childNodes[0]);

	const numGamesPlayed = parseNum(statValues[0]);
	const numGamesCompleted = parseNum(statValues[1]);
	const completionPercent = parseNum(statValues[2]);
	const numUnearnedTrophies = parseNum(statValues[3]);
	const trophiesPerDay = parseNum(statValues[4]);
	const views = parseNum(statValues[5]);
	// These two will be undefined for flagged users
	const worldRank = parseNum(statValues[6]);
	const countryRank = parseNum(statValues[7]);

	if (Number.isNaN(numGamesPlayed + numGamesCompleted + completionPercent + numUnearnedTrophies + trophiesPerDay + views)) {
		throw new Error(`Unable to parse profile stats`);
	}

	return {
		numGamesPlayed,
		numGamesCompleted,
		completionPercent,
		numUnearnedTrophies,
		trophiesPerDay,
		views,
		worldRank,
		countryRank,
	};
}
