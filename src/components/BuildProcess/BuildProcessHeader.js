import React, { Component } from "react";
import glamorous from "glamorous";
class BuildProcessHeader extends Component {
  render() {
    return (
      <Container>
        <Text>Build Process</Text>
      </Container>
    );
  }
}

export default BuildProcessHeader;

const Text = glamorous.h1({
  color: "#FDFAFA"
});

const Container = glamorous.div({
  flex: 1,
  height: 230,
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  justifyContent: "center",
  backgroundPositionY: "-100px",
  backgroundImage:
    "linear-gradient(to bottom, rgba(38,84,124,0.54), rgba(38,84,124,0.54)), url(images/team/build-process.jpg)"
});
