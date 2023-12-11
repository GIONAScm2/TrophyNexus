import {sleep} from 'trophyutil';

/**
 * Similar to {@link fetch}, but the Response also contains a `doc` property representing
 * the response text parsed as an HTML {@link Document}.
 */
export async function fetchDoc(
	url: string | URL | RequestInfo,
	opts?: RequestInit,
	maxRetries: number = 3,
	retryDelay: number = 1000
): Promise<Response & {doc: Document}> {
	for (let attempt = 1; attempt <= maxRetries; attempt++) {
		try {
			const response = await fetch(url, opts);

			if (!response.ok) {
				if (attempt < maxRetries) {
					console.warn(`Rate limit exceeded, retrying... Attempt ${attempt} of ${maxRetries}`);
					await sleep(retryDelay * Math.pow(2, attempt - 1));
					continue;
				} else {
					throw new Error(`HTTP error! status: ${response.status}`);
				}
			}

			const text = await response.text();
			const parser = new DOMParser();
			const doc = parser.parseFromString(text, 'text/html');
			const responseWithDoc: Response & {doc: Document} = {...response, doc};

			return responseWithDoc;
		} catch (error) {
			if (attempt === maxRetries) {
				console.error('Max retries reached. Fetch failed:', error);
				throw error;
			}
		}
	}

	throw new Error('Failed to fetch document after retries');
}
