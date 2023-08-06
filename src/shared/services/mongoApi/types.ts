export const PROXY_URL = `https://us-central1-trophynexus.cloudfunctions.net/proxyScraper`;

export interface MongoReq {
	endpoint: 'find';
	collection: 'games' | 'series';
}
export interface MongoFindReq extends MongoReq {
	limit: number;
	offset: number;
	sort?: any;
	filter?: any;
	projection?: any;
}
