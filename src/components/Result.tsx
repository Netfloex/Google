import Link from "next/link";

import { Result as Item } from "@src/@types/google";

import { FC } from "react";

export const Result: FC<{ item: Item }> = ({ item }) => (
	<Link href={item.href}>
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
