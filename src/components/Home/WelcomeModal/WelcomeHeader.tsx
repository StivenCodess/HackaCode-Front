import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { MouseEventHandler } from "react";

interface Props {
	handleClick: MouseEventHandler;
	welcomeHeaderMessage: string;
}

const WelcomeHeader: React.FC<Props> = ({ handleClick, welcomeHeaderMessage }) => {
	return (
		<div className="flex justify-between items-center relative w-full sm:justify-center">
			<h2>{welcomeHeaderMessage}</h2>
			<div
				onClick={handleClick}
				className="group w-3 h-3 p-3 flex justify-center items-center dark:hover:bg-white hover:bg-slate-600 rounded-[50%] cursor-pointer transition-all duration-duration-500 md:absolute md:right-0 "
			>
				<FontAwesomeIcon
					icon={faX}
					className="text-sm group-hover:text-white dark:group-hover:text-black"
				></FontAwesomeIcon>
			</div>
		</div>
	);
};

export default WelcomeHeader;
