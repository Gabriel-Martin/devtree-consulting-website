import React, { Component, Fragment } from "react";

import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { Home, Portfolio, ContactUs } from "./views";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/portfolio"} component={Portfolio} />
            <Route exact path={"/contact-us"} component={ContactUs} />
            <Redirect to={"/"} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default Router;
