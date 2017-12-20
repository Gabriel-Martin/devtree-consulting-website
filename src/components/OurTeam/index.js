import OurTeamHeader from "./OurTeamHeader";
import TeamMemberCard from "./TeamMemberCard";

import React, { Component } from "react";

class OurTeam extends Component {
  render() {
    return (
      <div>
        <OurTeamHeader />
        <TeamMemberCard />
      </div>
    );
  }
}

export default OurTeam;
