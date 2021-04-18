import "../styles/globals.scss";
import "tailwindcss/tailwind.css";

import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";

const App = ({ Component, pageProps }: AppProps): JSX.Element => (
	<ThemeProvider attribute="class">
		<Component {...pageProps} />
	</ThemeProvider>
);
export default App;
