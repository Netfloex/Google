import { useRouter } from "next/router";

import { KeyboardEventHandler, useRef } from "react";

import { FC } from "react";

export const SearchInput: FC<{ className?: string; value?: string }> = ({ className, value }) => {
	const router = useRouter();
	const input = useRef<HTMLInputElement>(null);

	const keyDown: KeyboardEventHandler = event => {
		if (event.key == "Enter" && input.current) {
			router.push("/search/" + input.current.value);
		}
	};
	return <input autoFocus type="text" ref={input} defaultValue={value} className={`search-input ${className ?? ""}`.trim()} onKeyDown={keyDown} />;
};
