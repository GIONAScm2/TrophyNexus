import {TrophyNexusPsnpForum} from '../../sites/PSNPForum/nexus';
import {TrophyNexusTTA} from '../../sites/TTA/nexus';
import {PSNP} from '../../sites/PSNP/components/PSNP';
import {TrophyNexusPsnp} from '../../sites/PSNP/nexus';
import type TrophyNexus from '../../sites/nexus';
import {getPsnpPageType, getPsnpForumPageType, getTTAPageType, PsnpPageType, PsnpForumPageType, TTAPageType} from 'trophyutil';
import {useEffect, useState} from 'preact/hooks';
import {PSNPForum} from '../../sites/PSNPForum/PSNPForum';
import {TTA} from '../../sites/TTA/TTA';

interface AppProps {
	nexus: TrophyNexus;
}

type PageType = PsnpPageType | PsnpForumPageType | TTAPageType;
type SiteNexus = TrophyNexusPsnp | TrophyNexusPsnpForum | TrophyNexusTTA;

export const App: preact.FunctionComponent<AppProps> = ({nexus}) => {
	const [siteNexus, setSiteNexus] = useState<SiteNexus | null>(null);

	useEffect(() => {
		let pageType: PageType | undefined;

		if (nexus.siteName === 'PSNP') {
			pageType = getPsnpPageType(nexus.url);
			setSiteNexus(new TrophyNexusPsnp(nexus, pageType));
		} else if (nexus.siteName === 'PSNPForum') {
			pageType = getPsnpForumPageType(nexus.url);
			setSiteNexus(new TrophyNexusPsnpForum(nexus, pageType));
		} else if (nexus.siteName === 'TA' || nexus.siteName === 'TT') {
			pageType = getTTAPageType(nexus.url);
			setSiteNexus(new TrophyNexusTTA(nexus, pageType));
		}
		console.log(`${nexus.siteName}${pageType ? ` (${pageType})` : ''}`);
	}, []);

	(unsafeWindow as any).nexus = siteNexus; //debug
	if (siteNexus instanceof TrophyNexusPsnp) {
		return <PSNP nexus={siteNexus}></PSNP>;
	} else if (siteNexus instanceof TrophyNexusPsnpForum) {
		return <PSNPForum nexus={siteNexus}></PSNPForum>;
	} else if (siteNexus instanceof TrophyNexusTTA) {
		return <TTA nexus={siteNexus}></TTA>;
	}
	return null;
};
