import {
  Hero,
  Footer,
  OurTeam,
  BuildProcess,
  ScrollRestoration,
  CompanyDescription
} from "../components";

import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <ScrollRestoration />
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
