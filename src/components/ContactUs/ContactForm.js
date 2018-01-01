import { Form, Button } from "semantic-ui-react";
import React, { Component, Fragment } from "react";

import { Transition } from "semantic-ui-react";
import glamorous from "glamorous";

class ContactForm extends Component {
  state = {
    form: true,
    thankYou: false,
    formInfo: {
      name: "",
      company: "",
      phone: "",
      email: "",
      message: ""
    }
  };

  changeThankYou = () => {
    this.setState(state => ({
      ...state,
      thankYou: !state.thankYou
    }));
  };

  changeForm = () => {
    this.setState(state => ({
      ...state,
      form: !state.form
    }));
  };

  formFinish = () => {
    setTimeout(() => {
      this.changeThankYou();
    }, 6000);
  };

  inputChange = changeEvent => {
    changeEvent.persist();

    this.setState(state => ({
      ...state,
      formInfo: {
        ...state.formInfo,
        [changeEvent.target.name]: changeEvent.target.value
      }
    }));
  };

  formSubmit = submitEvent => {
    submitEvent.preventDefault();

    this.setState(state => ({
      ...state,
      formInfo: {
        name: "",
        company: "",
        phone: "",
        email: "",
        message: ""
      }
    }));

    this.changeForm();
  };

  render() {
    let { form, thankYou, formInfo } = this.state;
    let { name, company, phone, email, message } = formInfo;

    return (
      <Fragment>
        <Transition
          visible={form}
          duration={300}
          animation={"fade right"}
          onHide={this.changeThankYou}
        >
          <Form style={formStyle} onSubmit={this.formSubmit}>
            <Form.Input
              name={"name"}
              value={name}
              type={"text"}
              placeholder="Name"
              onChange={this.inputChange}
            />
            <Form.Input
              type={"text"}
              value={company}
              name={"company"}
              placeholder="Company"
              onChange={this.inputChange}
            />
            <Form.Input
              type={"tel"}
              value={phone}
              name={"phone"}
              placeholder="Phone ***-***-****"
              onChange={this.inputChange}
            />
            <Form.Input
              name={"email"}
              value={email}
              type={"email"}
              placeholder="Email"
              onChange={this.inputChange}
            />
            <Form.TextArea
              name={"message"}
              value={message}
              onChange={this.inputChange}
              placeholder="What can we do for you?"
            />
            <ButtonWell>
              <Button type={"submit"} inverted>
                Submit
              </Button>
            </ButtonWell>
          </Form>
        </Transition>

        <Transition
          duration={300}
          visible={thankYou}
          onHide={this.changeForm}
          onShow={this.formFinish}
          animation={"fade left"}
        >
          <div>
            <ThankYouMessage>
              <p>Thank you for reaching out!</p>
              <p>We will contact you once we have reviewed you info</p>
              <p> - devtree team</p>
            </ThankYouMessage>
          </div>
        </Transition>
      </Fragment>
    );
  }
}

const formStyle = {
  width: 500,
  minWidth: 300,
  padding: "40px 20px"
};

const ButtonWell = glamorous.div(props => ({
  padding: 20,
  width: "100%",
  display: "flex",
  borderRadius: 2,
  justifyContent: "center",
  backgroundColor: "rgba(43, 209, 181, 1)"
}));

const ThankYouMessage = glamorous.div(props => ({
  padding: 40,
  maxWidth: 500,
  minWidth: 300,
  minHeight: 453,
  display: "flex",
  textAlign: "left",
  flexDirection: "column",
  justifyContent: "center"
}));

export default ContactForm;
