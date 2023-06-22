"use client";
import InputForm from "@/components/Form/InputForm";
import ButtonForm from "@/components/Form/ButtonForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

interface Props {
	clientMessages: {
		name: string;
		phone: string;
		buttonMessage: string;
	};
}

const FormClient: React.FC<Props> = ({ clientMessages }) => {
	const { register, handleSubmit } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	return (
		<form action="" onSubmit={handleSubmit(onSubmit)}>
			<InputForm
				inputType={"text"}
				inputID={clientMessages.name}
				message={clientMessages.name}
				registerFunction={register}
			/>
			<InputForm
				inputType={"number"}
				inputID={clientMessages.phone}
				message={clientMessages.phone}
				registerFunction={register}
			/>
			<ButtonForm buttonMessage={clientMessages.buttonMessage} />
		</form>
	);
};

export default FormClient;
