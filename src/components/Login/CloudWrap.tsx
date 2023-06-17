import Cloud from "@/components/icons/Cloud";
import Cloud2 from "@/components/icons/Cloud2";
import Ballon from "../icons/Ballon";

interface Props {}

const CloudWrap: React.FC<Props> = () => {
	return (
		<>
			<Cloud
				className="hidden md:block absolute w-52 top-[23%] lg:top-[18%] md:left-[13%] xl:left-[30%] 2xl:left-[34%]
				opacity-30 xl:w-56 z-10 transition-all hover:scale-125 duration-500 drop-shadow-sm"
				fill="#fff"
			></Cloud>
			<Cloud
				className="hidden md:block absolute w-24 h-24 top-[37%] md:left-[72%] xl:left-[60%] 2xl:left-[60%]
				opacity-10 xl:w-56 z-10 transition-all hover:scale-125 duration-500 drop-shadow-sm"
				fill="#fff"
			></Cloud>
			<Cloud2
				className="hidden md:block absolute w-32 h-32 top-[65%] lg:top-[68%] md:left-[60%] xl:left-[52%] 2xl:left-[52%]
				opacity-30 xl:w-56 z-10 transition-all hover:scale-125 duration-500 drop-shadow-sm"
				fill="#fff"
			></Cloud2>
			<Cloud2
				className="hidden md:block absolute w-32 h-32 top-[52%] md:left-[10%] xl:left-[20%] 2xl:left-[25%]
				opacity-10 xl:w-56 z-10 transition-all hover:scale-125 duration-500 drop-shadow-sm"
				fill="#fff"
			></Cloud2>
			<Ballon className="hidden md:block absolute w-32 h-32 opacity-10 top-[13%] left-[5%] m lg:top-[15%] lg:left-[20%] hover:scale-125 transition-all duration-500"></Ballon>
			<Ballon className="hidden md:block absolute w-24 h-24 opacity-30 top-[50%] left-[75%] lg:top-[45%] lg:left-[75%] hover:scale-150 transition-all duration-500"></Ballon>
		</>
	);
};

export default CloudWrap;
