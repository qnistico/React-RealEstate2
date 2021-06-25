import React from 'react';
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";
import house1 from "./img/house1.jpg";
import house2 from "./img/house2.jpg";
import house3 from "./img/house3.jpg";
import house4 from "./img/house4.jpg";
import house5 from "./img/house5.jpg";
import house6 from "./img/house6.jpg";
import house7 from "./img/house7.jpg";
import house8 from "./img/house8.jpg";
import house9 from "./img/house9.jpg";
import house10 from "./img/house10.jpg";
import house11 from "./img/house11.jpg";
import house12 from "./img/house12.jpg";
import house13 from "./img/house13.jpg";
import house14 from "./img/house14.jpg";
import house15 from "./img/house15.jpg";
import house16 from "./img/house16.jpg";
import AgentProfiles from "./AgentProfiles";
import CardSingle from './CardSingle';

function AgentMaryProfile(props) {
    const card1template = {
        cardImg: house8,
        agentImg: agent4,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$1,100,000",
        bedrooms: "2",
        bathrooms: "4",
        sqft: "4,900 SqFt",
      };
    
      const card2template = {
        cardImg: house9,
        agentImg: agent4,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$680,000",
        bedrooms: "2",
        bathrooms: "4",
        sqft: "3,200 SqFt",
      };
    
      const card3template = {
        cardImg: house6,
        agentImg: agent4,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$425,000",
        bedrooms: "2",
        bathrooms: "2",
        sqft: "2,300 SqFt",
      };
      const card4template = {
        cardImg: house12,
        agentImg: agent4,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$499,999",
        bedrooms: "2",
        bathrooms: "3",
        sqft: "2,850 SqFt",
      };
      const card5template = {
        cardImg: house14,
        agentImg: agent4,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$4,100,000",
        bedrooms: "4",
        bathrooms: "5",
        sqft: "5,000 SqFt",
      };
    return (
        <div className="agent_mary_profile">
      <AgentProfiles
        agentImg={agent4}
        agentName="Mary Williams"
        card1template={card1template}
        card2template={card2template}
        card3template={card3template}
        card4template={card4template}
        card5template={card5template}
      />
        </div>
    )
}

export default AgentMaryProfile
