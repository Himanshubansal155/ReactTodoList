import { Transition } from "@headlessui/react";
import { FC, Fragment, memo, useState } from "react";
import {
  FiClipboard,
  FiList,
  FiStar,
  FiThumbsUp,
  FiTrash2,
} from "react-icons/fi";
import { useHistory, useLocation } from "react-router-dom";
import NewTaskPage from "../pages/NewTask.page";
import { sidebarSelector } from "../selectors/sidebar.selectors";
import {
  todoDataDoneLengthSelector,
  todoDataImportantLengthSelector,
  todoDataLengthSelector,
} from "../selectors/todoList.selectors";
import { useAppSelector } from "../store";
import SidebarComponent from "./SidebarComponent";

interface Props {}

const Sidebar: FC<Props> = () => {
  let [isOpen, setIsOpen] = useState(false);
  const history = useHistory();
  const toggle = useAppSelector(sidebarSelector);
  const location = useLocation().pathname;
  const length = useAppSelector(todoDataLengthSelector);
  const doneLength = useAppSelector(todoDataDoneLengthSelector);
  const importantLength = useAppSelector(todoDataImportantLengthSelector);

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
            active={location === "/inbox" ? true : false}
            Icon={FiList}
            title="inbox"
            batchNumber={length ? length : 0}
            onClick={() => history.push("/inbox")}
          />
          <SidebarComponent
            active={location === "/done" ? true : false}
            Icon={FiThumbsUp}
            title="done"
            batchNumber={doneLength ? doneLength : 0}
            type="secondary"
            onClick={() => history.push("/done")}
          />
          <SidebarComponent
            active={location === "/important" ? true : false}
            Icon={FiStar}
            title="important"
            batchNumber={importantLength ? importantLength : 0}
            type="tertiary"
            onClick={() => history.push("/important")}
          />
          <SidebarComponent
            active={location === "/trash" ? true : false}
            Icon={FiTrash2}
            title="trash"
            onClick={() => history.push("/trash")}
          />
        </div>
        <button
          className="absolute bottom-8 p-2 px-4 bg-green-600 text-gray-800 left-16 rounded-md tracking-wider transform ease-linear duration-500 hover:-translate-y-2"
          onClick={() => setIsOpen(true)}
        >
          + New Task
        </button>
        <NewTaskPage
          isOpen={isOpen}
          onClose={setIsOpen}
          title=""
          description=""
          important={false}
        />
      </div>
    </Transition>
  );
};

Sidebar.defaultProps = {};

export default memo(Sidebar);
