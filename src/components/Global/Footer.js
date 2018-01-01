import glamorous from "glamorous";
import { HashLink as HLink } from "react-router-hash-link";
import React, { Component, Fragment } from "react";
import { Link, withRouter } from "react-router-dom";

class Footer extends Component {
  home = () => {
    let { pathname } = this.props.history.location;
    if (pathname === "/") {
      this.props.history.push("/");
      window.scrollTo(0, 0);
    } else {
      this.props.history.push("/");
    }
  };

  render() {
    return (
      <Fragment>
        <Line />
        <Container>
          <LogoContainer onClick={this.home}>
            <Logo src={"images/general/hero-logo.png"} />
          </LogoContainer>

          <LinksContainer>
            <ContactCol>
              <Item>
                <NavLink to={"/contact-us"}>Contact Us</NavLink>
              </Item>
              <Item>
                <Anchor href={"tel:1-208-718-2633"}>208-718-2633</Anchor>
              </Item>
              <Item>
                <Anchor href={"mailto:info@devtree.io"}>info@devtree.io</Anchor>
              </Item>
              <Item>
                <p>1224 Washington Ave, Suite 3</p>{" "}
                <p>Sandpoint, Idaho 83864</p>
              </Item>
            </ContactCol>

            <LinksCol>
              <Item>
                <HashLink to={"/#who-we-are"}> About Us </HashLink>
              </Item>
              <Item>
                <NavLink to={"/portfolio"}> Portfolio </NavLink>
              </Item>
              <Item>
                <HashLink to={"/#our-team"}> Our Team </HashLink>
              </Item>
              <Item>
                <HashLink to={"/#process"}> Process </HashLink>
              </Item>
            </LinksCol>
          </LinksContainer>
        </Container>
      </Fragment>
    );
  }
}

const mediaQuery = "@media screen and (max-width: 1084px)";

const Line = glamorous.div(props => ({
  height: "8px",
  backgroundImage: "linear-gradient(to right,#88498F,#2BD1B5,#2185DB,#C8473A)"
}));

const Container = glamorous.div({
  width: "100%",
  minHeight: 226,
  display: "flex",
  padding: 40,
  color: "#F1EFEF",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "rgba(26, 27, 28, 0.78)",
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
  height: "auto",
  cursor: "pointer"
});

const LinksContainer = glamorous.div(props => ({
  minWidth: 300,
  display: "flex",
  flexWrap: "wrap-reverse",
  justifyContent: "center"
}));

const ContactCol = glamorous.div({
  padding: 20,
  minWidth: 300,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center"
});
const LinksCol = glamorous.div({
  padding: 20,
  minWidth: 300,
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center"
});

const Item = glamorous.div({
  padding: 5,
  textAlign: "center"
});

const NavLink = glamorous(Link)(props => ({
  color: "#f1efef",
  textDecoration: "none !important"
}));

const HashLink = glamorous(HLink)(props => ({
  color: "#f1efef",
  textDecoration: "none !important"
}));
const Anchor = glamorous.a(props => ({
  color: "#f1efef",
  textDecoration: "none !important"
}));

export default withRouter(Footer);
