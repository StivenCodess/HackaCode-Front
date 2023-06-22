import FormClient from "@/components/Clients/FormClient";
import { useTranslations } from "next-intl";

export default function ClientPage() {
	const clientTranslation = useTranslations("Client");
	const clientMessages = {
		name: clientTranslation("name"),
		phone: clientTranslation("phone"),
		buttonMessage: clientTranslation("button"),
	};
	return (
		<main className="flex justify-center items-center h-screen ">
			<section className="bg-white rounded text-black">
				<h3>Clients</h3>
				<FormClient clientMessages={clientMessages} />
			</section>
		</main>
	);
}
