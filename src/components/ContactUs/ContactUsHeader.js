import glamorous from "glamorous";
// import contactUsJPG from "images/general/contact-us.jpg";

import React, { Component } from "react";

class ContacUsHeader extends Component {
  render() {
    return <Container />;
  }
}

export default ContacUsHeader;

const Container = glamorous.div({
  flex: 1,
  height: 260,
  display: "flex",
  backgroundSize: "cover",
  backgroundImage: 'url("images/general/contact-us.jpg")'
});
