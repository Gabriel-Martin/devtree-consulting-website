import React, { Component } from "react";

import glamorous from "glamorous";

class Languages extends Component {
  render() {
    return (
      <Container>
        <Img src={"images/language-icons/react.png"} />
        <Img src={"images/language-icons/css3.png"} />
        <Img src={"images/language-icons/git.png"} />
        <Img src={"images/language-icons/html5.png"} />
        <Img src={"images/language-icons/nodejs.png"} />
      </Container>
    );
  }
}

export default Languages;

const Container = glamorous.div({
  height: 115,
  padding: 40,
  display: "flex",
  alignItems: "center",
  backgroundColor: "#4C4C4D",
  justifyContent: "space-around"
});

const Img = glamorous.img({
  width: 50,
  height: "auto"
});
