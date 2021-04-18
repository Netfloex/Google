import { useRouter } from "next/router";

import DarkModeSwitch from "../../components/DarkModeSwitch";

import { FC } from "react";

const Search: FC = () => {
	const router = useRouter();
	const { q } = router.query;

	return (
		<>
			<DarkModeSwitch />
			<p className="text-center">{q}</p>
		</>
	);
};

export default Search;
