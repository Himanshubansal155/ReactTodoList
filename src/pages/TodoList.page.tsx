import { FC, memo } from "react";
import { Switch, Route } from "react-router-dom";
import DashboardComponent from "../components/Dashboard.component";
import Sidebar from "../components/Sidebar";
import DonePage from "./Done.page";
import ImportantPage from "./Important.page";
import InboxPage from "./Inbox.page";
import TrashPage from "./Trash.page";

interface Props {}

const TodoList: FC<Props> = () => {
  return (
    <div className="bg-gray-900 rounded-md fixed top-20 bottom-3 right-3 left-3">
      <Sidebar />
      <DashboardComponent>
        <Switch>
          <Route path="/inbox">
            <InboxPage />
          </Route>
          <Route path="/done">
            <DonePage />
          </Route>
          <Route path="/important">
            <ImportantPage />
          </Route>
          <Route path="/trash">
            <TrashPage />
          </Route>
        </Switch>
      </DashboardComponent>
    </div>
  );
};

TodoList.defaultProps = {};

export default memo(TodoList);
