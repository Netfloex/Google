import Head from "next/head";
import Logo from "../svg/google.svg";

import DarkModeSwitch from "../components/DarkModeSwitch";
import SearchInput from "../components/SearchInput";

import { FC } from "react";

const Home: FC = () => (
	<>
		<Head>
			<title>Google Proxy</title>
		</Head>
		<DarkModeSwitch />
		<div className="text-center">
			<div className="mt-40">
				<Logo className="inline-block" />
			</div>
			<div className="w-80 inline-block mt-4">
				<SearchInput />
			</div>
		</div>
	</>
);
export default Home;
