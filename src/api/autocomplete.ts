import { Request } from "@src/@types/autocompleteRequest";
import { AutoComplete } from "@src/@types/autocomplete";

import Cache from "@src/cache/helper";
import axios from "axios";

const request = axios.create({
	params: {
		client: "chrome",
		gl: process.env.results_lang,
		prettyPrint: false,
	},
	baseURL: "https://suggestqueries.google.com/complete/search",
});

const cache = new Cache<AutoComplete>("autoComplete");

export const autoComplete = async (query: string): Promise<AutoComplete> => {
	if (cache.has(query)) {
		return cache.get(query);
	}

	const { data }: { data: Request } = await request({
		params: { q: query },
	});

	const completion: AutoComplete = data[1].map((q, i) => ({
		suggestion: q,
		description: data[2][i],
		type: data[4]["google:suggesttype"][i],
	}));
	return cache.set(query, completion);
};
