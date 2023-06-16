import Link from "next/link";
import RollerCoaster from "@/components/icons/RollerCoaster";
import ThemeButton from "@/components/Header/ThemeButton";
import LanguageButton from "@/components/Header/LanguageButton";

interface Props {
	locale: string;
}

const InputForm: React.FC<Props> = ({ locale }) => {
	return (
		<header className="flex p-3 justify-between items-center absolute w-screen">
			<div>
				<Link
					href="/"
					className="font-bold flex gap-2 items-center px-7 text-lg text-white
								hover:scale-105 transition-all"
				>
					CodeCrafters
					<RollerCoaster className="w-9 h-9 fill-white mb-1" />
				</Link>
			</div>
			<div className="px-7 flex gap-3">
				<ThemeButton />
				<LanguageButton locale={locale} />
			</div>
		</header>
	);
};

export default InputForm;
