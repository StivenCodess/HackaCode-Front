import Link from "next/link";

interface Props {
	welcomeMessage: {
		message: string;
		by: string;
		messageContinue: string;
	};
}

const WelcomeText: React.FC<Props> = ({ welcomeMessage }) => {
	return (
		<p className="w-[80%] p-2 text-center mt-3">
			{welcomeMessage.message}{" "}
			<Link
				href="https://hackacode.todocodeacademy.com/"
				target="_blank"
				className="font-medium"
			>
				HackaCode
			</Link>{" "}
			{welcomeMessage.by}{" "}
			<Link href="https://todocodeacademy.com/" target="_blank" className="font-medium">
				TodoCode
			</Link>
			. {welcomeMessage.messageContinue}
		</p>
	);
};

export default WelcomeText;
