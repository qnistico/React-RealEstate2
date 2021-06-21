import React from "react";
import AgentProfiles from "./AgentProfiles";
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";

function AgentJohnProfile() {
  return (
    <div className="agent_john_profile">
      <AgentProfiles agentImg={agent1} agentName="John Ryan" />
    </div>
  );
}

export default AgentJohnProfile;
