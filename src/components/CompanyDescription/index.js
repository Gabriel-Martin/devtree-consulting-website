import Languages from "./Languages";
import Services from "./Services";
import WhoWeAre from "./WhoWeAre";

import React, { Component } from "react";

class CompanyDescription extends Component {
  render() {
    return (
      <div>
        <WhoWeAre />
        <Services />
        <Languages />
      </div>
    );
  }
}

export default CompanyDescription;
