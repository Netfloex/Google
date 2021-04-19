export interface Request {
	queries: {
		request: [
			{
				searchTerms: string;
			}
		];
	};

	searchInformation: {
		formattedSearchTime: string;
		formattedTotalResults: string;
	};

	spelling?: {
		correctedQuery: string;
	};

	items: Item[];
}

interface Item {
	title?: string;
	link: string;
	snippet: string;
	cacheId: string;
	formattedUrl: string;
	pagemap?: PageMap;
}

interface PageMap {
	cse_thumbnail: [
		{
			src: string;
		}
	];
}
