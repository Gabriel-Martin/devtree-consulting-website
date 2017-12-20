import React, { Component } from "react";
import glamorous from "glamorous";

class Langueages extends Component {
  render() {
    return (
      <Container>
        <img src={"images/language-icons/react.png"} />
        <img src={"images/language-icons/css3.png"} />
        <img src={"images/language-icons/git.png"} />
        <img src={"images/language-icons/html5.png"} />
        <img src={"images/language-icons/nodejs.png"} />
        <img src={"images/language-icons/npm.png"} />
      </Container>
    );
  }
}

export default Langueages;
const Container = glamorous.div({
  height: 115,
  width: 1440,
  backgroundColor: "#4C4C4D",
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-around"
});
