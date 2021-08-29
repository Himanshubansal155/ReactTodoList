import { FC, memo } from "react";
import { FiMenu } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { SIDEBAR_TOGGLE } from "../actions/action.constants";

interface Props {}

const Navbar: FC<Props> = () => {
  const dispatch = useDispatch();
  return (
    <div className="bg-gray-800 w-full h-12 rounded-md px-5">
      <div className="flex items-center h-full">
        <FiMenu
          className="text-2xl text-gray-300"
          onClick={() => dispatch({ type: SIDEBAR_TOGGLE })}
        />
      </div>
    </div>
  );
};

Navbar.defaultProps = {};

export default memo(Navbar);
