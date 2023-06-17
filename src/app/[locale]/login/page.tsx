import { useTranslations } from "next-intl";
import LoginForm from "@/components/Login/LoginForm";
import CloudWrap from "@/components/Login/CloudWrap";

interface Props {}

const Login: React.FC<Props> = () => {
	const loginMessages = useTranslations("Login");
	return (
		<main className="flex min-h-screen flex-col justify-center overflow-hidden">
			<CloudWrap></CloudWrap>
			<LoginForm
				usernameMessage={loginMessages("username")}
				passwordMessage={loginMessages("password")}
				buttonMessage={loginMessages("loginButton")}
			></LoginForm>
		</main>
	);
};

export default Login;
