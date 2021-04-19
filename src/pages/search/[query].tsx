import { InferGetStaticPropsType, NextPage, GetStaticPropsContext, GetStaticPaths } from "next";
import Link from "next/link";

import { Page, Logo, DarkModeSwitch, SearchInput, Result } from "@components";
import { search } from "@api";

const Search: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ res, query }) => {
	if (!res) {
		return <></>;
	}
	return (
		<Page title={`${res.queries.request[0].searchTerms} - Zoeken`} description={"Custom Google Search"}>
			<div className="p-4 flex items-center">
				<Link href="/">
					<a className="w-24 mx-4">
						<Logo className="w-full" />
					</a>
				</Link>
				<div className="flex-1 mx-4">
					<SearchInput className="my-3" value={query} />
				</div>
				<div className="flex-1">
					<DarkModeSwitch />
				</div>
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
					<Result //
						item={item}
						href={item.link}
						key={item.cacheId}
					/>
				))}
		</Page>
	);
};

export const getStaticPaths: GetStaticPaths = () => Promise.resolve({ paths: [], fallback: true });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	if (!params?.query) return { props: {}, notFound: true };
	const query = params.query as string;

	const res = await search(query);

	return {
		props: {
			query,
			res,
		},
	};
};

export default Search;
