import React from "react";
interface Props {
	inputType: string;
	inputName: string;
	translationFunc: string;
}

const InputForm: React.FC<Props> = ({ inputType, inputName, translationFunc }) => {
	return (
		<div className="flex flex-col">
			<label htmlFor={inputName} className="text-slate-950">
				{translationFunc}
			</label>
			<input
				type={inputType}
				name={inputName}
				id={inputName}
				className="bg-slate-200 rounded-sm p-2 text-black"
			/>
		</div>
	);
};

export default InputForm;
