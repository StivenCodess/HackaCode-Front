import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Inter } from "next/font/google";
import { config } from "@fortawesome/fontawesome-svg-core";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { LayoutProps } from "@/interfaces/Layout";

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
			<body className={inter.className}>
				<Providers>
					<Header locale={locale}></Header>
					{children}
				</Providers>
			</body>
		</html>
	);
}
