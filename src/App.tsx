import { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home.page";

function App() {
  return (
    <Suspense fallback={<div className="text-red-600">Loading....</div>}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/inbox" />
          </Route>
          <Route path={["/inbox", "/done", "/important", "/trash"]} exact>
            <HomePage />
          </Route>
          <Route>
            <h1>No Page Found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
