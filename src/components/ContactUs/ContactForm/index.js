import { Form } from "semantic-ui-react";
import React, { Component } from "react";

class ContactForm extends Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    return (
      <div>
        <Form
          style={{ width: "500px", padding: "5px" }}
          onSubmit={this.formSubmit}
        >
          <Form.Input onChange={this.inputChange} placeholder="Name" />
          <Form.Input onChange={this.inputChange} placeholder="Company Name" />
          <Form.Input onChange={this.inputChange} placeholder="***-***-****" />
          <Form.Input onChange={this.inputChange} placeholder="Email" />
          <Form.TextArea
            onChange={this.inputChange}
            placeholder="What can we do for you?"
          />
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    );
  }
}

export default ContactForm;
