import React from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface Props {
  inputType: string;
  inputID: string;
  message: string;
  registerFunction: UseFormRegister<FieldValues>;
}

const InputForm: React.FC<Props> = ({
  inputType,
  inputID,
  message,
  registerFunction,
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={inputID} className="text-slate-950">
        {message}
      </label>
      <input
        type={inputType}
        id={inputID}
        className="bg-slate-200 rounded-sm p-2 text-black"
        {...registerFunction(inputID, { required: true })}
      />
    </div>
  );
};

export default InputForm;
