import React, { Component } from "react";
import glamorous from "glamorous";

class WhoWeAre extends Component {
  render() {
    return (
      <div>
        <Container1 id={"who-we-are"}>
          <Text1>Who We Are</Text1>
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
      </div>
    );
  }
}

export default WhoWeAre;

const Line = glamorous.hr({
  height: "10px",
  width: "400px",
  backgroundColor: "rgba(43,209,181,1)"
});

const Container1 = glamorous.div({
  height: 150
});

const Container2 = glamorous.div({
  height: 137
});

const Text1 = glamorous.h2({
  textAlign: "center",
  fontSize: 36
});

const Text2 = glamorous.p({
  textAlign: "center"
});
