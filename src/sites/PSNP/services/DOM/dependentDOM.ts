import {TrophyNexusPsnp} from '../../nexus';
import {renderRarestTrophies} from './rarestTrophies';

/** If PSN ID isn't already set, we try to parse it from the DOM. Returns the PSN ID. */
export async function ensurePsnIdIsSet(nexus: TrophyNexusPsnp): Promise<string> {
	if (!nexus.userPrefs.psnId) {
		const userNavDropdown = await nexus.elements.Common.userBarPsnId;
		const psnId = userNavDropdown.textContent?.trim() ?? '';
		console.log(`Changed stored PSN ID from '${nexus.userPrefs.psnId}' to '${psnId}'`);
		nexus.userPrefs.psnId = psnId;
		await nexus.userPrefs.save();
	}
	return nexus.userPrefs.psnId;
}

/** Affects DOM based on user prefs. Must be ran only after {@link ensurePsnIdIsSet} */
export async function setupDependentDOM(nexus: TrophyNexusPsnp) {
	setFlaggedStatusAndHidePanel(nexus);
	// renderRarestTrophies(nexus);
}

async function setFlaggedStatusAndHidePanel(nexus: TrophyNexusPsnp) {
	if (!nexus.viewingOwnProfile) return;

	const flagBoxTitle = await nexus.elements.Profile.flagBoxTitle;

	nexus.userPrefs.PSNP.isFlagged = !!flagBoxTitle;
	if (nexus.userPrefs.PSNP.isFlagged && nexus.userPrefs.PSNP.bools.hideFlagBlock.value) {
		flagBoxTitle.nextElementSibling?.remove();
		flagBoxTitle.remove();
	}

	await nexus.userPrefs.save();
}
