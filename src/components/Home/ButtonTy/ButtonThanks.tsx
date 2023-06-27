"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const ButtonThanks = ({ setStatus, setLeave }) => {
	const handleClick = () => {
		localStorage.setItem("welcome", JSON.stringify(true));
		setLeave(false);
		setStatus(true);
	};

	return (
		<button
			onClick={handleClick}
			className="absolute bottom-0 right-0 m-5 p-1 px-2 rounded dark:text-black dark:bg-white/60 text-center font-light bg-black/30 text-white hover:scale-105 transition-all duration-300"
		>
			Thanks <FontAwesomeIcon icon={faHeart} size="1x" />
		</button>
	);
};

export default ButtonThanks;
