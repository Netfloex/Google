import { Request } from "@src/@types/googleRequest";
import { Search } from "@src/@types/google";

import Cache from "@src/cache/helper";
import axios from "axios";

const request = axios.create({
	params: {
		key: process.env.search_key ?? "AIzaSyAa8yy0GdcGPHdtD083HiGGx_S0vMPScDM",
		cx: process.env.custom_search_engine,
		gl: process.env.results_lang,
		prettyPrint: false,
		fields:
			"queries/request/searchTerms," +
			"searchInformation(formattedSearchTime,formattedTotalResults)," +
			"spelling/correctedQuery," +
			"items(title,link,formattedUrl,snippet,cacheId,pagemap(cse_thumbnail/src))",
	},
	baseURL: "https://content-customsearch.googleapis.com/customsearch/v1",
	headers: {
		"x-referer": "https://explorer.apis.google.com",
	},
});

const cache = new Cache<Search>("search");

export const search = async (query: string): Promise<Search> => {
	if (cache.has(query)) {
		return cache.get(query);
	}

	const { data }: { data: Request } = await request({
		params: { q: query },
	});

	const search: Search = {
		query: {
			search: data.queries.request[0].searchTerms,
			corrected: data.spelling?.correctedQuery ?? null,
			searchTime: data.searchInformation.formattedSearchTime,
			totalResults: data.searchInformation.formattedTotalResults,
		},
		results: data.items
			?.filter((item) => item.title != undefined)
			.map((item) => ({
				title: item.title ?? "",
				href: item.link,
				displayLink: item.formattedUrl,
				snippet: item.snippet,
				cacheId: item.cacheId ?? null,
				pageMap: item.pagemap ?? null,
			})),
	};
	return cache.set(query, search);
};
