import glamorous from "glamorous";
// import contactUsJPG from "images/general/contact-us.jpg";

import React, { Component } from "react";

class ContacUsHeader extends Component {
  render() {
    return (
      <Container>
        <Header>Contact Us</Header>
      </Container>
    );
  }
}

export default ContacUsHeader;

const Container = glamorous.div({
  height: 260,
  width: "100%",
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  justifyContent: "center",
  color: "rgb(239, 239, 239)",
  backgroundImage:
    "linear-gradient(to right, rgba(231, 76, 60, .5),rgba(76,76,77,0.72), rgba(43, 209, 181,.5)),  url(images/general/contact-us.jpg)"
});

const Header = glamorous.h1({});
