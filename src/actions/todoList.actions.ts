import { todoListtype } from "../TodoListModel";
import {
  TODOLIST_DONE,
  TODOLIST_EDIT,
  TODOLIST_FETCH,
  TODOLIST_IMPORTANT,
  TODOLIST_TRASH,
  TODOLIST_UPDATE,
} from "./action.constants";

export const todoChangeAction = (data: todoListtype) => ({
  type: TODOLIST_UPDATE,
  payload: data,
});

export const todoEditAction = (data: todoListtype, id:number) => ({
  type: TODOLIST_EDIT,
  payload: {data, id},
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

export const todoTrashAction = (id:number) => ({
  type: TODOLIST_TRASH,
  payload: id
});
