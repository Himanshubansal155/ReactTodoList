import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";
import DashboardComponent from "../components/Dashboard.component";
import Sidebar from "../components/Sidebar";

interface Props {}

const TodoList: FC<Props> = () => {
  return (
    <div className="bg-gray-900 rounded-md fixed top-20 bottom-3 right-3 left-3">
      <Sidebar />
      <DashboardComponent>
        <Switch>
          <Route path="/inbox">Inbox Page</Route>
          <Route path="/done">
            <h1> Done page</h1>
          </Route>
          <Route path="/important">
            <h1> Important page</h1>
          </Route>
          <Route path="/trash">
            <h1> Trash page</h1>
          </Route>
        </Switch>
      </DashboardComponent>
    </div>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);
