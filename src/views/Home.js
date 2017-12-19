import {
  Hero,
  Footer,
  OurTeam,
  BuildProcess,
  CompanyDescription
} from "../components";

import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>home</h1>
        <Hero />
        <CompanyDescription />
        <BuildProcess />
        <OurTeam />
        <Footer />
      </div>
    );
  }
}

export default Home;
