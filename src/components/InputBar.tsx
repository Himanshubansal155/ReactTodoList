import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { todoQueryChangeAction } from "../actions/todoList.actions";

interface Props {}

const InputBar: FC<Props> = () => {
  const dispatch = useDispatch();
  return (
    <div className="border-b border-gray-800">
      <input
        placeholder="Search Title Here..."
        className="w-full shadow-2xl bg-transparent tracking-wider focus:outline-none p-3 placeholder-gray-300 text-sm text-green-600"
        onChange={(e) => {
          dispatch(todoQueryChangeAction(e.target.value));
          
        }}
      />
    </div>
  );
};

InputBar.defaultProps = {};

export default memo(InputBar);
