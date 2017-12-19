import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import glamorous from "glamorous";

class HeroNavBar extends Component {
  render() {
    return (
      <Container>
        <Column1>
          <h1>LOGO</h1>
          <Row1>
            <Items2>Releasing potential for any business</Items2>
          </Row1>
        </Column1>
        <Column2>
          <Menu>
            <Items1>
              <NavLink to={"/"}>Home</NavLink>
            </Items1>
            <Items1>About Us</Items1>
            <Items1>Process</Items1>
            <Items1>Our Team</Items1>
            <Items1>
              <NavLink to={"/contact-us"}>Contact</NavLink>
            </Items1>
          </Menu>
        </Column2>
      </Container>
    );
  }
}

export default HeroNavBar;

const Items1 = glamorous.h2({
  margin: "20px",
  color: "#F2F2F2"
});

const Items2 = glamorous.h2({
  margin: "20px",
  fontSize: 60,
  color: "#F2F2F2"
});

const Container = glamorous.div({
  flex: 1,
  flexDirection: "row",
  display: "flex",
  backgroundImage: 'url("/images/general/hero.jpg")',
  backgroundSize: "cover",
  width: 1440,
  height: 768
});

const Column1 = glamorous.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",

  margin: "20px",
  color: "#F2F2F2"
});

const Column2 = glamorous.div({
  flex: 1,
  display: "flex",
  flexDirection: "column"
});

const Row1 = glamorous.div({
  flex: 1,
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start"
});

const Menu = glamorous.div({
  flex: 2,
  flexDirection: "row",
  display: "flex"
});
