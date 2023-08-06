import {sleep} from 'trophyutil';

/** Waits for `document.body` to spawn, then either returns it (if no argument is passed)
 *  or returns HTMLElement matching `selector` if/when it spawns. If `timeout` is also provided,
 *  the promise will reject after the specified number of ms. */
export async function waitForEl<E extends HTMLElement = HTMLElement>(selector?: string, timeout?: number): Promise<E> {
	while (!document.body) {
		await sleep(10);
	}

	return new Promise(function (resolve, reject) {
		if (selector) {
			const targetElement = document.querySelector<E>(selector);
			if (targetElement) {
				resolve(targetElement);
			}
		} else {
			resolve(document.body as E);
		}

		const observer = new MutationObserver(function (mutations) {
			const targetElement = document.querySelector<E>(selector!);
			if (targetElement) {
				resolve(targetElement);
				observer.disconnect();
			}
		});

		observer.observe(document.body, {
			childList: true,
			subtree: true,
		});

		if (timeout) {
			setTimeout(() => {
				observer.disconnect();
				reject(new Error(`Timed out waiting for element: ${selector}`));
			}, timeout);
		}
	});
}

export function newElement(tagname: string, attributes: Record<string, string>, ...children: (string | HTMLElement)[]) {
	const el = document.createElement(tagname);
	for (const [key, value] of Object.entries(attributes)) {
		el.setAttribute(key, value);
	}
	children.forEach(child => {
		if (typeof child === 'string') {
			el.append(child);
		} else {
			el.append(child);
		}
	});
	return el;
}
