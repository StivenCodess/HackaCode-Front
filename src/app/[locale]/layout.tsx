import "./globals.css";
import { Inter } from "next/font/google";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { LayoutProps } from "@/interfaces/Layout";

import Header from "@/components/Header/Header";

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
				<Header locale={locale}></Header>
				{children}
			</body>
		</html>
	);
}
