import { useTheme } from "next-themes";
import { MdBrightnessHigh as Sun, MdBrightness3 as Moon } from "react-icons/md";

const DarkModeSwitch = () => {
	const { theme, setTheme } = useTheme();
	return (
		<div>
			<div className="float-right my-3 mr-3">
				<button
					onMouseDown={e => {
						e.preventDefault();
						setTheme(theme == "dark" ? "light" : "dark");
					}}
					className="button text-gray-700 dark:text-gray-300">
					<Moon className="block dark:hidden w-7 h-7" />
					<Sun className="hidden dark:block  w-7 h-7" />
				</button>
			</div>
			<div className="clear-both"></div>
		</div>
	);
};

export default DarkModeSwitch;
