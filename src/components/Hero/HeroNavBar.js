import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import glamorous from "glamorous";

class HeroNavBar extends Component {
  render() {
    return (
      <Menu>
        <Item>
          <NavLink to={"/"}>Home</NavLink>
        </Item>
        <Item>About Us</Item>
        <Item>Process</Item>
        <Item>Our Team</Item>
        <Item>
          <NavLink to={"/contact-us"}>Contact</NavLink>
        </Item>
      </Menu>
    );
  }
}

export default HeroNavBar;

const Menu = glamorous.div({
  flex: 1,
  display: "flex",
  margin: "40px 40px"
});

const Item = glamorous.div({
  margin: 20,
  fontSize: 18,
  fontWeight: 100,
  color: "#F2F2F2"
});
