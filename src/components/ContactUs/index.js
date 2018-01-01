import ContactForm from "./ContactForm";
import ContactUsHeader from "./ContactUsHeader";

import glamorous from "glamorous";

import React, { Component } from "react";

class ContactUsComponent extends Component {
  render() {
    return (
      <Container>
        <ContactUsHeader />
        <ContactForm />
      </Container>
    );
  }
}

const Container = glamorous.div({
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
});

export default ContactUsComponent;
