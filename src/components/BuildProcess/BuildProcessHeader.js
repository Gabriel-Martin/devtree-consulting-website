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
  width: 1440,
  height: 230,
  flex: 1,
  flexDirection: "row",
  display: "flex",
  backgroundSize: "cover",
  backgroundImage:
    "linear-gradient(to bottom, rgba(38,84,124,0.54), rgba(38,84,124,0.54)), url(images/team-photos/build-process.jpg)",
  justifyContent: "center",
  alignItems: "center"
});
