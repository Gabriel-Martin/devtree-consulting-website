import BuildProcessSteps from "./BuildProcessSteps";
import BuildProcessHeader from "./BuildProcessHeader";

import React, { Component } from "react";

class BuildProcess extends Component {
  render() {
    return (
      <div>
        <BuildProcessHeader />
        <BuildProcessSteps />
      </div>
    );
  }
}

export default BuildProcess;
