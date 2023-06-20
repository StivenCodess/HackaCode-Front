import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useLocale } from "next-intl";
import { LayoutProps } from "@/interfaces/Layout";
import { notFound } from "next/navigation";

import Header from "@/components/Header/Header";
import Providers from "./providers";
config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "HackaCode - Theme Park",
	description:
		"A website developed for the HackaCode tournament.\
  		It consists in managing a park of dirversions, sales, employees, clients, etc. ",
};

export default function RootLayout({ children, params }: LayoutProps) {
	const locale = useLocale();

	if (params.locale !== locale) {
		notFound();
	}

	return (
		<html lang={locale}>
			<body className=" bg-gradient-to-b from-[#f4ccff] to-[#88a1fb] dark:from-[#424ea2] dark:to-[#7540b2] overflow-hidden">
				<Providers>
					<Header locale={locale}></Header>
					{children}
				</Providers>
			</body>
		</html>
	);
}
