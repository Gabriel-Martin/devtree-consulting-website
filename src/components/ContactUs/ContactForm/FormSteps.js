import glamorous from "glamorous";

import React, { Component } from "react";

class FormSteps extends Component {
  render() {
    return (
      <Container>
        <Step1>Step 1</Step1>
        <Step2>Step 2</Step2>
        <Step3>Step 3</Step3>
      </Container>
    );
  }
}

export default FormSteps;

const Container = glamorous.div({
  width: 500,
  margin: 80,
  height: 50,
  display: "flex",
  justifyContent: "center"
});

const Step1 = glamorous.div({
  flex: 1,
  display: "flex",
  color: "#23BAA1",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid lightgrey"
});
const Step2 = glamorous.div({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderTop: "1px solid lightgrey",
  backgroundColor: "#23BAA1",
  borderBottom: "1px solid lightgrey"
});
const Step3 = glamorous.div({
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#23BAA1",
  border: "1px solid lightgrey"
});
