import {
  Footer,
  Navbar,
  ScrollRestoration,
  PortfolioComponent
} from "../components";

import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <ScrollRestoration />
        <Navbar />
        <PortfolioComponent />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
