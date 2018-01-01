import React, { Component } from "react";
import glamorous from "glamorous";
class PortfolioCard extends Component {
  render() {
    return (
      <Container>
        <Card image={"images/projects/project-1.png"} />
        <Card image={"images/projects/project-2.png"} />
        <Card image={"images/projects/project-3.png"} />
        <Card image={"images/projects/project-4.png"} />
        <Card image={"images/projects/project-5.png"} />
      </Container>
    );
  }
}

const Container = glamorous.div(props => ({
  display: "flex",
  flexFlow: "row wrap"
}));

const Card = glamorous.div(props => ({
  flex: 1,
  opacity: 0.7,
  backgroundSize: "cover",
  minWidth: "calc(100vw / 3)",
  minHeight: "calc(100vw / 3)",
  backgroundPosition: "center",
  filter: "grayscale(100%)",
  transition: "all 0.15s linear",
  backgroundImage: `url("${props.image}")`,
  ":hover": {
    opacity: 1,
    filter: "none",
    transform: "scale(1.03)",
    transition: "all 0.15s linear",
    boxShadow: "0 14px 28px rgba(0,0,0,0.30), 0 10px 10px rgba(0,0,0,0.4)"
  },
  "@media screen and (max-width: 600px)": {
    minWidth: "calc(100vw / 2)",
    minHeight: "calc(100vw / 2)"
  },
  "@media screen and (max-width: 375px)": {
    minWidth: "100%",
    minHeight: "100vw"
  }
}));

export default PortfolioCard;
