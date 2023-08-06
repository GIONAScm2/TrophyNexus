import {PsnpEntity, TrophyCount, IStage, ISeriesDoc, MakeOptional} from 'trophyutil';
import type {DbGame, Timestamps, UserTrophyCount} from './dbGame';

/** Shape of the `stages` property of series documents (both Mongo and IDB). */
interface SeriesStage extends Omit<IStage, 'games'> {}
/** A {@link SeriesStage} with added properties calculated at runtime. */
export interface SeriesStageVerbose extends SeriesStage {
	games: (DbGame | undefined)[];
}

/** A MongoDB series document. */
export interface SeriesDocMongo extends Timestamps, Omit<ISeriesDoc, 'createdAt' | 'updatedAt' | 'stages'> {
	/** Array of stages, each with `stageNum` and `gameIds`. */
	stages: SeriesStage[];
}
export type SeriesDocIDB = Partial<SeriesUserProgress> & MakeOptional<SeriesDocMongo, 'stages' | 'createdAt' | 'updatedAt'>;

/** `user`-prefixed properties pertaining to series completion progress. */
interface SeriesUserProgress extends UserTrophyCount {
	/** Number of a series' games that are on a user's profile. */
	userNumGamesPlayed?: number | undefined;
	/** Number of a series' games that user platted. */
	userNumGamesPlatted?: number | undefined;
	/** Number of a series' games that user 100%'d. */
	userNumGames100Percented?: number | undefined;
	/** Timestamp at which the most recent trophy was earned (ms). `undefined` for games at 0% (or unplayed series games). */
	userLatestTrophy?: number | undefined;

	/** Uses user platify preference. */
	userNumStagesCompleted?: number | undefined;
	/** Uses user platify preference. */
	userNumStagesTotal?: number | undefined;
	/** Integer representing `userNumStagesCompleted` / `userNumStagesTotal` */
	userPercentStagesCompleted?: number | undefined;

	/** Uses user platify preference. */
	userNumGamesCompleted?: number | undefined;
	/** The computed total number of series games, taking into account preferences to omit nonplats. */
	userNumGamesTotal?: number | undefined;
	/** Integer representing `userNumGamesCompleted` / `userNumGamesTotal` */
	userPercentGamesCompleted?: number | undefined;
}

export class DbSeries extends PsnpEntity implements SeriesDocIDB {
	createdAt: string;
	updatedAt: string;
	numGames: number;
	trophyCount: TrophyCount;
	points: number;
	numTrophies: number;
	stages: SeriesStage[];
	userNumGamesPlayed: number;
	userNumGamesPlatted: number;
	userNumGames100Percented: number;
	userPercentGamesCompleted: number;
	userLatestTrophy: number;
	userPoints: number;
	userNumTrophies: number;
	userTrophyCount: TrophyCount;
	userNumGamesCompleted: number;
	userNumGamesTotal: number;
	userNumStagesCompleted: number;
	userPercentStagesCompleted: number;
	userNumStagesTotal: number;
	get userNumStagesIncomplete() {
		return this.userNumStagesTotal - this.userNumStagesCompleted;
	}
	get userNumGamesIncomplete() {
		return this.userNumGamesTotal - this.userNumGamesCompleted;
	}
	get _idAndName() {
		return `${this._id}-${this._nameSerialized}`;
	}
	get url() {
		return `https://psnprofiles.com/series/${this._idAndName}`;
	}
	get src() {
		return `https://i.psnprofiles.com/series/${this._imagePath}.S.png`;
	}
	/** Returns flattened array of all the series' Game IDs. */
	get gameIds(): number[] {
		return this.stages.flatMap(x => x.gameIds);
	}

	constructor(series: SeriesDocIDB) {
		super(series);
		this.numGames = series.numGames;
		this.stages = series.stages ?? [];
		this.createdAt = series.createdAt ?? new Date().toISOString();
		this.updatedAt = series.updatedAt ?? new Date().toISOString();
		this.trophyCount = series.trophyCount;
		this.points = series.points;
		this.numTrophies = series.numTrophies;
		// User progress
		this.userTrophyCount = series.userTrophyCount ?? {bronze: 0, silver: 0, gold: 0, platinum: 0};
		this.userPoints = series.userPoints ?? 0;
		this.userNumTrophies = series.userNumTrophies ?? 0;
		this.userNumGamesPlayed = series.userNumGamesPlayed ?? 0;
		this.userNumGamesPlatted = series.userNumGamesPlatted ?? 0;
		this.userNumGames100Percented = series.userNumGames100Percented ?? 0;
		this.userLatestTrophy = series.userLatestTrophy ?? 0;

		this.userNumGamesCompleted = series.userNumGamesCompleted ?? 0;
		this.userNumGamesTotal = series.userNumGamesTotal ?? 0;
		this.userPercentGamesCompleted = series.userPercentGamesCompleted ?? 0;

		this.userNumStagesCompleted = series.userNumStagesCompleted ?? 0;
		this.userNumStagesTotal = series.userNumStagesTotal ?? 0;
		this.userPercentStagesCompleted = series.userPercentStagesCompleted ?? 0;
	}
	static url(series: Pick<SeriesDocIDB, '_id' | '_nameSerialized'>) {
		return `https://psnprofiles.com/series/${series._id}-${series._nameSerialized}`;
	}
}
