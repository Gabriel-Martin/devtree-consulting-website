import OurWorkHeader from "./OurWorkHeader";
import PortfolioCard from "./PortfolioCard";

import React, { Component, Fragment } from "react";

class PortfolioComponent extends Component {
  render() {
    return (
      <Fragment>
        <OurWorkHeader />
        <PortfolioCard />
      </Fragment>
    );
  }
}

export default PortfolioComponent;
