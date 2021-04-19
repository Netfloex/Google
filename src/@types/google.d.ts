export type Search = {
	query: Query;
	results?: Result[];
};
type Query = {
	search: string;
	corrected: string | false;
	searchTime: string;
	totalResults: string;
};
export type Result = {
	title: string;
	href: string;
	displayLink: string;
	snippet: string;
	cacheId: string | false;
	pageMap: PageMap | false;
};
type PageMap = {
	cse_thumnail?: [{ src: string }];
	metatags?: [Record<string, string>];
};