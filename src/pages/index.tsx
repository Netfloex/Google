import { Page, DarkModeSwitch, Logo, SearchInput } from "@components";

import { NextPage } from "next";

const Home: NextPage = () => (
	<Page title="Google Search" description="Custom Google Search">
		<DarkModeSwitch />
		<div className="flex items-center justify-center home-page">
			<div className="w-1/4 min-w-min">
				<Logo className="block w-72 mx-auto" />
				<div className="w-full mt-8">
					<SearchInput />
				</div>
			</div>
		</div>
	</Page>
);
export default Home;
