import React, { Component, Fragment } from "react";
import { NavLink as Link, withRouter } from "react-router-dom";
import { HashLink as HLink } from "react-router-hash-link";
import glamorous from "glamorous";

class HeroNavBar extends Component {
  render() {
    return (
      <Fragment>
        <NavBar>
          <LogoContainer>
            <div>
              <Logo src={"images/general/hero-logo.png"} />
            </div>
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
      </Fragment>
    );
  }
}

const mediaQuery = "@media screen and (max-width: 800px)";

const NavBar = glamorous.div({
  width: "100%",
  minHeight: 120,
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  padding: 40,
  justifyContent: "space-between",
  [mediaQuery]: {
    justifyContent: "center"
  }
});

const LogoContainer = glamorous.div(props => ({
  minWidth: 300,
  maxWidth: 400
}));

const Logo = glamorous.img({
  width: "100%",
  height: "auto"
});

const NavContainer = glamorous.div(props => ({
  width: 400,
  padding: 20,
  minWidth: 300,
  display: "flex",
  justifyContent: "space-between",
  [mediaQuery]: {
    justifyContent: "center"
  }
}));

const Item = glamorous.div({
  fontSize: 18,
  fontWeight: 100,
  padding: "0px 5px",
  color: "#F2F2F2"
});

const NavLink = glamorous(Link)(props => ({
  color: "#f1efef",
  textDecoration: "none !important"
}));

const HashLink = glamorous(HLink)(props => ({
  color: "#f1efef",
  whiteSpace: "nowrap",
  textDecoration: "none !important"
}));

export default withRouter(HeroNavBar);
