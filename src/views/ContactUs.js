import { ContactUsComponent, Footer, Navbar } from "../components";

import React, { Component } from "react";

class ContactUs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ContactUsComponent />
        <Footer />
      </div>
    );
  }
}

export default ContactUs;
