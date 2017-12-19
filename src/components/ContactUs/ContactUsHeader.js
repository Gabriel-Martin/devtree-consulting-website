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
  flex: 1,
  height: 260,
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  justifyContent: "center",
  backgroundImage: 'url("images/general/contact-us.jpg")'
});

const Header = glamorous.h1({});
