import React, { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import glamorous from "glamorous";

class HeroNavBar extends Component {
  render() {
    return (
      <Container>
        <NavBar>
          <LogoContainer onClick={() => this.props.history.push("/")}>
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
  height: 100,
  display: "flex",
  alignItems: "center",
  flexFlow: "row wrap"
});

const LogoContainer = glamorous.div(props => ({
  flex: 1,
  display: "flex",
  justifyContent: "center"
}));

const Logo = glamorous.img({
  width: 400,
  height: "auto"
});

const NavContainer = glamorous.div(props => ({
  flex: 1,
  display: "flex",
  display: "flex",
  justifyContent: "flex-end"
}));

const Item = glamorous.div({
  margin: 20,
  fontSize: 18,
  fontWeight: 100,
  color: "#F2F2F2"
});

export default withRouter(HeroNavBar);
