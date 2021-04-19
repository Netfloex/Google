import { Search } from "../@types/google";

const url = "https://www.googleapis.com/customsearch/v1?key=AIzaSyBNhRzrLNGcHHfyLZcV6EIZqa79H31YlmI&cx=17fcef79b9f3bd97b&q=";

export const search = async (query: string): Promise<Search> => await fetch(url + query).then(r => r.json());
