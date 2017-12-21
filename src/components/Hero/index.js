import glamorous from "glamorous";

import HeroNavBar from "./HeroNavBar";

import React, { Component } from "react";

class Hero extends Component {
  render() {
    return (
      <Container>
        <HeroNavBar />

        <HeaderRow>
          Releasing potential for any <br /> business
        </HeaderRow>
      </Container>
    );
  }
}

const Container = glamorous.div({
  display: "flex",
  height: "100vh",
  flexDirection: "column",
  backgroundSize: "cover",
  backgroundImage:
    "linear-gradient(to bottom, rgba(0, 148, 255, 0.1), rgba(0, 0, 0, 0.8)), url(images/general/hero.jpg)"
});

// const NavCol = glamorous.div({
//   flex: 1,
//   display: "flex",
//   alignItems: "flex-end",
//   flexDirection: "column"
// });

// const LogoCol = glamorous.div({
//   flex: 1,
//   display: "flex",
//   // alignItems: "center",
//   flexDirection: "column"
// });

const HeaderRow = glamorous.div({
  flex: 1,
  fontSize: 52,
  fontWeight: 100,
  display: "flex",
  color: "#F2F2F2",
  margin: "0px 102px",
  textAlign: "center"
});

export default Hero;
