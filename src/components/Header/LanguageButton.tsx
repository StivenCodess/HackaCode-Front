"use client";

import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

interface Props {
	locale: string;
}

const LanguageButton: React.FC<Props> = ({ locale }) => {
	const pathname = usePathname();
	return (
		<div className="flex w-9 h-8 bg-white rounded-lg gap-3 items-center justify-center transition-all hover:bg-[#88a1fb]">
			<Link
				href={pathname}
				locale={locale === "es" ? "en" : "es"}
				className="text-black font-semibold"
			>
				{(locale === "es" ? "en" : "es").toUpperCase()}
			</Link>
		</div>
	);
};

export default LanguageButton;
