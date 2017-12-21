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
          <LogoCol onClick={this.home}>
            <Img src={"images/general/hero-logo.png"} />
          </LogoCol>
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
              1224 Washington Ave, Suite 3 <br /> Sandpoint, Idaho 83864
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
        </Container>
      </Fragment>
    );
  }
}

const Line = glamorous.div(props => ({
  backgroundImage: "linear-gradient(to right,#88498F,#2BD1B5,#2185DB,#C8473A)",
  height: "8px"
}));

const Img = glamorous.img({
  width: 400,
  height: "auto",
  margin: "0px 40px",
  cursor: "pointer"
});

const Container = glamorous.div({
  height: 226,
  width: "100%",
  display: "flex",
  color: "#F1EFEF",
  backgroundColor: "rgba(26, 27, 28, 0.78)"
});

const LogoCol = glamorous.div({
  flex: 2,
  padding: 10,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
});

const ContactCol = glamorous.div({
  flex: 1,
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "center"
});
const LinksCol = glamorous.div({
  flex: 1,
  display: "flex",
  alignItems: "flex-start",
  flexDirection: "column",
  justifyContent: "center"
});

const Item = glamorous.div({
  margin: 5
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
