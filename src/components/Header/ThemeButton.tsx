"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";

interface Props {}

const ThemeButton: React.FC<Props> = () => {
	const { theme, setTheme } = useTheme();

	const handleClick = () => {
		if (theme === "dark") {
			setTheme("light");
		} else {
			setTheme("dark");
		}
	};

	return (
		<div className="group flex w-9 h-8  rounded-lg transition-all duration-700 hover:bg-white">
			<button onClick={handleClick} className=" w-full ">
				<FontAwesomeIcon
					icon={theme === "dark" ? faSun : faMoon}
					className="w-3 group-hover:text-black dark:text-white"
				/>
			</button>
		</div>
	);
};

export default ThemeButton;
