import Link from "next/link";

import { Item } from "@src/@types/google";

import { FC } from "react";

export const Result: FC<{ item: Item; href: string }> = ({ item }) => (
	<Link href={item.link}>
		<a>
			{item.displayLink}
			<br />

			{item.title}

			<br />
			{item.snippet}
			<br />
			<br />
		</a>
	</Link>
);
