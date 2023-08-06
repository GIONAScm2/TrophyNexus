import {MongoFindReq, PROXY_URL} from './types';

/** Performs a `find` query using the MongoDB Data API, returning the array of queried documents.
 *
 * By default, `metaData` and `trophyGroups` fields are omitted to improve performance, unless `projection` is passed. */
export async function findItems({collection, limit, offset, sort, filter, projection}: Omit<MongoFindReq, 'endpoint'>) {
	const apiReq: MongoFindReq = {
		endpoint: 'find',
		collection,
		limit,
		offset,
		sort: sort ?? {
			_id: 1,
		},
		filter: filter ?? {},
		projection: projection ?? {},
	};

	// For reference, 21,000 games is ~170MB without projection, and ~10MB with.
	if (collection === 'games' && !projection) {
		apiReq.projection = {metaData: 0, trophyGroups: 0};
	}

	const req: Tampermonkey.Request = {
		url: PROXY_URL,
		method: 'POST',
		data: JSON.stringify(apiReq),
		headers: {'Content-Type': 'application/json'},
		responseType: 'json',
	};

	const response = await GM.xmlHttpRequest(req);
	const res: unknown = response.response;

	const hasDocumentsArray = res && typeof res === 'object' && 'documents' in res;
	const documents = hasDocumentsArray && Array.isArray(res.documents) ? res.documents : [];
	return documents;
}
