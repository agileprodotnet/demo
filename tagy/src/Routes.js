import React from "react";
import { Route, Switch } from "react-router-dom";

import ComponentsNavPage from "./pages/ComponentsNavPage";
import Login from "./user/Login";
import HomePage from "./pages/HomePage";
import Register from './user/Register'

class Routes extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/components" component={ComponentsNavPage} />
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
