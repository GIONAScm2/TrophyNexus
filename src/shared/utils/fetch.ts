/**
 * Similar to {@link fetch}, but the Response also contains a `doc` property representing
 * the response text parsed as an HTML {@link Document}.
 */
export async function fetchDoc(url: string | URL | RequestInfo, opts?: RequestInit | undefined) {
	const response = await fetch(url, opts);
	const text = await response.text();

	const parser = new DOMParser();
	const doc = parser.parseFromString(text, 'text/html');
	const responseWithDoc: Response & {doc: Document} = {...response, doc};

	return responseWithDoc;
}
