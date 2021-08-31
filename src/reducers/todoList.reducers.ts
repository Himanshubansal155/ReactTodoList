import { Reducer } from "redux";
import {
  LS_INBOX,
  TODOLIST_DONE,
  TODOLIST_FETCH,
  TODOLIST_IMPORTANT,
  TODOLIST_TRASH,
  TODOLIST_UPDATE,
} from "../actions/action.constants";
import { dataChangeArr } from "../model/Entity";
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
        data: action.payload,
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
    case TODOLIST_DONE:
      const id = action.payload as number;
      const dataAtt = JSON.parse(
        JSON.stringify(
          state.data.map((e, index) => {
            if (index === id) {
              e[3] = !e[3];
            }
            return e;
          })
        )
      );
      localStorage.setItem(LS_INBOX, JSON.stringify(dataAtt));

      return { ...state, data: dataAtt, isDone: dataChangeArr(dataAtt, 3) };
    case TODOLIST_IMPORTANT: {
      const id = action.payload;
      const dataAtt = JSON.parse(
        JSON.stringify(
          state.data.map((e, index) => {
            if (index === id) {
              e[4] = !e[4];
            }
            return e;
          })
        )
      );
      localStorage.setItem(LS_INBOX, JSON.stringify(dataAtt));
      return {
        ...state,
        data: dataAtt,
        isImportant: dataChangeArr(dataAtt, 4),
      };
    }
    case TODOLIST_TRASH:
      return state;
    default:
      return state;
  }
};
