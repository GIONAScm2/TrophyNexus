import {useEffect, useState} from 'preact/hooks';
import {TrophyNexusPsnp} from '../nexus';
import {ContextMenu} from './ContextMenu';
import {ModalUserPrefs} from './ModalUserPrefs';
import {initSeriesCatalog} from '../pages/seriesCatalog';
import {PsnpPageType} from 'trophyutil';
import {ModalCache} from './ModalCache';
import {updateUserGames as _updateUserGames, updateUserGamesPassively} from '../services/db/updateUserGames';
import {ensurePsnIdIsSet, setupDependentDOM} from '../services/DOM/dependentDOM';
import setupIndependentDOM from '../services/DOM/independentDOM';
import {useCallback} from 'preact/hooks';
import {faGear} from '@fortawesome/free-solid-svg-icons/faGear';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {populateIDBFromServer} from '../services/db/updateAllFromServer';
import {updateAllSeriesLocally} from '../services/db/updateAllSeriesLocally';
import {updateAllGamesLocally} from '../services/db/updateAllGamesLocally';

interface PSNPProps {
	nexus: TrophyNexusPsnp;
}

export const PSNP: preact.FunctionComponent<PSNPProps> = ({children, nexus}) => {
	const [settingsMenuOpen, setSettingsMenuOpen] = useState(false);
	/** Whether any updates are needed (All Games, All Series, User Games) */
	const [cacheModalOpen, setCacheModalOpen] = useState(false);
	const updateAllGamesAndSeries = useCallback(() => populateIDBFromServer(nexus), [nexus]);
	const updateUserGames = useCallback(() => _updateUserGames(nexus), [nexus]);

	const needToPopulateUserProgress = !nexus.guest && nexus.userPrefs.PSNP.lastUpdatedUserGames === 0;
	useEffect(() => {
		(async () => {
			setupIndependentDOM(nexus);

			ensurePsnIdIsSet(nexus).then(() => {
				setupDependentDOM(nexus);

				updateUserGamesPassively(nexus);
				setCacheModalOpen(nexus.needToInitCache && !nexus.userPrefs.PSNP.suppressCacheModal);

				if (!nexus.needToInitCache) {
					Promise.all([updateAllSeriesLocally(nexus), updateAllGamesLocally(nexus)]).then(([_games]) => {
						if (nexus.pageType === PsnpPageType.SeriesCatalog) {
							initSeriesCatalog(nexus);
						}
					});
				}
			});
		})();
	}, []);

	const toggleSettingsModal = () => {
		setSettingsMenuOpen(!settingsMenuOpen);
	};

	return (
		<>
			<ModalCache
				nexus={nexus}
				isOpen={cacheModalOpen}
				baseGenerator={updateAllGamesAndSeries}
				userGenerator={needToPopulateUserProgress ? updateUserGames : undefined}
				title="Initialize Local Database"
				onClose={() => {
					setCacheModalOpen(false);
				}}
			>
				<p>
					To enable the coolest features, you'll need to perform a one-time database initialization which should take
					10-30s.
				</p>
				<br />
				<p>
					You can also do this later via the floating context menu (bottom right {<FontAwesomeIcon icon={faGear} />}).
				</p>
			</ModalCache>

			{
				<ContextMenu
					onClick={toggleSettingsModal}
					pageType={nexus.pageType}
					nexus={nexus}
					contextButtons={
						nexus.userPrefs.PSNP.suppressCacheModal
							? [
									{
										name: 'Init DB',
										attrs: {
											onClick: async e => {
												nexus.userPrefs.PSNP.suppressCacheModal = false;
												await nexus.userPrefs.save();
												setCacheModalOpen(true);
											},
										},
									},
							  ]
							: undefined
					}
				/>
			}

			{settingsMenuOpen && <ModalUserPrefs nexus={nexus} onClose={toggleSettingsModal} />}

			{children}
		</>
	);
};
