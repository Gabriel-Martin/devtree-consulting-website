import OurWorkHeader from "./OurWorkHeader";
import PortfolioCard from "./PortfolioCard";

import React, { Component } from "react";

class PortfolioComponent extends Component {
  render() {
    return (
      <div>
        <OurWorkHeader />
        <PortfolioCard />
      </div>
    );
  }
}

export default PortfolioComponent;
