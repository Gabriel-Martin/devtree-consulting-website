import React, { Component } from "react";
import glamorous from "glamorous";
class PortfolioCard extends Component {
  render() {
    return (
      <Container>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
        <Card5 />
      </Container>
    );
  }
}

export default PortfolioCard;
const Container = glamorous.div({
  flex: 1,
  flexDirection: "row",
  display: "flex",
  flexFlow: "row wrap",
  padding: 5,
  justifyContent: "space-between"
});

const Card1 = glamorous.div({
  backgroundImage: 'url("images/projects/project-1.png")',
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  width: 465,
  height: 470
});
const Card2 = glamorous.div({
  backgroundImage: 'url("images/projects/project-2.png")',
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  width: 465,
  height: 470
});
const Card3 = glamorous.div({
  backgroundImage: 'url("images/projects/project-3.png")',
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  width: 465,
  height: 470
});
const Card4 = glamorous.div({
  backgroundImage: 'url("images/projects/project-4.png")',
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  width: 465,
  height: 470
});
const Card5 = glamorous.div({
  backgroundImage: 'url("images/projects/project-5.png")',
  backgroundSize: "cover",
  display: "flex",
  flexDirection: "column",
  width: 465,
  height: 470
});
