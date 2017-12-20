import glamorous from "glamorous";

import React, { Component } from "react";

class OurTeamHeader extends Component {
  render() {
    return (
      <Container>
        <Header>Our Team</Header>
      </Container>
    );
  }
}

export default OurTeamHeader;

const Container = glamorous.div({
  height: 230,
  display: "flex",
  alignItems: "center",
  backgroundSize: "cover",
  justifyContent: "center",
  backgroundPosition: "bottom",
  backgroundImage:
    "linear-gradient(to bottom, rgba(43, 209, 181, 0.4), rgba(43, 209, 181, 0.4)), url(images/general/our-team.jpg)"
});

const Header = glamorous.div({
  fontSize: 28,
  width: "auto",
  height: "auto",
  color: "#FDFAFA"
});
