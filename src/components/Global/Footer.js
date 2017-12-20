import glamorous from "glamorous";

import React, { Component } from "react";
import { Link } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Container>
        <LogoCol>
          <Img src={"images/general/hero-logo.png"} />
        </LogoCol>
        <ContactCol>
          <Item>CONTACT US</Item>
          <Item>123-456-7890</Item>
          <Item>info@devtree.consulting</Item>
          <Item>
            1224 Washington Ave, Suite 3 <br /> Sandpoint, Idaho 83864
          </Item>
          <Item>
            <Link to={"/contact-us"}>Message</Link>
          </Item>
        </ContactCol>

        <LinksCol>
          <p>LINKS</p>
          <Item>
            <Link to={"/"}> Home </Link>
          </Item>
          <Item>
            <Link to={"/"}> About Us </Link>
          </Item>
          <Item>
            <Link to={"/"}> Our Team </Link>
          </Item>
          <Item>
            <Link to={"/"}> Process </Link>
          </Item>
        </LinksCol>
      </Container>
    );
  }
}

export default Footer;

const Img = glamorous.img({
  width: 400,
  height: "auto",
  margin: "0px 40px"
});

const Container = glamorous.div({
  height: 230,
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
