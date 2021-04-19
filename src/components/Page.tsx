import Head from "next/head";

/**
 * Adds SEO tags to a page
 * @param props.title - The Title in the browser
 * @param props.description - The description of the page.
 */

import { FC } from "react";

export const Page: FC<{ title: string; description: string }> = ({ title, description, children }) => (
	<>
		<Head>
			<title>{title}</title>
			<meta property="og:title" content={title} />
			<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
			<meta name="description" content={description} />
			<meta property="og:description" content={description} />
			<meta name="twitter:card" content="summary_large_image" />
		</Head>
		{children}
	</>
);
