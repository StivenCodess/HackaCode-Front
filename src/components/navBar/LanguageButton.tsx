"use client";

import { useState } from "react";

interface Props {}

const ThemeButton: React.FC<Props> = () => {
	const [language, setlanguage] = useState("EN");

	const handleClick = () => {
		if (language === "EN") setlanguage("ES");
		if (language === "ES") setlanguage("EN");
	};

	return (
		<div className="flex w-9 h-8 bg-white rounded-lg">
			<button onClick={handleClick} className="text-black w-full ">
				<span>{language}</span>
			</button>
		</div>
	);
};

export default ThemeButton;
