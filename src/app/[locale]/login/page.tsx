import { useTranslations } from "next-intl";
interface Props {}

const Login: React.FC<Props> = () => {
  const loginMessages = useTranslations("Login");
  return (
    <main className="flex min-h-screen flex-col justify-center">
      <form
        action=""
        className="bg-white mx-auto flex flex-col rounded-lg p-8 gap-4"
      >
        <div className="flex flex-col">
          <label htmlFor="username" className="text-slate-950">
            {loginMessages("username")}
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="bg-slate-200 rounded-sm p-2 text-black"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="password" className="text-slate-950">
            {loginMessages("password")}
          </label>
          <input
            type="text"
            name="password"
            id="password"
            className="bg-slate-200 rounded-sm p-2 text-black"
          />
        </div>
        <button className="bg-slate-500 text-white rounded-sm py-2">
          {loginMessages("loginButton")}
        </button>
      </form>
    </main>
  );
};

export default Login;
