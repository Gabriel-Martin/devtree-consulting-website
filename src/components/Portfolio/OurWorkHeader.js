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
    "linear-gradient(to left, rgba(231, 76, 60, .5), rgba(76,76,77,0.72), rgba(43, 209, 181,.5)), url(images/general/our-work.jpg)",
  justifyContent: "center",
  alignItems: "center"
});
