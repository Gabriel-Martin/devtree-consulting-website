import React, { Component } from "react";
import glamorous from "glamorous";
import { NavLink } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <Container>
        <Column1>
          <h1>LOGO</h1>
        </Column1>
        <Column2>
          <Menu>
            <Items>
              <NavLink to={"/"}>Home</NavLink>
            </Items>
            <Items>About Us</Items>
            <Items>Process</Items>
            <Items>Our Team</Items>
            <Items>
              <NavLink to={"/contact-us"}>Contact</NavLink>
            </Items>
          </Menu>
        </Column2>
      </Container>
    );
  }
}

export default Navbar;

const Items = glamorous.h2({
  margin: "20px"
});

const Container = glamorous.div({
  flex: 1,
  flexDirection: "row",
  display: "flex",
  backgroundColor: "#FDFAFA",
  width: 1440,
  height: 104
});

const Column1 = glamorous.div({
  flex: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  margin: "20px"
});

const Column2 = glamorous.div({
  flex: 1,
  display: "flex",
  flexDirection: "column"
});

const Menu = glamorous.div({
  flex: 2,
  flexDirection: "row",
  display: "flex",
  alignItems: "center"
});
