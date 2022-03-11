import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CssBaseline } from "@material-ui/core";
import Login from "../components/login";
import Register from "../components/register";
import DashboardChat from "../components/dashboard/dashboardChat";

function Routes() {
  return (
    <div>
      <BrowserRouter>
        <CssBaseline />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/conversacion" component={DashboardChat} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default Routes;
