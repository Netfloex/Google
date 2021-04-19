import Logo from "../svg/google.svg";

import { Page, DarkModeSwitch, SearchInput } from "@components";

import { NextPage } from "next";

const Home: NextPage = () => (
	<Page title="Google Search" description="Custom Google Search">
		<DarkModeSwitch />
		<div className="text-center">
			<div className="mt-40">
				<Logo className="inline-block" />
			</div>
			<div className="w-80 inline-block mt-4">
				<SearchInput />
			</div>
		</div>
	</Page>
);
export default Home;
