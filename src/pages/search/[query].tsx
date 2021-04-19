import { InferGetStaticPropsType, NextPage, GetStaticPropsContext, GetStaticPaths } from "next";
import Link from "next/link";

import { Page, DarkModeSwitch, SearchInput } from "@components";
import { search } from "@api";

const Search: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ res }) => {
	if (!res) {
		return <></>;
	}
	return (
		<Page title={`${res.queries.request[0].searchTerms} - Zoeken`} description={"Custom Google Search"}>
			<DarkModeSwitch />
			<div className="w-32">
				<SearchInput />
			</div>
			{res.searchInformation.formattedTotalResults} resultaten in {res.searchInformation.formattedSearchTime} seconden
			<br />
			{res.spelling && (
				<>
					<br />
					Bedoelde u: <Link href={res.spelling.correctedQuery}>{res.spelling.correctedQuery}</Link>
					<br />
				</>
			)}
			<br />
			{res.items &&
				res.items.map(item => (
					<Link href={item.link} key={item.cacheId}>
						<a>
							{item.displayLink}
							<br />

							{item.title}

							<br />
							{item.snippet}
							<br />
							<br />
						</a>
					</Link>
				))}
		</Page>
	);
};

export const getStaticPaths: GetStaticPaths = () => Promise.resolve({ paths: [], fallback: true });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	if (!params?.query) return { props: {}, notFound: true };

	const res = await search(params.query as string);

	return {
		props: {
			query: params.query,
			res,
		},
	};
};

export default Search;
