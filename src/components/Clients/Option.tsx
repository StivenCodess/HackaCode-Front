import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  message: string;
  optionName: string;
  handleClick: (componentName: string) => void;
  status: string;
  icon: IconDefinition;
}
const Option = ({ message, optionName, handleClick, status, icon }: Props) => {
  const classnames =
    "w-full flex justify-center items-center text-black hover:bg-[#88a1fb]/20 dark:text-white hover:text-black transition-all relative ";

  return (
    <li
      className={
        status === optionName
          ? classnames + " bg-[#88a1fb]/20 dark:bg-white dark:text-black"
          : classnames
      }
    >
      <FontAwesomeIcon icon={icon} className="absolute left-5 mr-1 mb-[3px]" />
      <button
        className="p-7 w-full h-full"
        onClick={() => {
          handleClick(optionName);
        }}
      >
        {message}
      </button>
    </li>
  );
};

export default Option;
