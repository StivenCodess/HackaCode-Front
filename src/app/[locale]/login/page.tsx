import { useTranslations } from "next-intl";
import LoginForm from "@/components/Login/LoginForm";
interface Props {}

const Login: React.FC<Props> = () => {
	const loginMessages = useTranslations("Login");
	return (
		<main className="flex min-h-screen flex-col justify-center">
			<LoginForm loginMessages={loginMessages}></LoginForm>
		</main>
	);
};

export default Login;
