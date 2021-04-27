import { useRouter } from "next/router";

import { ChangeEventHandler, KeyboardEventHandler, useRef, useState } from "react";

import { FiSearch } from "react-icons/fi";

import { FC } from "react";
import { Suggestions } from "@components";

export const SearchInput: FC<{ className?: string; value?: string }> = ({ className, value }) => {
	const router = useRouter();
	const input = useRef<HTMLInputElement>(null);

	const [query, updateCompletion] = useState<string | undefined>("");

	const keyDown: KeyboardEventHandler = (event) => {
		if (event.key == "Enter") {
			search();
		}
	};

	const change: ChangeEventHandler = () => {
		updateCompletion(input?.current?.value);
	};

	const search = (): void => {
		if (input.current?.value) {
			updateCompletion("");
			router.push("/search/" + input.current.value);
		}
	};

	return (
		<div className={`search-input ${className ?? ""}`.trim()}>
			{/* <div className="absolute"> */}
			<div className="flex items-center">
				<input
					autoFocus
					spellCheck={false}
					type="text"
					ref={input}
					defaultValue={value}
					onKeyDown={keyDown}
					onChange={change}
				/>

				<FiSearch onClick={search} className="cursor-pointer" />
			</div>
			<Suggestions query={query} />
		</div>
	);
};
