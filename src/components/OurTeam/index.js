import OurTeamHeader from "./OurTeamHeader";
import TeamMemberCard from "./TeamMemberCard";
import OurPhilosophy from "./OurPhilosophy";

import React, { Component } from "react";

class OurTeam extends Component {
  render() {
    return (
      <div>
        <OurTeamHeader />
        <TeamMemberCard />
        <OurPhilosophy />
      </div>
    );
  }
}

export default OurTeam;
