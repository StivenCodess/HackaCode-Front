"use client";

import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

interface Props {
	locale: string;
}

const LanguageButton: React.FC<Props> = ({ locale }) => {
	const pathname = usePathname();
	return (
		<div className="group flex w-9 h-8 rounded-lg gap-3 items-center justify-center transition-all duration-700 hover:bg-white">
			<Link
				href={pathname}
				locale={locale === "es" ? "en" : "es"}
				className="group-hover:text-black  dark:text-white font-medium"
			>
				{(locale === "es" ? "en" : "es").toUpperCase()}
			</Link>
		</div>
	);
};

export default LanguageButton;
