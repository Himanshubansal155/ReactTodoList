import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { LS_INBOX } from "../actions/action.constants";
import { todoFetchAction } from "../actions/todoList.actions";
import TodoComponent from "../components/Todo.component";
import {
  todoListDataSelector,
  todoListDoneSelector,
} from "../selectors/todoList.selectors";
import { useAppSelector } from "../store";

interface Props {}

const Done: FC<Props> = () => {
  const done = useAppSelector(todoListDoneSelector);
  const data1 = useAppSelector(todoListDataSelector);
  useEffect(() => {
    const data = localStorage.getItem(LS_INBOX);
    data && dispatch(todoFetchAction(JSON.parse(data)));
  }, []); //eslint-disable-line
  const dispatch = useDispatch();

  return (
    <div className="overflow-y-scroll absolute bottom-0 top-10 right-0 left-0 scrollbar mt-1.5">
      {done &&
        done.map((element) => (
          <TodoComponent data={data1[element]} id={element} key={element} />
        ))}
      <div className="h-10"></div>
    </div>
  );
};

Done.defaultProps = {};

export default memo(Done);
