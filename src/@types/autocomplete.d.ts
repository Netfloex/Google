export type AutoComplete = Completion[];
type Completion = {
	suggestion: string;
	description?: string;
	type: string;
};
