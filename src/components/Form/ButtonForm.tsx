interface Props {
	buttonMessage: string;
}

const ButtonForm: React.FC<Props> = ({ buttonMessage }) => {
	return (
		<button
			type="submit"
			className="bg-slate-500 text-white rounded-sm py-2 w-full transition-all
				hover:bg-[#88a1fb] hover:text-black hover:scale-[1.03] duration-500"
		>
			{buttonMessage}
		</button>
	);
};

export default ButtonForm;
