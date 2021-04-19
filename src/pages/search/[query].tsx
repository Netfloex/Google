import { InferGetStaticPropsType, NextPage, GetStaticPropsContext, GetStaticPaths } from "next";

import DarkModeSwitch from "../../components/DarkModeSwitch";

const Search: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = props => {
	return (
		<>
			<DarkModeSwitch />
			<p className="text-center">{props.query}</p>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = () => Promise.resolve({ paths: [], fallback: true });

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types, @typescript-eslint/explicit-function-return-type
export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
	if (!params?.query) return { props: {}, notFound: true };

	return {
		props: {
			query: params.query,
		},
	};
};

export default Search;
