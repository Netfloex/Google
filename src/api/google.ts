import { Search } from "../@types/google";

const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.search_key}&cx=${process.env.custom_search_key}&q=`;

export const search = async (query: string): Promise<Search> => await fetch(url + query).then(r => r.json());
