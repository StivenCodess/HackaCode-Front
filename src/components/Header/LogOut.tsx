"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { useRouter, usePathname } from "next-intl/client";
import { MouseEventHandler, useEffect, useState } from "react";

interface Props {}

const LogButton = ({ handleClick }) => {
	return (
		<div className="group flex w-9 h-8  rounded-lg transition-all duration-700 hover:bg-white">
			<button onClick={handleClick} className=" w-full ">
				<FontAwesomeIcon
					icon={faRightFromBracket}
					className="w-4 group-hover:text-black dark:text-white"
				/>
			</button>
		</div>
	);
};

const LogOut: React.FC<Props> = () => {
	const [show, setShow] = useState(false);
	const router = useRouter();
	const pathname = usePathname();

	useEffect(() => {
		if (pathname === "/login") setShow(false);
		else setShow(true);
	});

	const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
		router.push("/login");
	};

	return <>{show ? <LogButton handleClick={handleClick} /> : null}</>;
};

export default LogOut;
