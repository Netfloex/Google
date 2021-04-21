import { FC } from "react";
import useSWR from "swr";
import { AutoComplete } from "@src/@types/autocomplete";

export const Suggestions: FC<{ query?: string }> = ({ query }) => {
	const { data, error } = useSWR<AutoComplete>(() =>
		!query ? null : "/api/autocomplete?q=" + query
	);

	if (error) {
		return <>Error in Autocomplete</>;
	}
	if (data && data.length) {
		return <>{data[0].suggestion}?</>;
	}
	return <></>;
};
