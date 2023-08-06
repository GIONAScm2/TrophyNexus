import {openDB, IDBPDatabase} from 'idb';
import {type ITrophyDB, DB_NAME, DB_VERSION, DB_STORE_GAMES, DB_STORE_SERIES, DbStoreName, DbStoreValue} from './types';
import {diffUpdate} from 'trophyutil';
import {GameDocIDB, GameDocMongo} from '../../models/dbGame';
import {SeriesDocIDB, SeriesDocMongo} from '../../models/dbSeries';

let dbPromise: Promise<IDBPDatabase<ITrophyDB>>;

export class TrophyIDB {
	/** Returns the total count of records in the DB store */
	static async count<T extends DbStoreName>(storeName: T) {
		const db = await initDB();
		const tx = db.transaction(storeName, 'readonly');
		const store = tx.objectStore(storeName);

		const count = await store.count();
		return count;
	}

	/** Returns the highest `_id` from the DB */
	static async getHighestId<T extends DbStoreName>(storeName: T) {
		const db = await initDB();
		const tx = db.transaction(storeName, 'readonly');
		const store = tx.objectStore(storeName);
		const keys = await store.getAllKeys();

		const highestId = Math.max(...keys);
		return highestId;
	}

	/** Given ID(s), returns array of documents with `undefined` in place of nonexistent documents. */
	static async getByIds<T extends DbStoreName, U extends number[]>(storeName: T, ids: U) {
		const db = await initDB();

		const results = await Promise.all(ids.map(i => db.get(storeName, i)));
		return results;
	}

	static async getAll<T extends DbStoreName>(storeName: T) {
		const db = await initDB();
		const tx = db.transaction(storeName, 'readonly');
		const store = tx.objectStore(storeName);

		const results = await store.getAll();
		return results;
	}

	/** Given `items`, returns array of same length where each element contains the item, its stored DB
	 * equivalent (or `undefined` if not stored), and the ChangeData between the two. */
	static async getItemData<T extends DbStoreName>(storeName: T, domItems: DbStoreValue<T>[]) {
		const dbItems = await TrophyIDB.getByIds(
			storeName,
			domItems.map(item => item._id)
		);
		const itemData = domItems.map((domItem, i) => ({
			domItem,
			dbItem: dbItems[i],
			changeData: diffUpdate(dbItems[i], domItem as any, false),
		}));

		return itemData;
	}

	/** Safely upserts `items`, which can be documents from MongoDB or IDB. */
	static async upsert(storeName: DbStoreName, items: GameDocIDB[] | SeriesDocIDB[] | GameDocMongo[] | SeriesDocMongo[]) {
		const db = await initDB();
		const tx = db.transaction(storeName, 'readwrite');
		const store = tx.objectStore(storeName);

		const promises = items.map(async item => {
			const existingItem = await store.get(item._id);
			if (existingItem) {
				const updatedItem = Object.assign(existingItem, item);
				return store.put(updatedItem);
			} else {
				return store.add(item);
			}
		});

		await Promise.allSettled(promises);
		await tx.done;
	}
}

async function initDB() {
	if (!dbPromise) {
		dbPromise = openDB<ITrophyDB>(DB_NAME, DB_VERSION, {
			upgrade(db, oldV, _newV, _transaction, _event) {
				if (oldV < 1) {
					const gameStore = db.createObjectStore(DB_STORE_GAMES, {keyPath: '_id'});
					gameStore.createIndex('_id', '_id', {unique: true});

					const seriesStore = db.createObjectStore(DB_STORE_SERIES, {keyPath: '_id'});
					seriesStore.createIndex('_id', '_id', {unique: true});

					console.info(`Created IDB stores '${DB_STORE_GAMES}' and '${DB_STORE_SERIES}'`);
				}
			},
		});
	}
	const db = await dbPromise;
	return db;
}
