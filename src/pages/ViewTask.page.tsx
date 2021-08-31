import { Transition, Dialog } from "@headlessui/react";
import { FC, Fragment, memo } from "react";
import { FiEdit3, FiFileText } from "react-icons/fi";

interface Props {
  isOpen: boolean;
  onClose: (open: false) => void;
  title: string;
  description: string;
}

const ViewTask: FC<Props> = ({ isOpen, onClose, title, description }) => {
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
                <div className="mt-5">
                  <FiEdit3 className="text-green-700 text-2xl inline-block mx-5" />
                  <input
                    type="text"
                    placeholder="Your Title Here..."
                    name="title"
                    id="title"
                    autoComplete="off"
                    value={title}
                    disabled
                    className="w-80 bg-transparent tracking-wider border-2 border-gray-700 rounded-md focus:outline-none p-3 placeholder-gray-300 text-sm text-green-600"
                  />
                </div>
                <div className="mt-5">
                  <FiFileText className="text-green-700 text-2xl inline-block mx-5 align-top" />
                  <textarea
                    placeholder="Composed Epic Here..."
                    name="description"
                    id="description"
                    autoComplete="off"
                    value={description}
                    disabled
                    rows={5}
                    className="italic w-80 bg-transparent tracking-wider border-2 border-gray-700 rounded-md focus:outline-none p-3 placeholder-gray-300 text-gray-300 text-xs "
                  />
                </div>
                <div className="mt-5 flex justify-end mx-7">
                  <button
                    className="p-2 px-4 bg-gray-800 text-gray-300 rounded-md text-sm"
                    onClick={() => onClose(false)}
                  >
                    Close
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

ViewTask.defaultProps = {};

export default memo(ViewTask);
