import Head from "next/head";
import Logo from "../svg/google.svg";

import DarkModeSwitch from "../components/DarkModeSwitch";

const Home = () => (
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
				<input autoFocus className="rounded-full w-full focus:outline-none focus:border-blue-300 transition-colors bg-transparent dark:border-white border px-4 py-2" type="text" name="" id="" />
			</div>
		</div>
	</>
);
export default Home;
