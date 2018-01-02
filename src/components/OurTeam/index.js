import React, { Component } from "react";

import { Navbar, Footer } from "../Global";

import glamorous from "glamorous";

import OurTeamHeader from "./OurTeamHeader";
import TeamMemberCard from "./TeamMemberCard";
import OurPhilosophy from "./OurPhilosophy";

class OurTeam extends Component {
  render() {
    return (
      <Container id={"our-team"}>
        <Navbar />
        <HeaderRow>
          <OurTeamHeader />
        </HeaderRow>
        <CardRow>
          <TeamMemberCard
            barColor={"#88498F"}
            name={"Isaiah Grey"}
            image={"images/team/Isaiah.jpg"}
            position={"Co-Founder | Lead Developer"}
          />
          <TeamMemberCard
            barColor={"#2BD1B5"}
            name={"Chris Nicolls"}
            image={"images/team/Chris.jpg"}
            position={"Co-Founder | Project Manager"}
          />
          <TeamMemberCard
            barColor={"#2185DB"}
            position={"Developer"}
            name={"Calvin Rafferty"}
            image={"images/team/Calvin.jpg"}
          />
          <TeamMemberCard
            barColor={"#C8473A"}
            position={"Developer"}
            name={"Gabriel Martin"}
            image={"images/team/Gabe.jpg"}
          />
        </CardRow>
        <OurPhilosophy />
        <Footer />
      </Container>
    );
  }
}

export default OurTeam;

const Container = glamorous.div({
  display: "flex",
  flexDirection: "column"
});

const HeaderRow = glamorous.div({
  flex: 1
});

const CardRow = glamorous.div({
  display: "flex",
  margin: "50px 0px",
  flexFlow: "row wrap",
  justifyContent: "space-around"
});
