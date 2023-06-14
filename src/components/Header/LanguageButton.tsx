"use client";

import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

interface Props {
	locale: string;
}

const LanguageButton: React.FC<Props> = ({ locale }) => {
	const pathname = usePathname();
	return (
		<div className="flex w-9 h-8 bg-white rounded-lg gap-3">
			<Link href={pathname} locale={locale === "es" ? "en" : "es"} className="text-black">
				{(locale === "es" ? "en" : "es").toUpperCase()}
			</Link>
		</div>
	);
};

export default LanguageButton;
