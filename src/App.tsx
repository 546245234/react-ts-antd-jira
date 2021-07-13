import React from "react";
import Layout from "./Layout";
import NotFound from "./pages/404";
import login from "./pages/login";
import {
  HashRouter as Router,
  Route,
  Switch,
  Redirect} from "react-router-dom";
import "./App.less";

const App = () => (
  <Router>
    <Switch>
      <Route
        exact
        path="/"
        render={() => <Redirect to="/app/dashboard/index" />}
      />
      <Route path="/app" component={Layout} />
      <Route path="/404" component={NotFound} />
      <Route path="/login" component={login} />
    </Switch>
  </Router>
);

export default App;
