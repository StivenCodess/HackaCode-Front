"use client";
import InputForm from "@/components/Form/InputForm";
import ButtonForm from "@/components/Form/ButtonForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface Props {
	employeeMessages: {
		name: string;
		phone: string;
		buttonMessage: string;
	};
}

const FormEmployee: React.FC<Props> = ({ employeeMessages }) => {
	const { register, handleSubmit } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	return (
		<form action="" onSubmit={handleSubmit(onSubmit)}>
			<InputForm
				inputType={"text"}
				inputID={employeeMessages.name}
				message={employeeMessages.name}
				registerFunction={register}
			/>
			<InputForm
				inputType={"tel"}
				inputID={employeeMessages.phone}
				message={employeeMessages.phone}
				registerFunction={register}
			/>
			<InputForm
				inputType={"number"}
				inputID={"DNI"}
				message={"DNI"}
				registerFunction={register}
			/>
			<ButtonForm buttonMessage={employeeMessages.buttonMessage} />
		</form>
	);
};

export default FormEmployee;
