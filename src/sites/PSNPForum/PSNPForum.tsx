import {useEffect} from 'preact/hooks';
import {TrophyNexusPsnpForum} from './nexus';
import injectShortcutToTrophyList from './features/injectShortcutToTrophyList';
import {PsnpForumPageType} from 'trophyutil';

interface PSNPForumProps {
	nexus: TrophyNexusPsnpForum;
}

export const PSNPForum: preact.FunctionComponent<PSNPForumProps> = ({children, nexus}) => {
	useEffect(() => {
		(async () => {
			switch (nexus.pageType) {
				case PsnpForumPageType.Topic:
					injectShortcutToTrophyList(nexus);
					break;
			}
		})();
	}, []);

	return <></>;
};
