import axios from "axios";
import { Request } from "@src/@types/autocompleteRequest";
import { AutoComplete } from "@src/@types/autocomplete";
const request = axios.create({
	params: {
		client: "chrome",
		gl: process.env.results_lang,
		prettyPrint: false,
	},
	baseURL: "https://suggestqueries.google.com/complete/search",
});

export const autoComplete = async (query: string): Promise<AutoComplete> => {
	const { data }: { data: Request } = await request({
		params: { q: query },
	});
	return data[1].map((q, i) => ({
		suggestion: q,
		description: data[2][i],
		type: data[4]["google:suggesttype"][i],
	}));
};
