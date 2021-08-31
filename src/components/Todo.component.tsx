import classNames from "classnames";
import { FC, memo, useState } from "react";
import { useDispatch } from "react-redux";
import {
  todoDoneAction,
  todoImportantAction,
} from "../actions/todoList.actions";
import { todoListtype } from "../TodoListModel";
import { ImCheckboxChecked, ImCheckboxUnchecked } from "react-icons/im";
import { FiAlertOctagon, FiMoreVertical } from "react-icons/fi";
import { Popover } from "@headlessui/react";

interface Props {
  data: todoListtype;
  id: number;
}

const Todo: FC<Props> = ({ data, id }) => {
  const dispatch = useDispatch();
  const [colorImportance, setColorImportance] = useState<
    "High" | "Low" | "Medium"
  >("Low");

  return (
    <div
      className="border-b border-gray-800 text-gray-300 flex p-3 justify-between tracking-wider capitalize"
      key={id}
    >
      <div className="flex">
        <div className="w-8 pt-2">
          <span
            onClick={() => {
              dispatch(todoDoneAction(id));
            }}
          >
            {data[3] ? (
              <ImCheckboxChecked className="fill-green" />
            ) : (
              <ImCheckboxUnchecked className="bg-gray-600 stroke-0" />
            )}
          </span>
        </div>
        <div className={classNames({ "line-through": data[3] })}>
          <h1 className="text-lg w-96">{data[0]}</h1>
          <h2 className="text-xs text-gray-400">{data[1]}</h2>
          <h2 className="text-sm w-96 max-h-5 overflow-hidden">{data[2]}</h2>
        </div>
      </div>
      <div className="text-xl text-gray-400 flex flex-row-reverse">
        <Popover className="relative">
          <Popover.Button>
            <FiMoreVertical />
          </Popover.Button>
          <Popover.Panel className="absolute z-10 w-40 right-0 rounded-md bg-gray-800">
            <div className="flex flex-col p-2 text-sm space-y-2">
              <span className="cursor-pointer" onClick={() => {}}>
                <Popover.Button>Edit</Popover.Button>
              </span>
              <span
                className="cursor-pointer"
                onClick={() => {
                  dispatch(todoImportantAction(id));
                }}
              >
                <Popover.Button>
                  {data[4] !== true ? "Important" : "Back To List"}
                </Popover.Button>
              </span>
              <span className="cursor-pointer" onClick={() => {}}>
                <Popover.Button>Delete</Popover.Button>
              </span>
            </div>
          </Popover.Panel>
        </Popover>
        <Popover className="relative mr-2">
          <Popover.Button>
            <FiAlertOctagon
              className={classNames({
                "text-blue-400": colorImportance === "Low",
                "text-yellow-400": colorImportance === "Medium",
                "text-red-400": colorImportance === "High",
              })}
            />
          </Popover.Button>
          <Popover.Panel className="absolute z-10 w-40 right-0 rounded-md bg-gray-800">
            <div className="flex flex-col p-2 text-sm space-y-2">
              <span onClick={() => setColorImportance("High")}>
                <Popover.Button className="cursor-pointer">
                  <FiAlertOctagon className="text-red-400 mr-2 inline-block" />{" "}
                  High
                </Popover.Button>
              </span>
              <span onClick={() => setColorImportance("Medium")}>
                <Popover.Button className="cursor-pointer">
                  <FiAlertOctagon className="text-yellow-400 mr-2 inline-block" />{" "}
                  Middle
                </Popover.Button>
              </span>
              <span onClick={() => setColorImportance("Low")}>
                <Popover.Button className="cursor-pointer">
                  <FiAlertOctagon className="text-blue-400 mr-2 inline-block" />{" "}
                  Low{" "}
                </Popover.Button>
              </span>
            </div>
          </Popover.Panel>
        </Popover>
      </div>
    </div>
  );
};

Todo.defaultProps = {};

export default memo(Todo);