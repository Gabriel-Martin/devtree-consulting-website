import OurTeamHeader from "./OurTeamHeader";
import TeamMemberCard from "./TeamMemberCard";

import React, { Component } from "react";

class OurTeam extends Component {
  render() {
    return (
      <div>
        <OurTeamHeader />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
      </div>
    );
  }
}

export default OurTeam;
