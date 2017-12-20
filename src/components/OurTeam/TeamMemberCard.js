import React, { Component } from "react";
import glamorous from "glamorous";
class TeamMemberCard extends Component {
  render() {
    return (
      <Container>
        <Row1>
          <Card1 />
          <Card2 />
          <Card3 />
          <Card4 />
        </Row1>
        <Column>
          <Text>Our Philosophy</Text>
          <Phil>
            It’s about making placeholder text great again. That’s what people
            want, they want placeholder text to be great again. An 'extremely
            credible source' has called my office and told me that Lorem Ipsum's
            birth certificate is a fraud.
          </Phil>
        </Column>
      </Container>
    );
  }
}

export default TeamMemberCard;

const Text = glamorous.h1({
  padding: "30px"
});

const Phil = glamorous.div({
  textAlign: "center"
});

const Container = glamorous.div({
  flex: 1,
  flexDirection: "column",
  display: "flex",
  width: 1440,
  height: 614
});

const Row1 = glamorous.div({
  flex: 1,
  flexDirection: "row",
  justifyContent: "space-between",
  margin: 5,
  display: "flex"
});

const Column = glamorous.div({
  flex: 1,
  flexDirection: "column",
  display: "flex"
});

const Card1 = glamorous.div({
  backgroundSize: "cover",
  backgroundImage: 'url("images/team-photos/Isaiah.jpg")',
  display: "flex",
  flexDirection: "column",
  width: 242,
  height: 346
});

const Card2 = glamorous.div({
  backgroundSize: "cover",

  backgroundImage: 'url("images/team-photos/Chris 0120.jpg")',
  display: "flex",
  flexDirection: "column",
  width: 242,
  height: 346
});

const Card3 = glamorous.div({
  backgroundSize: "cover",

  backgroundImage: 'url("images/team-photos/Gabe 0110.jpg")',
  display: "flex",
  flexDirection: "column",
  width: 242,
  height: 346
});

const Card4 = glamorous.div({
  backgroundSize: "cover",

  backgroundImage: 'url("images/team-photos/Calvin.jpg")',
  display: "flex",
  flexDirection: "column",
  width: 242,
  height: 346
});
