import { Page, DarkModeSwitch, Logo, SearchInput } from "@components";

import { NextPage } from "next";

const Home: NextPage = () => (
	<Page title="Google Search" description="Custom Google Search">
		<DarkModeSwitch />
		<div className="text-center p-4">
			<div className="mt-40">
				<Logo className="inline-block w-72" />
			</div>
			<div className="max-w-lg w-full inline-block mt-8">
				<SearchInput />
			</div>
		</div>
	</Page>
);
export default Home;
