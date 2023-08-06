import {logMethodSpeed} from '../../../shared/utils/decorators';
import {DbGame} from '../models/dbGame';
import {TrophyNexusPsnp} from '../nexus';

/** Handles IDB DbGame documents. */
export class DbGamesController {
	allGames: DbGame[] = [];
	private nexus: TrophyNexusPsnp;
	private get prefs() {
		return this.nexus.userPrefs.PSNP.bools;
	}

	constructor(nexus: TrophyNexusPsnp) {
		this.nexus = nexus;
	}

	@logMethodSpeed()
	async retrieveAllGames() {
		const allGamesRaw = await this.nexus.idb.getAll('psnp_games');
		this.allGames = allGamesRaw.map(data => new DbGame(data));
		return this.allGames;
	}
}
