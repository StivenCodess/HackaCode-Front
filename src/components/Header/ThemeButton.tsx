"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
		<div className="flex w-9 h-8 bg-white rounded-lg transition-all hover:bg-[#88a1fb]">
			<button onClick={handleClick} className=" w-full ">
				<FontAwesomeIcon
					icon={theme === "dark" ? faSun : faMoon}
					className="w-3 text-black"
				/>
			</button>
		</div>
	);
};

export default ThemeButton;
