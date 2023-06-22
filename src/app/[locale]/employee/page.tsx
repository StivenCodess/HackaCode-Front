import FormEmployee from "@/components/Employee/FormEmployee";
import { useTranslations } from "next-intl";

export default function EmployeePage() {
	const employeeTranslation = useTranslations("Employee");
	const employeeMessages = {
		name: employeeTranslation("name"),
		phone: employeeTranslation("phone"),
		buttonMessage: employeeTranslation("button"),
	};

	return (
		<main className="flex justify-center items-center h-screen ">
			<section className="bg-white rounded text-black">
				<h3>Employee</h3>
				<FormEmployee employeeMessages={employeeMessages} />
			</section>
		</main>
	);
}
