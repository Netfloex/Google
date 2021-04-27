import { FC, useRef } from "react";
import useSWR from "swr";
import { AutoComplete } from "@src/@types/autocomplete";
import Link from "next/link";

export const Suggestions: FC<{ query?: string }> = ({ query }) => {
	const q = query?.trim();
	const url = !q ? null : "/api/autocomplete?q=" + q;
	const { data, error } = useSWR<AutoComplete>(() => url);

	const cached = useRef(data);
	if (data || !url) {
		cached.current = data;
	}
	if (error) {
		return <>Error in Autocomplete</>;
	}
	if (cached.current && cached.current.length) {
		return (
			<div className="block pt-3">
				{cached.current.map((completion, i) => (
					<Link key={i} href={completion.suggestion}>
						<a>
							<div>{completion.suggestion}</div>
						</a>
					</Link>
				))}
			</div>
		);
	}
	return <></>;
};
