export interface Request {
	url: URL;
	queries: Queries;
	context: Context;
	searchInformation: SearchInformation;
	spelling?: Spelling;
	items?: Item[];
}

interface Context {
	title: string;
}
interface Spelling {
	correctedQuery: string;
	htmlCorrectedQuery: string;
}
interface Item {
	kind: Kind;
	title: string;
	htmlTitle: string;
	link: string;
	displayLink: string;
	snippet: string;
	htmlSnippet: string;
	cacheId?: string;
	formattedUrl: string;
	htmlFormattedUrl: string;
	pagemap: PageMap;
	mime?: string;
	fileFormat?: string;
}
interface PageMap {
	cse_thumbnail?: [Image];
	metatags: [Record<string, string>];
	cse_image?: [Image];
}

interface Image {
	src: string;
}
interface Queries {
	request: NextPage[];
	nextPage: NextPage[];
}

interface NextPage {
	title: string;
	totalResults: string;
	searchTerms: string;
	count: number;
	startIndex: number;
	inputEncoding: string;
	outputEncoding: string;
	safe: string;
	cx: string;
}

interface SearchInformation {
	searchTime: number;
	formattedSearchTime: string;
	totalResults: string;
	formattedTotalResults: string;
}

interface URL {
	type: string;
	template: string;
}
