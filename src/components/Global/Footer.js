import glamorous from "glamorous";
import { HashLink } from "react-router-hash-link";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <Container>
        <LogoCol onClick={() => this.props.history.push("/")}>
          <Img src={"images/general/hero-logo.png"} />
        </LogoCol>
        <ContactCol>
          <Item>
            <Link to={"/contact-us"}>Contact Us</Link>
          </Item>
          <Item>
            <a href={"tel:1-208-597-6466"}>208-597-6466</a>
          </Item>
          <Item>
            <a href={"mailto:info@devtree.consulting"}>
              info@devtree.consulting
            </a>
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
            <Link to={"/portfolio"}> Portfolio </Link>
          </Item>
          <Item>
            <HashLink to={"/#our-team"}> Our Team </HashLink>
          </Item>
          <Item>
            <HashLink to={"/#process"}> Process </HashLink>
          </Item>
        </LinksCol>
      </Container>
    );
  }
}

export default withRouter(Footer);

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
  backgroundColor: "rgba(26, 27, 28, 0.78)",
  borderTop: `5px solid #2185DB`
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
