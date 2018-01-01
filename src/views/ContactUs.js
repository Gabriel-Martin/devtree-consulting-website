import React, { Component, Fragment } from "react";

import {
  ContactUsComponent,
  ScrollRestoration,
  Footer,
  Navbar
} from "../components";

class ContactUs extends Component {
  render() {
    return (
      <Fragment>
        <ScrollRestoration />
        <Navbar />
        <ContactUsComponent />
        <Footer />
      </Fragment>
    );
  }
}

export default ContactUs;
