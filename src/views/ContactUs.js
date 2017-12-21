import {
  ContactUsComponent,
  Footer,
  Navbar,
  ScrollRestoration
} from "../components";

import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <ScrollRestoration />
        <Navbar />
        <ContactUsComponent />
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
