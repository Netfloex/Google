import Link from "next/link";

import { Result as Item } from "@src/@types/google";

import { FC } from "react";

export const Result: FC<{ item: Item }> = ({ item }) => (
	<Link href={item.href}>
		<a>
			<div className="p-4 flex items-center">
				<div className="w-24 mx-4">
					{item.pageMap && <img src={item.pageMap.cse_thumbnail?.[0].src} alt="" />}
				</div>
				<div className="flex-1">
					{item.displayLink}
					<br />

					{item.title}

					<br />
					{item.snippet}
					<br />
					<br />
				</div>
			</div>
		</a>
	</Link>
);
