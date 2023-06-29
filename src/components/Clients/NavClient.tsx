import Option from "./Option";

import {
  faPenToSquare,
  faList,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

interface Props {
  handleCLick: (componentName: string) => void;
  status: string;
}

const NavClient = ({ handleCLick, status }: Props) => {
  return (
    <nav className="w-[30%] ">
      <ul className="flex flex-col items-center font-light justify-center ">
        <Option
          handleClick={handleCLick}
          message={"Register client"}
          optionName={"register"}
          status={status}
          icon={faPlus}
        />
        <Option
          handleClick={handleCLick}
          message={"View clients"}
          optionName={"list"}
          status={status}
          icon={faList}
        />
        <Option
          handleClick={handleCLick}
          message={"Edit client"}
          optionName={"edit"}
          status={status}
          icon={faPenToSquare}
        />
      </ul>
    </nav>
  );
};

export default NavClient;
