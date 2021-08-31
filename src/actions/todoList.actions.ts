import { todoListtype } from "../TodoListModel";
import {
  TODOLIST_DONE,
  TODOLIST_FETCH,
  TODOLIST_IMPORTANT,
  TODOLIST_TRASH,
  TODOLIST_UPDATE,
} from "./action.constants";

export const todoChangeAction = (data: todoListtype) => ({
  type: TODOLIST_UPDATE,
  payload: data,
});
export const todoFetchAction = (data: todoListtype[]) => ({
  type: TODOLIST_FETCH,
  payload: data,
});

export const todoDoneAction = (id:number) => ({
  type: TODOLIST_DONE,
  payload: id
});
export const todoImportantAction = (id: number) => ({
  type: TODOLIST_IMPORTANT,
  payload: id
});
export const todoTrashAction = () => ({
  type: TODOLIST_TRASH,
});
