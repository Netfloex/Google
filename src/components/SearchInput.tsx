import { useRouter } from "next/router";

import { KeyboardEventHandler, useRef } from "react";

import { FC } from "react";

const SearchInput: FC = () => {
	const router = useRouter();
	const input = useRef<HTMLInputElement>(null);

	const keyDown: KeyboardEventHandler = event => {
		if (event.key == "Enter" && input.current) {
			router.push("/search/" + input.current.value);
		}
	};
	return <input autoFocus type="text" ref={input} className="search-input" onKeyDown={keyDown} />;
};
export default SearchInput;
