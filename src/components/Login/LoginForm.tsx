import InputForm from "./InputForm";
interface Props {
	loginMessages: Function;
}

const LoginForm: React.FC<Props> = ({ loginMessages }) => {
	return (
		<form action="" className="bg-white mx-auto flex flex-col rounded-lg p-8 gap-4">
			<InputForm
				inputType="text"
				inputName="username"
				translationFunc={loginMessages("username")}
			></InputForm>
			<InputForm
				inputType="password"
				inputName="password"
				translationFunc={loginMessages("password")}
			></InputForm>
			<button className="bg-slate-500 text-white rounded-sm py-2">
				{loginMessages("loginButton")}
			</button>
		</form>
	);
};

export default LoginForm;
