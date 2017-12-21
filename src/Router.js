import React, { Component } from "react";

import { BrowserRouter, Route } from "react-router-dom";

import { Home, Portfolio, ContactUs } from "./views";

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path={"/"} component={Home} />
          <Route exact path={"/portfolio"} component={Portfolio} />
          <Route exact path={"/contact-us"} component={ContactUs} />
        </div>
      </BrowserRouter>
    );
  }
}

export default Router;
