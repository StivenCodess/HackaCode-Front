import ProfileCard from "@/components/Home/ProfileCard/ProfileCard";
import ModalWelcome from "@/components/Home/WelcomeModal/ModalWelcome";
import { useTranslations } from "next-intl";

export default function Home() {
	const homeMessages = useTranslations("Home");
	const welcomeTranslation = useTranslations("Welcome");

	const welcomeMessage = {
		message: welcomeTranslation("message"),
		by: welcomeTranslation("by"),
		messageContinue: welcomeTranslation("messageContinue"),
	};

	return (
		<main className="flex flex-col justify-start items-center h-screen gap-20">
			<ModalWelcome
				welcomeMessage={welcomeMessage}
				welcomeHeaderMessage={welcomeTranslation("header")}
			/>
			<h2 className="mt-[150px] text-4xl bg-white dark:bg-gray-700 rounded p-3 px-10 text-center text-black dark:text-white hover:-translate-y-3 transition-all duration-1000">
				Welcome Jhoe!
			</h2>
			<ProfileCard />
		</main>
	);
}
