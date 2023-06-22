import Image from "next/image";
import unknonwImage from "@/../public/unknown-user.png";
interface Props {}

const ProfileCard: React.FC<Props> = () => {
	return (
		<section className="bg-white rounded p-7 dark:bg-gray-700 transition-all duration-1000">
			<Image src={unknonwImage} alt="Unknown User" className="w-28 h-28 mb-4" />
			<div className="flex gap-2">
				<h3>Name:</h3>
				<span>Jhoe</span>
			</div>
			<div className="flex gap-2">
				<h3>Role:</h3>
				<span>Admin</span>
			</div>
			<div className="flex gap-2">
				<h3>DNI:</h3>
				<span>44.845.695</span>
			</div>
		</section>
	);
};

export default ProfileCard;
