import { createSelector } from "reselect";
import { AppState } from "../store";

export const todoListStateSelector = (state: AppState) => state.todoList;

export const todoListDataSelector = createSelector(
  [todoListStateSelector],
  (state) => state.data
);
export const todoListInboxSelector = createSelector(
  [todoListStateSelector],
  (state) => state.isInbox
);
export const todoListDoneSelector = createSelector(
  [todoListStateSelector],
  (state) => state.isDone
);
export const todoListImportantSelector = createSelector(
  [todoListStateSelector],
  (state) => state.isImportant
);
export const todoListTrashSelector = createSelector(
  [todoListStateSelector],
  (state) => state.isTrash
);

export const todoDataLengthSelector = createSelector(
  [todoListDataSelector],
  (state) => state?.length
);
export const todoDataDoneLengthSelector = createSelector(
  [todoListDoneSelector],
  (state) => state?.length
);
export const todoDataImportantLengthSelector = createSelector(
  [todoListImportantSelector],
  (state) => state?.length
);
