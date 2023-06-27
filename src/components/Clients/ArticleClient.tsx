"use client";

import { useEffect, useState } from "react";

import FormClient from "./FormClient";
import ListClient from "./ListClient";
import EditClient from "./EditClient";
import NavClient from "./NavClient";

interface Props {}

const ArticleClient: React.FC<Props> = ({ clientMessages }) => {
	const [status, setStatus] = useState("register");
	const renders = {
		register: <FormClient clientMessages={clientMessages} />,
		list: <ListClient />,
		edit: <EditClient />,
	};
	useEffect(() => {
		localStorage.setItem("option", JSON.stringify(status));
		const option = localStorage.getItem("option");
		console.log(typeof option);
	});

	const handleCLick = (componentName) => {
		setStatus(componentName);
		localStorage.setItem("option", JSON.stringify(status));
	};

	return (
		<article className="rounded-xl text-black divide-x-2 dark:divide-gray-800 flex w-[70%] h-[60%] shadow-lg bg-white dark:bg-gray-700 overflow-hidden">
			<NavClient handleCLick={handleCLick} status={status} />
			<section className="flex justify-center items-center p-10 w-full h-full">
				{renders[status]}
			</section>
		</article>
	);
};

export default ArticleClient;
