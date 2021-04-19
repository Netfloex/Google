export interface Search {
	kind: string;
	url: URL;
	queries: Queries;
	context: Context;
	searchInformation: SearchInformation;
	spelling?: Spelling;
	items?: Item[];
}

export interface Context {
	title: string;
}
export interface Spelling {
	correctedQuery: string;
	htmlCorrectedQuery: string;
}
export interface Item {
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
	pagemap: Pagemap;
	mime?: string;
	fileFormat?: string;
}

export enum Kind {
	CustomsearchResult = "customsearch#result",
}

export interface Pagemap {
	cse_thumbnail?: CSEThumbnail[];
	metatags: { [key: string]: string }[];
	cse_image?: CSEImage[];
	offer?: Offer[];
	imageobject?: Imageobject[];
	person?: Person[];
	videoobject?: { [key: string]: string }[];
}

export interface CSEImage {
	src: string;
}

export interface CSEThumbnail {
	src: string;
	width: string;
	height: string;
}

export interface Imageobject {
	width: string;
	url: string;
	height: string;
}

export interface Offer {
	price: string;
	url: string;
}

export interface Person {
	name: string;
	url: string;
}

export interface Queries {
	request: NextPage[];
	nextPage: NextPage[];
}

export interface NextPage {
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

export interface SearchInformation {
	searchTime: number;
	formattedSearchTime: string;
	totalResults: string;
	formattedTotalResults: string;
}

export interface URL {
	type: string;
	template: string;
}
