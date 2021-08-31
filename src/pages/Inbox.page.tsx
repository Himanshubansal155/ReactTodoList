import { FC, memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { LS_INBOX } from "../actions/action.constants";
import { todoFetchAction } from "../actions/todoList.actions";
import TodoComponent from "../components/Todo.component";
import {
  todoListDataSelector,
  todoListInboxSelector,
} from "../selectors/todoList.selectors";
import { useAppSelector } from "../store";

interface Props {}

const Inbox: FC<Props> = () => {
  const data1 = useAppSelector(todoListDataSelector);
  const inbox = useAppSelector(todoListInboxSelector);
  useEffect(() => {
    const data = localStorage.getItem(LS_INBOX);
    if (data !== null) {
      dispatch(todoFetchAction(JSON.parse(data!)));
    }
  }, []); //eslint-disable-line
  const dispatch = useDispatch();

  return (
    <div className="overflow-y-scroll absolute bottom-0 top-10 right-0 left-0">
      {inbox &&
        inbox.map((element, index) => (
          <TodoComponent data={data1[element]} id={index} key={index} />
        ))}
      <div className="h-10"></div>
    </div>
  );
};

Inbox.defaultProps = {};

export default memo(Inbox);
