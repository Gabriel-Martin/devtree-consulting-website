import React, { Component } from "react";
import { NavLink as Link, withRouter } from "react-router-dom";
import { HashLink as HLink } from "react-router-hash-link";
import glamorous from "glamorous";

class HeroNavBar extends Component {
  render() {
    return (
      <Container>
        <NavBar>
          <LogoContainer>
            <Logo src={"images/general/hero-logo.png"} />
          </LogoContainer>

          <NavContainer>
            <Item>
              <HashLink to={"#process"}>Process</HashLink>
            </Item>
            <Item>
              <HashLink to={"#our-team"}>Our Team</HashLink>
            </Item>
            <Item>
              <NavLink to={"/portfolio"}>Portfolio</NavLink>
            </Item>
            <Item>
              <NavLink to={"/contact-us"}>Contact</NavLink>
            </Item>
          </NavContainer>
        </NavBar>
      </Container>
    );
  }
}

const Container = glamorous.div(props => ({
  flex: 1,
  display: "flex",
  flexFlow: "row wrap"
}));

const NavBar = glamorous.div({
  flex: 1,
  height: 120,
  display: "flex",
  margin: "0px 20px",
  alignItems: "center",
  flexFlow: "row wrap"
});

const LogoContainer = glamorous.div(props => ({
  flex: 1,
  display: "flex",
  justifyContent: "flex-start"
}));

const Logo = glamorous.img({
  width: 400,
  height: "auto"
});

const NavContainer = glamorous.div(props => ({
  flex: 1,
  display: "flex",
  justifyContent: "flex-end"
}));

const Item = glamorous.div({
  margin: 20,
  fontSize: 18,
  fontWeight: 100,
  color: "#F2F2F2"
});

const NavLink = glamorous(Link)(props => ({
  color: "#f1efef",
  textDecoration: "none !important"
}));

const HashLink = glamorous(HLink)(props => ({
  color: "#f1efef",
  textDecoration: "none !important"
}));

export default withRouter(HeroNavBar);
