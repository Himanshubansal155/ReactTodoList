import { Transition } from "@headlessui/react";
import { FC, Fragment, memo } from "react";
import {
  FiClipboard,
  FiList,
  FiStar,
  FiThumbsUp,
  FiTrash2,
} from "react-icons/fi";
import { useHistory } from "react-router-dom";
import { sidebarSelector } from "../selectors/sidebar.selectors";
import { useAppSelector } from "../store";
import SidebarComponent from "./SidebarComponent";

interface Props {}

const Sidebar: FC<Props> = () => {
  const history = useHistory();
  const toggle = useAppSelector(sidebarSelector);
  return (
    <Transition
      show={toggle.isSidebarOpen}
      as={Fragment}
      enter="transform transition ease-linear duration-1000"
      enterFrom="-translate-x-full"
      enterTo="translate-x-0"
      leave="transform transition ease-linear duration-1000"
      leaveFrom="translate-x-0"
      leaveTo="-translate-x-full"
    >
      <div className="w-60 border-r border-gray-800 bg-gray-900 fixed bottom-3 top-20 z-20 rounded-l-md">
        <div className="text-center p-5">
          <FiClipboard className="text-2xl mx-auto fill-green text-gray-900" />
          <h1 className="text-lg tracking-widest text-gray-400 font-semibold p-1">
            Todo List
          </h1>
        </div>
        <div className="pr-4 flex flex-col space-y-2">
          <SidebarComponent
            active={true}
            Icon={FiList}
            title="inbox"
            batchNumber={2}
            onClick={() => history.push("/inbox")}
          />
          <SidebarComponent
            active={false}
            Icon={FiThumbsUp}
            title="done"
            batchNumber={2}
            type="secondary"
            onClick={() => history.push("/done")}
          />
          <SidebarComponent
            active={false}
            Icon={FiStar}
            title="important"
            batchNumber={2}
            type="tertiary"
            onClick={() => history.push("/important")}
          />
          <SidebarComponent
            active={false}
            Icon={FiTrash2}
            title="trash"
            onClick={() => history.push("/trash")}
          />
        </div>
        <button
          className="absolute bottom-8 p-2 px-4 bg-green-600 text-gray-800 left-16 rounded-md tracking-wider transform ease-linear duration-500 hover:-translate-y-2"
          onClick={() => console.log("clicked")}
        >
          + New Task
        </button>
      </div>
    </Transition>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
