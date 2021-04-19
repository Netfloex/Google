import { Request } from "../@types/googleRequest";
import { Search } from "../@types/google";

import axios from "axios";

const request = axios.create({
	params: {
		key: process.env.search_key ?? "AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM",
		cx: process.env.custom_search_engine,
	},
	baseURL: "https://content-customsearch.googleapis.com/customsearch/v1",
	headers: {
		"x-referer": "https://explorer.apis.google.com",
	},
});

export const search = async (query: string): Promise<Search> => {
	const { data }: { data: Request } = await request({
		params: { q: query },
	});

	return {
		query: {
			search: data.queries.request[0].searchTerms,
			corrected: data.spelling?.correctedQuery ?? false,
			searchTime: data.searchInformation.formattedSearchTime,
			totalResults: data.searchInformation.formattedTotalResults,
		},
		results: data.items?.map((item) => ({
			title: item.title,
			href: item.link,
			displayLink: item.formattedUrl,
			snippet: item.snippet,
			cacheId: item.cacheId ?? false,
			pageMap: item.pagemap ?? false,
		})),
	};
};
