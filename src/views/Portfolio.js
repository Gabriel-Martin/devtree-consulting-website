import { PortfolioComponent, Footer, Navbar } from "../components";

import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <PortfolioComponent />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
