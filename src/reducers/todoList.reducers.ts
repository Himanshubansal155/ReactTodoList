import { Reducer } from "redux";
import {
  LS_INBOX,
  TODOLIST_DONE,
  TODOLIST_EDIT,
  TODOLIST_FETCH,
  TODOLIST_IMPORTANT,
  TODOLIST_TRASH,
  TODOLIST_UPDATE,
} from "../actions/action.constants";
import { dataChangeArr, dataValueChange } from "../model/Entity";
import { todoListtype } from "../TodoListModel";

export interface TodoListState {
  data: todoListtype[];
  isInbox: number[];
  isDone: number[];
  isImportant: number[];
  isTrash: number[];
}

const initialState = {
  data: [],
  isInbox: [],
  isDone: [],
  isImportant: [],
  isTrash: [],
};

export const todoListReducer: Reducer<TodoListState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case TODOLIST_FETCH: {
      const dataArr = action.payload as todoListtype[];
      const inboxArr = dataChangeArr(dataArr);
      const doneArr = dataChangeArr(dataArr, 3);
      const importantArr = dataChangeArr(dataArr, 4);
      const trashArr = dataChangeArr(dataArr, 5);

      return {
        ...state,
        data: dataArr,
        isInbox: inboxArr,
        isDone: doneArr,
        isImportant: importantArr,
        isTrash: trashArr,
      };
    }
    case TODOLIST_UPDATE:
      const newState = { ...state, data: [...state.data, action.payload] };
      localStorage.setItem(LS_INBOX, JSON.stringify(newState.data));
      return { ...newState, isInbox: dataChangeArr(newState.data) };
    case TODOLIST_EDIT: {
      const { data, id } = action.payload;
      const newArr = JSON.parse(JSON.stringify(state.data));
      newArr[id] = data;
      localStorage.setItem(LS_INBOX, JSON.stringify(newArr));
      return { ...state, data: newArr };
    }
    case TODOLIST_DONE:
      const dataAtt = dataValueChange(action.payload, 3, state.data);
      return { ...state, data: dataAtt, isDone: dataChangeArr(dataAtt, 3) };
    case TODOLIST_IMPORTANT: {
      const dataAtt = dataValueChange(action.payload, 4, state.data);
      return {
        ...state,
        data: dataAtt,
        isImportant: dataChangeArr(dataAtt, 4),
      };
    }
    case TODOLIST_TRASH:
      const id = action.payload as number;
      const newStateArr = {
        ...state,
        data: dataValueChange(id, 5, state.data),
        isTrash: [...state.isTrash, id],
      };
      newStateArr.isInbox.splice(newStateArr.isInbox.indexOf(id), 1);
      localStorage.setItem(LS_INBOX, JSON.stringify(newStateArr.data));
      return newStateArr;
    default:
      return state;
  }
};
