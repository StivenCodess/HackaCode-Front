"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

interface Props {}

const ThemeButton: React.FC<Props> = () => {
	const [theme, setTheme] = useState(false);

	const handleClick = () => {
		setTheme(!theme);
	};

	return (
		<div className="flex w-9 h-8 bg-white rounded-lg">
			<button onClick={handleClick} className=" w-full ">
				<FontAwesomeIcon
					icon={theme === true ? faSun : faMoon}
					className="w-3 text-black"
				/>
			</button>
		</div>
	);
};

export default ThemeButton;
