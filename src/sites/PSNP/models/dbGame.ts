import {
	IGamePlayable,
	TrophyCount,
	PlatformTag,
	StackAbbr,
	PsnpEntity,
	IMetadataFields,
	ITrophyGroup,
	MakeOptional,
	IGameDoc,
} from 'trophyutil';

export interface Timestamps {
	/** Date created in ISO format. */
	createdAt: string;
	/** Date created in ISO format. */
	updatedAt: string;
}
/** A MongoDB game document. `metaData` and `trophyGroups` fields are optional since they drastically increase document size. */
export type GameDocMongo = Timestamps & MakeOptional<Omit<IGameDoc, 'createdAt' | 'updatedAt'>, 'trophyGroups' | 'metaData'>;

/** An IDB game document. Satisfies games from MongoDB, Profile, and Games. */
export type GameDocIDB = Partial<UserTrophyCount> &
	MakeOptional<
		GameDocMongo & IGamePlayable,
		| 'numTrophies'
		| 'points'
		| 'trophyCount'
		| 'forumId'
		| 'trophyGroups'
		| 'metaData'
		| 'numOwners'
		| 'rarityBase'
		| 'createdAt'
		| 'updatedAt'
		| 'stackIds'
	>;

/** `user`-prefixed {@link TrophyCount} properties. */
export interface UserTrophyCount {
	userTrophyCount: TrophyCount;
	userPoints: number;
	userNumTrophies: number;
}

export class DbGame extends PsnpEntity implements GameDocIDB {
	platforms: PlatformTag[];
	stackLabel: StackAbbr | null;
	rarityBase?: number | undefined;
	rarityDlc?: number | undefined;
	percent?: number | undefined;
	completionStatus?: 'platinum' | 'completed' | undefined;
	completionSpeed?: number | undefined;
	completionRank?: string | undefined;
	latestTrophy?: number | undefined;
	trophyCount?: TrophyCount | undefined;
	userTrophyCount?: TrophyCount | undefined;
	points?: number | undefined;
	userPoints?: number | undefined;
	numTrophies?: number | undefined;
	userNumTrophies?: number | undefined;
	createdAt: string;
	updatedAt: string;
	forumId?: number | null | undefined;
	trophyGroups?: ITrophyGroup[] | undefined;
	metaData?: IMetadataFields | undefined;
	numOwners?: number | undefined;
	stackIds: number[];
	get _idAndName() {
		return `${this._id}-${this._nameSerialized}`;
	}
	get url() {
		return `https://psnprofiles.com/trophies/${this._id}-${this._nameSerialized}`;
	}
	get src() {
		return `https://i.psnprofiles.com/games/${this._imagePath}.png`;
	}
	/** Trophy rarity formatted with two decimal places. */
	get rarityBaseString() {
		return this.rarityBase?.toFixed(2);
	}
	/** Trophy rarity formatted with two decimal places. */
	get rarityDlcString() {
		return this.rarityDlc?.toFixed(2);
	}
	/** Returns the word to use in a completion string, or `null` if game is incomplete.
	 *
	 * `Completed` denotes 100%'d nonplats or games with DLC, and `Platinum` denotes all other cases where the plat is earned. */
	get completionSpeedType() {
		if (!this.completionStatus) return null;
		else if (this.completionStatus === 'completed' || (this.rarityDlc && this.percent === 100)) return 'Completed';
		else return 'Platinum';
	}

	constructor(game: GameDocIDB) {
		super(game);
		this.platforms = game.platforms;
		this.stackLabel = game.stackLabel;
		this.rarityBase = game.rarityBase;
		this.rarityDlc = game.rarityDlc;
		this.numOwners = game.numOwners;
		this.forumId = game.forumId;
		this.trophyGroups = game.trophyGroups;
		this.metaData = game.metaData;
		this.stackIds = game.stackIds ?? [];
		this.createdAt = game.createdAt ?? new Date().toISOString();
		this.updatedAt = game.updatedAt ?? new Date().toISOString();
		this.trophyCount = game.trophyCount;
		this.points = game.points;
		this.numTrophies = game.numTrophies;
		// User progress
		this.userTrophyCount = game.userTrophyCount ?? {bronze: 0, silver: 0, gold: 0, platinum: 0};
		this.userPoints = game.userPoints ?? 0;
		this.userNumTrophies = game.userNumTrophies ?? 0;
		this.percent = game.percent ?? 0;
		this.latestTrophy = game.latestTrophy ?? 0;
		this.completionStatus = game.completionStatus;
		this.completionSpeed = game.completionSpeed;
		this.completionRank = game.completionRank;
	}

	static url(game: Pick<GameDocIDB, '_id' | '_nameSerialized'>) {
		return `https://psnprofiles.com/trophies/${game._id}-${game._nameSerialized}`;
	}

	/** Wraps a {@link IGamePlayable}, prefixing {@link TrophyCount} properties with `user`. */
	static wrapProfileGame(game: IGamePlayable) {
		// Extract the TrophyCount props and rename them
		const {trophyCount: userTrophyCount, points: userPoints, numTrophies: userNumTrophies, ...rest} = game;
		// Reinsert the props with their new names
		const normalized = {...rest, userTrophyCount, userPoints, userNumTrophies};
		return normalized;
	}

	hasUserProgress(): this is UserTrophyCount {
		const keys: (keyof UserTrophyCount)[] = ['userNumTrophies', 'userPoints', 'userTrophyCount'];
		return keys.every(key => key in this);
	}
}
