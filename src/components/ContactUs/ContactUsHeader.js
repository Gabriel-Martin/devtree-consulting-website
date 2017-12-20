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
    "linear-gradient(to bottom, rgba(107,35,35,0.64), rgba(107,35,35,0.64)), url(images/general/contact-us.jpg)"
});

const Header = glamorous.h1({});
