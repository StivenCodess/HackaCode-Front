import Link from "next/link";
import RollerCoaster from "@/components/icons/RollerCoaster";
import ThemeButton from "@/components/Header/ThemeButton";
import LanguageButton from "@/components/Header/LanguageButton";
import LogOut from "./LogOut";

interface Props {
	locale: string;
}

const Header: React.FC<Props> = ({ locale }) => {
	return (
		<header className="flex p-3 justify-between items-center absolute w-screen shadow-sm rounded-e-md rounded-s-md">
			<div>
				<Link
					href="/"
					className="font-medium flex gap-2 items-center px-7 text-lg text-black
								hover:scale-105 transition-all drop-shadow-lg hover:drop-shadow-xl cursor-pointer dark:text-white"
				>
					CodeCrafters
					<RollerCoaster className="w-9 h-9 mb-1 fill-black dark:fill-white" />
				</Link>
			</div>
			<ul className="flex gap-3 justify-center items-center font-light">
				<li className="hover:bg-white transition-all duration-1000 p-2 rounded hover:text-black hover:underline">
					<Link href="/client">Client</Link>
				</li>
				<li className="hover:bg-white transition-all duration-1000 p-2 rounded hover:text-black hover:underline">
					<Link href="/employee">Employee</Link>
				</li>
			</ul>
			<div className="px-7 flex gap-3">
				<LogOut />
				<ThemeButton />
				<LanguageButton locale={locale} />
			</div>
		</header>
	);
};

export default Header;
