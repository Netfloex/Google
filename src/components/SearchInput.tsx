import { useRouter } from "next/router";

import { ChangeEventHandler, KeyboardEventHandler, useRef, useState } from "react";

import { FiSearch } from "react-icons/fi";

import { FC } from "react";
import { Suggestions } from "@components";

export const SearchInput: FC<{ className?: string; value?: string }> = ({ className, value }) => {
	const router = useRouter();
	const input = useRef<HTMLInputElement>(null);
	const [query, updateQuery] = useState(value);

	const keyDown: KeyboardEventHandler = (event) => {
		if (event.key == "Enter") {
			search();
		}
	};

	const change: ChangeEventHandler = () => {
		updateQuery(input?.current?.value);
	};

	const search = (): void => {
		if (input.current?.value) router.push("/search/" + input.current.value);
	};

	return (
		<div className={`search-input ${className ?? ""}`.trim()}>
			<input
				autoFocus
				spellCheck={false}
				type="text"
				ref={input}
				defaultValue={value}
				onKeyDown={keyDown}
				onChange={change}
			/>

			<Suggestions query={query} />
			<div className="mx-3"></div>
			<FiSearch onClick={search} className="cursor-pointer" />
		</div>
	);
};
