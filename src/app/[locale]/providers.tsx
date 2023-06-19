"use client";
import { ThemeProvider } from "next-themes";
import { useState, useEffect, ReactNode } from "react";
interface Props {
	children: ReactNode;
}

const Providers: React.FC<Props> = ({ children }) => {
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return <ThemeProvider attribute="class">{children}</ThemeProvider>;
};

export default Providers;
