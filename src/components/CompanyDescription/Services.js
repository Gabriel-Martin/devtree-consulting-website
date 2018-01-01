import React, { Component } from "react";
import glamorous from "glamorous";
class Services extends Component {
  render() {
    return (
      <Container>
        <Container1>
          <Text1>Services</Text1>
          <Line />
        </Container1>
        <Container2>
          <Text2>
            I write the best placeholder text, and I'm the biggest developer on
            the web by far... While that's mock-ups and this is politics, are
            they really so different? You have so many different things
            placeholder text has to be able to do, and I don't believe Lorem
            Ipsum has the stamina.
          </Text2>
        </Container2>
      </Container>
    );
  }
}

const Line = glamorous.div(props => ({
  height: "10px",
  width: "400px",
  backgroundColor: "rgba(43,209,181,1)"
}));

const Container = glamorous.div({
  padding: 20
  // backgroundColor: "#C7C7C7"
});

const Container1 = glamorous.div({
  padding: 20,
  display: "flex",
  alignItems: "center",
  flexDirection: "column"
});

const Container2 = glamorous.div({
  padding: 20
});

const Text1 = glamorous.h2({
  textAlign: "center",
  fontSize: 36
});

const Text2 = glamorous.div({
  textAlign: "center"
});

export default Services;
