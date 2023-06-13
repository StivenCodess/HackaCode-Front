import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

export default function Home() {
	const homeMessages = useTranslations("Home");
	return (
		<main className="flex justify-center items-center min-h-screen">
			<div className="bg-white w-80 h-80 rounded-lg grid place-content-center gap-7">
				<FontAwesomeIcon icon={faWrench} className="text-black text-6xl mx-auto" />
				<h1 className="text-black text-2xl font-medium">{homeMessages("work")}</h1>
			</div>
		</main>
	);
}
