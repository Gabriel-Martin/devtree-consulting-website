import React, { Component } from "react";
import glamorous from "glamorous";

class OurWorkHeader extends Component {
  render() {
    return (
      <Container>
        <Text>Our Work</Text>
      </Container>
    );
  }
}

export default OurWorkHeader;

const Text = glamorous.h1({
  color: "#FDFAFA"
});

const Container = glamorous.div({
  flex: 1,
  flexDirection: "row",
  display: "flex",
  height: 230,
  backgroundSize: "cover",
  backgroundImage:
    "linear-gradient(to bottom, rgba(76,76,77,0.72), rgba(76,76,77,0.72)), url(images/general/our-work.jpg)",
  justifyContent: "center",
  alignItems: "center"
});
