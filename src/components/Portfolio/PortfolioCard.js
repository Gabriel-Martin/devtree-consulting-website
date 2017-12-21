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

const Container = glamorous.div({
  flex: 1,
  flexDirection: "row",
  display: "flex",
  flexFlow: "row wrap",
  justifyContent: "space-between"
});

const Card = glamorous.div(props => ({
  backgroundImage: `url("${props.image}")`,
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  minWidth: "calc(100vw / 3)",
  minHeight: "calc(100vw / 3)",
  filter: "grayscale(100%)",
  transitionTimingFunction: "linear",
  transitionDuration: ".5s",
  opacity: 0.7,
  ":hover": {
    filter: "none",
    opacity: 1,
    transitionTimingFunction: "linear",
    transitionDuration: ".2s"
  }
}));

export default PortfolioCard;
