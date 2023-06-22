"use client";

import RollerCoaster from "../icons/RollerCoaster";
import InputForm from "@/components/Form/InputForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ButtonForm from "@/components/Form/ButtonForm";

interface Props {
	usernameMessage: string;
	passwordMessage: string;
	buttonMessage: string;
}

const LoginForm: React.FC<Props> = ({
	usernameMessage,
	passwordMessage,
	buttonMessage,
}) => {
	const { register, handleSubmit } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
			action=""
			className="animate-slide-in-bottom z-20 bg-white mx-auto flex flex-col items-center rounded-lg p-10 pb-10 gap-4 shadow-lg"
		>
			<RollerCoaster className="w-24 h-24 m-6 hover:scale-110 transition-all " />
			<InputForm
				inputType="text"
				inputID="username"
				message={usernameMessage}
				registerFunction={register}
			></InputForm>
			<InputForm
				inputType="password"
				inputID="password"
				message={passwordMessage}
				registerFunction={register}
			></InputForm>
			<ButtonForm buttonMessage={buttonMessage} />
		</form>
	);
};

export default LoginForm;
