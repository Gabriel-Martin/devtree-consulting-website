import ContactUsHeader from "./ContactUsHeader";
import ContactForm from "./ContactForm";

import React, { Component } from "react";

class ContactUsComponent extends Component {
  render() {
    return (
      <div>
        <ContactUsHeader />
        <ContactForm />
      </div>
    );
  }
}

export default ContactUsComponent;
