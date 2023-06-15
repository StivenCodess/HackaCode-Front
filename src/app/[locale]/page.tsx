import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import { useTranslations } from "next-intl";

export default function Home() {
	const homeMessages = useTranslations("Home");
	return (
		<main className="flex justify-center items-center h-screen">
			<div className="bg-white p-12 rounded-lg grid place-content-center gap-7 ">
				<FontAwesomeIcon icon={faWrench} size="3x" className="text-black  mx-auto" />
				<h1 className="text-black text-2xl font-medium ">{homeMessages("work")}</h1>
			</div>
		</main>
	);
}
