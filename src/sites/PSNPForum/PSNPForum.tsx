import {useEffect} from 'preact/hooks';
import {TrophyNexusPsnpForum} from './nexus';
import injectShortcutToTrophyList from './features/injectShortcutToTrophyList';

interface PSNPForumProps {
	nexus: TrophyNexusPsnpForum;
}

export const PSNPForum: preact.FunctionComponent<PSNPForumProps> = ({children, nexus}) => {
	useEffect(() => {
		(async () => {
			injectShortcutToTrophyList(nexus);
		})();
	}, []);

	return <></>;
};
