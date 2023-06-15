"use client";

import InputForm from "./InputForm";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

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
			className="bg-white mx-auto flex flex-col rounded-lg p-8 gap-4"
		>
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
			<button type="submit" className="bg-slate-500 text-white rounded-sm py-2">
				{buttonMessage}
			</button>
		</form>
	);
};

export default LoginForm;
