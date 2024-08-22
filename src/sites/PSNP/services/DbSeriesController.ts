import {logMethodSpeed} from '../../../shared/utils/decorators';
import {DbGame} from '../models/dbGame';
import {DbSeries, SeriesStageVerbose} from '../models/dbSeries';
import {TrophyNexusPsnp} from '../nexus';

/** Handles IDB DbSeries documents. */
export class DbSeriesController {
	allSeries: DbSeries[] = [];
	private nexus: TrophyNexusPsnp;
	private get prefs() {
		return this.nexus.userPrefs.PSNP.bools;
	}

	constructor(nexus: TrophyNexusPsnp) {
		this.nexus = nexus;
	}

	@logMethodSpeed()
	async retrieveAllSeriesWithProgress() {
		const allSeries = await this.retrieveAllSeries();
		await this.assignGamesToSeries(allSeries);
		return allSeries;
	}

	private async retrieveAllSeries() {
		const allSeriesRaw = await this.nexus.idb.getAll('psnp_series');
		this.allSeries = allSeriesRaw.map(data => new DbSeries(data));
		return this.allSeries;
	}
	private async assignGamesToSeries(_seriesList?: DbSeries[]) {
		const seriesList = _seriesList ?? this.allSeries;
		const allGameIds = seriesList.flatMap(s => s.gameIds);
		const dbGameData = await this.nexus.idb.getByIds('psnp_games', allGameIds);

		const dbGamesLookup = dbGameData.reduce<Record<number, DbGame>>((lookup, gameData) => {
			if (gameData) {
				lookup[gameData._id] = new DbGame(gameData);
			}
			return lookup;
		}, {});

		const seriesCalculationPromises = seriesList.map(async dbSeries => {
			const seriesDbGames = dbSeries.gameIds.map(id => dbGamesLookup[id]);

			for (const stage of dbSeries.stages) {
				const stageDbGames = seriesDbGames.filter(game => game && stage.gameIds.includes(game._id));
				stageDbGames.forEach(game => game && this.updateGameScopedMetrics(dbSeries, game));
				const stageVerbose: SeriesStageVerbose = {...stage, games: stageDbGames};
				this.updateStageScopedMetrics(dbSeries, stageVerbose);
			}
			this.updateAggregateStats(dbSeries, seriesDbGames);
			return dbSeries;
		});
		await Promise.allSettled(seriesCalculationPromises);

		return seriesList;
	}

	/** Updates a series' user metrics based on a single provided `game`. */
	private updateGameScopedMetrics(series: DbSeries, game: DbGame) {
		const platifyComplation = this.prefs.platifyComplation.value;
		const hideNonplats = this.prefs.platifySeriesHideNonplats.value;

		if (game.percent) series.userNumGamesPlayed++;
		if (game.userTrophyCount?.platinum) series.userNumGamesPlatted++;
		if (game.percent && game.percent === 100) series.userNumGames100Percented++;
		if (game.userPoints) series.userPoints += game.userPoints;
		if (game.userNumTrophies) series.userNumTrophies += game.userNumTrophies;
		if (game.userTrophyCount) {
			series.userTrophyCount.bronze += game.userTrophyCount.bronze;
			series.userTrophyCount.silver += game.userTrophyCount.silver;
			series.userTrophyCount.gold += game.userTrophyCount.gold;
			series.userTrophyCount.platinum += game.userTrophyCount.platinum;
		}
		const gameIsCompleted = platifyComplation ? !!game.userTrophyCount?.platinum : !!(game.percent && game.percent === 100);
		if (gameIsCompleted) series.userNumGamesCompleted++;

		series.userNumGamesTotal += hideNonplats ? game.trophyCount?.platinum ?? 0 : 1;
	}

	/** Updates a series' user metrics based on a single provided `stage`. */
	private updateStageScopedMetrics(series: DbSeries, stage: SeriesStageVerbose) {
		const platifyComplation = this.prefs.platifyComplation.value;
		const hideNonplats = this.prefs.platifySeriesHideNonplats.value;

		const stageGamesWithPlat = stage.games?.filter(game => game && game.trophyCount?.platinum) ?? [];
		const stageGamesPlatted = stageGamesWithPlat.filter(game => game && game.userTrophyCount?.platinum);
		const stageGames100Percented = stage.games?.filter(game => game?.percent === 100) ?? [];
		const stageHasPlat = stageGamesWithPlat.length > 0;
		const stageIsComplatted = stageGamesPlatted.length > 0 && stageGamesPlatted.length === stageGamesWithPlat.length;

		series.userNumStagesTotal += hideNonplats ? (stageHasPlat ? 1 : 0) : 1;
		series.userNumStagesCompleted += platifyComplation
			? stageIsComplatted
				? 1
				: 0
			: stageGames100Percented.length === stage.games?.length
			? 1
			: 0;
	}

	/**
	 * Provided {@link updateGameScopedMetrics} has been called on each game, this method
	 * calculates the series' aggregate metrics. */
	private updateAggregateStats(series: DbSeries, seriesGames: (DbGame | undefined)[]) {
		series.userLatestTrophy = Math.max(...seriesGames.map(game => game?.latestTrophy ?? 0));
		series.userPercentGamesCompleted = Math.floor((series.userNumGamesCompleted / series.userNumGamesTotal) * 100);
		series.userPercentStagesCompleted = Math.floor((series.userNumStagesCompleted / series.userNumStagesTotal) * 100);
	}
}
