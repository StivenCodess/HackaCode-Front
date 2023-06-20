import ModalWelcome from "@/components/Home/WelcomeModal/ModalWelcome";
import { useTranslations } from "next-intl";

interface Props {}

const Login: React.FC<Props> = () => {
	const welcomeTranslation = useTranslations("Welcome");

	const welcomeMessage = {
		message: welcomeTranslation("message"),
		by: welcomeTranslation("by"),
		messageContinue: welcomeTranslation("messageContinue"),
	};

	return (
		<main className="flex min-h-screen justify-center items-center overflow-hidden">
			<ModalWelcome
				welcomeMessage={welcomeMessage}
				welcomeHeaderMessage={welcomeTranslation("header")}
			></ModalWelcome>
		</main>
	);
};

export default Login;
