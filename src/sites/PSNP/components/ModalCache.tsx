import {useEffect, useState} from 'preact/hooks';
import ProgressBar from '../../../shared/components/ProgressBar';
import ModalBase, {ModalGenericProps} from '../../../shared/components/ModalBase';
import {ScrapeResult} from '../services/db/types';
import {DbGame} from '../models/dbGame';
import {TrophyNexusPsnp} from '../nexus';
import {ProgressMetrics, getProgressMetrics} from '../../../shared/utils/getProgress';
import {sleep} from 'trophyutil';

interface ModalCacheProps extends Omit<ModalGenericProps, 'closeBtn'> {
	baseGenerator: () => AsyncGenerator<ProgressMetrics, any, void>;
	userGenerator: undefined | (() => AsyncGenerator<ProgressMetrics, ScrapeResult<DbGame>, void>);
	/** What happens when the ModalCache closes. */
	onClose: () => void;
	nexus: TrophyNexusPsnp;
}

export const ModalCache: preact.FunctionComponent<ModalCacheProps> = ({
	baseGenerator,
	userGenerator,
	isOpen,
	title,
	nexus,
	onClose,
	children,
}) => {
	const [baseProgress, setBaseProgress] = useState<ProgressMetrics>(() => getProgressMetrics());
	const [userProgress, setUserProgress] = useState<ProgressMetrics>(() => getProgressMetrics());
	const [operationInProgress, setOperationInProgress] = useState(false);
	const [operationFinished, setOperationFinished] = useState(false);

	const handleClose = () => {
		if (!operationInProgress) {
			onClose();
			if (!operationFinished) {
				nexus.userPrefs.PSNP.suppressCacheModal = true;
				nexus.userPrefs.save();
			}
		}
	};

	useEffect(() => {
		if (isOpen && operationInProgress) {
			window.addEventListener('beforeunload', handleBeforeUnload);

			updateBaseProgress().then(() => {
				updateUserProgress().then(() => {
					window.removeEventListener('beforeunload', handleBeforeUnload);
					setOperationFinished(true);
					setOperationInProgress(false);
				});
			});
		}

		return () => window.removeEventListener('beforeunload', handleBeforeUnload);
	}, [isOpen, operationInProgress]);

	async function updateBaseProgress() {
		for await (const p of baseGenerator()) {
			setBaseProgress(p);
		}
	}

	async function updateUserProgress() {
		if (!userGenerator) return;
		for await (const p of userGenerator()) {
			setUserProgress(p);
		}
	}

	function handleBeforeUnload(event: BeforeUnloadEvent) {
		event.preventDefault();
		event.returnValue = 'Please wait until active process is finished.';
	}

	const progString = (prog: ProgressMetrics, itemName?: string) => {
		const isValid = prog.b > 0 && prog.a >= 0;
		const name = itemName ? (itemName.endsWith('s') ? ` ${itemName}` : ` ${itemName}s`) : '';
		return isValid ? `(${prog.a}/~${prog.b}${name})` : '';
	};

	const captionBase = `Fetching all games and series ${progString(baseProgress)}`;
	const captionUser = `Caching user games ${progString(userProgress, 'page')}`;
	const operationStarted = baseProgress.a >= 0 || userProgress.a >= 0;

	return (
		<ModalBase
			isOpen={isOpen}
			title={title}
			closeBtn={{name: 'Close', attrs: {onClick: handleClose, disabled: operationInProgress}}}
			extraButtons={[
				{
					name: 'Begin',
					attrs: {
						onClick: e => {
							setOperationInProgress(true);
							setBaseProgress({a: 0, b: 0, decimal: 0, percentage: 0});
						},
						disabled: operationInProgress || operationFinished,
					},
				},
			]}
		>
			{children}
			{operationStarted && (
				<ProgressBar progress={baseProgress.decimal} caption={captionBase}>
					{baseProgress.percentage}%
				</ProgressBar>
			)}
			{operationStarted && !!userGenerator && baseProgress.percentage === 100 && (
				<ProgressBar progress={userProgress.decimal} caption={captionUser}>
					{userProgress.percentage}%
				</ProgressBar>
			)}
		</ModalBase>
	);
};
