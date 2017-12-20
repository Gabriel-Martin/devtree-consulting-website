import Name from "./Name";
import Summary from "./Summary";
import FormSteps from "./FormSteps";
import GeneralInfo from "./GeneralInfo";

import React, { Component } from "react";

class ContactForm extends Component {
  render() {
    return (
      <div>
        <FormSteps />
        <Name />
        <GeneralInfo />
        <Summary />
      </div>
    );
  }
}

export default ContactForm;
