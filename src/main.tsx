import {BrowserContext} from 'trophyutil';
import TrophyNexus, {getSiteName} from './sites/nexus';
import {UserPrefs} from './shared/services/userPrefs';
import {waitForEl} from './shared/utils/domUtil';
import {render} from 'preact';
import {App} from './shared/components/App';

try {
	const browserContext = new BrowserContext({window});

	const siteName = getSiteName(browserContext.url.hostname);
	if (!siteName) {
		throw new Error(`Script not authorized to run on ${browserContext.url.hostname}`);
	}

	const userPrefs = await UserPrefs.load();
	const nexus = new TrophyNexus({browserContext, siteName, userPrefs});

	const mountNode = document.createElement('div');
	const body = await waitForEl();
	body.appendChild(mountNode);
	render(<App nexus={nexus} />, mountNode);
} catch (err) {
	console.error(err);
}
