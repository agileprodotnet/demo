import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "./user/Login";
import HomePage from "./pages/HomePage";
import Register from './user/Register'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route
          render={function () {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
    );
  }
}

export default Routes;
