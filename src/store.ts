import { TypedUseSelectorHook, useSelector } from "react-redux";
import { combineReducers, createStore } from "redux";
import { sidebarReducer } from "./reducers/sidebar.reducer";
import { todoListReducer } from "./reducers/todoList.reducers";

const reducer = combineReducers({
  sidebar: sidebarReducer,
  todoList: todoListReducer,
});

export const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

export type AppState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
