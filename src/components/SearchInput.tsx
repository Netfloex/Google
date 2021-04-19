import { useRouter } from "next/router";

import { KeyboardEventHandler, useRef } from "react";

import { FiSearch } from "react-icons/fi";

import { FC } from "react";

export const SearchInput: FC<{ className?: string; value?: string }> = ({ className, value }) => {
	const router = useRouter();
	const input = useRef<HTMLInputElement>(null);

	const keyDown: KeyboardEventHandler = (event) => {
		if (event.key == "Enter") {
			search();
		}
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
			/>
			<FiSearch onClick={search} className="cursor-pointer" />
		</div>
	);
};
