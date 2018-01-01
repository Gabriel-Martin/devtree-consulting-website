import glamorous from "glamorous";

import HeroNavBar from "./HeroNavBar";

import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <Container>
        <HeroNavBar />

        <Header>
          <CatchPhrase1>Release your potential </CatchPhrase1>
          <CatchPhrase2>Achieve your goals</CatchPhrase2>
        </Header>
      </Container>
    );
  }
}

const Container = glamorous.div({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundImage:
    "linear-gradient(to bottom, rgba(0, 148, 255, 0.1), rgba(0, 0, 0, 0.8)), url(images/general/hero.jpg)"
});

const Header = glamorous.div({
  flex: 1,
  padding: 40,
  fontSize: 42,
  fontWeight: 100,
  display: "flex",
  color: "#F2F2F2",
  flexDirection: "column",
  justifyContent: "center"
});

const CatchPhrase1 = glamorous.p(props => ({
  margin: 0,
  fontSize: 52,
  fontWeight: 400,
  color: "rgba(242, 242, 242, 0.8)"
}));

const CatchPhrase2 = glamorous.p(props => ({
  margin: 0,
  fontSize: 52,
  fontWeight: 400,
  color: "rgba(242, 242, 242, 0.6)"
}));

export default Hero;
