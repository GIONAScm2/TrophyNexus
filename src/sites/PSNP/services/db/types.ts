import type {ChangeData} from 'trophyutil';
import {DbGame} from '../../models/dbGame';
import type {DBSchema} from 'idb';
import type {GameDocIDB} from '../../models/dbGame';
import {DbSeries, SeriesDocIDB} from '../../models/dbSeries';

// IDB

export const DB_NAME = 'TrophyNexus' as const;
export const DB_STORE_GAMES = 'psnp_games' as const;
export const DB_STORE_SERIES = 'psnp_series' as const;

export type DbStoreName = typeof DB_STORE_GAMES | typeof DB_STORE_SERIES;

export interface ITrophyDB extends DBSchema {
	[DB_STORE_GAMES]: {
		key: number;
		value: GameDocIDB;
		indexes: {_id: number};
	};
	[DB_STORE_SERIES]: {
		key: number;
		value: SeriesDocIDB;
		indexes: {_id: number};
	};
}

export type DbStoreValue<T extends DbStoreName> = T extends typeof DB_STORE_GAMES
	? GameDocIDB
	: T extends typeof DB_STORE_SERIES
	? SeriesDocIDB
	: never;

// Caching

/** A tuple of length 2, containing the item and its ChangeData. */
export type UpdateData<T> = [T, ChangeData];
export function isDbGameUpdateData(arg: unknown[]): arg is UpdateData<DbGame>[] {
	return arg.length === 0 || arg[0] instanceof DbGame;
}
export function isDbSeriesUpdateData(arg: unknown[]): arg is UpdateData<DbSeries>[] {
	return arg.length === 0 || arg[0] instanceof DbSeries;
}

export type ScrapeResult<T> = {
	newItems: T[];
	updateData: UpdateData<T>[];
};

export type PageItemData<T> = {
	domItem: T;
	dbItem: T | undefined;
}[];

export interface CacheStoppingOptions {
	newPageItems: GameDocIDB[] | SeriesDocIDB[];
	updatedPageItems: UpdateData<GameDocIDB | SeriesDocIDB>[];
	currentPage: number;
	maxPages: number;
	itemsPerPage: number;
}
