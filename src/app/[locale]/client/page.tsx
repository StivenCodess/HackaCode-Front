import FormClient from "@/components/Clients/FormClient";
import ArticleClient from "@/components/Clients/ArticleClient";
import { useTranslations } from "next-intl";

export default function ClientPage() {
	const clientTranslation = useTranslations("Client");
	const clientMessages = {
		name: clientTranslation("name"),
		phone: clientTranslation("phone"),
		buttonMessage: clientTranslation("button"),
	};
	return (
		<main className="flex justify-center items-center h-screen">
			<ArticleClient clientMessages={clientMessages} />
		</main>
	);
}
