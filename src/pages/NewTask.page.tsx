import { Transition, Dialog } from "@headlessui/react";
import { FC, Fragment, memo, useState } from "react";
import { FiEdit3, FiFileText, FiX } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { months } from "../actions/action.constants";
import { todoChangeAction, todoEditAction } from "../actions/todoList.actions";

interface Props {
  isOpen: boolean;
  onClose: (open: false) => void;
  title?: string;
  description?: string;
  important?: boolean;
  id?: number;
}

const NewTask: FC<Props> = ({ isOpen, onClose, title, description, id, important }) => {
  const [titleState, setTitleState] = useState(title);
  const [descriptionState, setDescriptionState] = useState(description);
  const dispatch = useDispatch();
  const handleClick = () => {
    if (titleState === title && descriptionState === description) {
      console.log("both same");
    } else {
      const date = new Date();
      if (titleState === undefined) {
        setTitleState("");
      }
      if (descriptionState === undefined) {
        setDescriptionState("");
      }
      if (id === undefined) {
        dispatch(
          todoChangeAction([
            titleState!,
            `${
              months[date.getMonth()]
            }, ${date.getDate()} ${date.getFullYear()}`,
            descriptionState!,
            false,
            false,
            false,
          ])
        );
      } else {
        dispatch(
          todoEditAction([
            titleState!,
            `${
              months[date.getMonth()]
            }, ${date.getDate()} ${date.getFullYear()}`,
            descriptionState!,
            false,
            important!,
            false,
          ], id)
        );
      }
      onClose(false);
    }
  };
  return (
    <div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={onClose}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-white bg-opacity-20" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-4 md:mt-24 mt-16 overflow-hidden text-left align-middle transition-all transform bg-gray-900 shadow-xl rounded-md">
                <FiX
                  className="absolute text-green-700 bg-gray-700 top-0 right-0 shadow-lg cursor-pointer"
                  onClick={() => onClose(false)}
                />
                <Dialog.Title
                  as="h1"
                  className="text-lg font-medium leading-6 text-gray-200 tracking-wider text-center"
                >
                  Add Task
                </Dialog.Title>
                <div className="mt-5">
                  <FiEdit3 className="text-green-700 text-2xl inline-block mx-5" />
                  <input
                    type="text"
                    placeholder="Task"
                    name="title"
                    id="title"
                    autoComplete="off"
                    value={titleState}
                    onChange={(e) => setTitleState(e.target.value)}
                    className="w-80 bg-transparent tracking-wider border-2 border-gray-700 rounded-md focus:outline-none p-3 placeholder-gray-300 text-sm text-green-600"
                  />
                </div>
                <div className="mt-5">
                  <FiFileText className="text-green-700 text-2xl inline-block mx-5 align-top" />
                  <textarea
                    placeholder="Compose an Epic..."
                    name="description"
                    id="description"
                    autoComplete="off"
                    rows={8}
                    value={descriptionState}
                    onChange={(e) => setDescriptionState(e.target.value)}
                    className="resize-none italic w-80 bg-transparent tracking-wider border-2 border-gray-700 rounded-md focus:outline-none p-3 placeholder-gray-300 text-gray-300 text-xs "
                  />
                </div>
                <div className="mt-5 flex justify-end space-x-3 mx-7">
                  <button
                    className="p-2 px-4 bg-gray-800 text-gray-300 rounded-md text-sm"
                    onClick={() => onClose(false)}
                  >
                    Discard
                  </button>
                  <button
                    className="p-2 px-4 bg-blue-700 text-gray-300 rounded-md text-sm"
                    onClick={handleClick}
                  >
                    Add Task
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

NewTask.defaultProps = {};

export default memo(NewTask);
