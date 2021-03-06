import { InferGetStaticPropsType, NextPage, GetStaticPropsContext, GetStaticPaths } from "next";
import Link from "next/link";

import { Page, Logo, DarkModeSwitch, SearchInput, Result } from "@components";
import { search } from "@api";

const Search: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({ res, query }) => {
	if (!res) {
		return <>Geen respons {JSON.stringify({ res, query })}</>;
	}

	return (
		<Page title={`${res.query.search} - Zoeken`} description={"Custom Google Search"}>
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
			<div className="p-4 flex items-center">
				<div className="w-24 mx-4"></div>
				<div className="flex-1">
					<div className="text-sm">
						{res.query.totalResults} resultaten in {res.query.searchTime} seconden
					</div>
					<div>
						{res.query.corrected && (
							<>
								Bedoelde je:
								<Link href={res.query.corrected}>
									<a className="font-bold italic"> {res.query.corrected}</a>
								</Link>
							</>
						)}
					</div>
				</div>
			</div>
			{res.results && res.results.map((item, i) => <Result item={item} key={item.cacheId || i} />)}
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
			res
		}
	};
};

export default Search;
