"use client";
import { useEffect, useState } from "react";
import WelcomeHeader from "./WelcomeHeader";
import WelcomeText from "./WelcomeText";
import ButtonThanks from "../ButtonTy/ButtonThanks";

interface Props {
	welcomeMessage: {
		message: string;
		by: string;
		messageContinue: string;
	};
	welcomeHeaderMessage: string;
}

const ModalWelcome: React.FC<Props> = ({ welcomeMessage, welcomeHeaderMessage }) => {
	const [status, setStatus] = useState(true);
	const [leave, setLeave] = useState(false);

	useEffect(() => {
		if (localStorage.getItem("welcome") === "false") setStatus(false);
	}, []);

	const handleClick = () => {
		localStorage.setItem("welcome", JSON.stringify(false));
		setLeave(true);
		const timeAnimation = setTimeout(() => {
			setStatus(false);
		}, 300);
		clearTimeout(timeAnimation);
	};

	const classNames =
		"bg-white rounded-md absolute top-[20%] flex flex-col items-center w-[90%] sm:w-[80%] lg:w-[40%] dark:bg-gray-700 animate-slide-in-top transition-all p-3 shadow-md ";

	if (status) {
		return (
			<>
				<div
					className={
						leave ? classNames + " animate-slide-out-top backdrop-blur-sm" : classNames
					}
				>
					<WelcomeHeader
						handleClick={handleClick}
						welcomeHeaderMessage={welcomeHeaderMessage}
					></WelcomeHeader>
					<WelcomeText welcomeMessage={welcomeMessage}></WelcomeText>
				</div>
				<ButtonThanks setStatus={setStatus} setLeave={setLeave} />
			</>
		);
	} else return <ButtonThanks setStatus={setStatus} setLeave={setLeave} />;
};

export default ModalWelcome;
