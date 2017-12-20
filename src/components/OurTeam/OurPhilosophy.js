import glamorous from "glamorous";

import React, { Component } from "react";

class OurPhilosophy extends Component {
  render() {
    return (
      <Container>
        <h1>Our Philosophy</h1>
        <Text>
          You could see there was text coming out of her eyes, text coming out
          of her wherever. The concept of Lorem Ipsum was created by and for the
          Chinese in order to make U.S. design jobs non-competitive.I think my
          strongest asset maybe by far is my temperament. I have a placeholding
          temperament. Lorem Ipsum best not make any more threats to your
          website. It will be met with fire and fury like the world has never
          seen.
        </Text>
      </Container>
    );
  }
}

export default OurPhilosophy;

const Text = glamorous.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
  justifyContent: "center",
  fontSize: 20
});
const Container = glamorous.div({
  height: 220,
  display: "flex",
  flexDirection: "row",
  flex: 1
});
