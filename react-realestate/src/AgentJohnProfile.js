import React from "react";
import AgentProfiles from "./AgentProfiles";
import CardSingle from "./CardSingle";
import agent1 from "./img/agent1.jpg";
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

function AgentJohnProfile(props) {
  const card1template = {
    cardImg: house1,
    agentImg: agent1,
    cardTitle: "Mansion on Lorem Ave",
    address: "555 Lorem Avenue, Miami, FL 12345, USA",
    cardPrice: "$5,200,000",
    bedrooms: "4",
    bathrooms: "5",
    sqft: "6,500 SqFt",
    featured: "Featured",
    forsale: "For Sale",
    cardimgalt: "house",
  };

  const card2template = {
    cardImg: house2,
    agentImg: agent1,
    cardTitle: "Mansion on Lorem Ave",
    address: "555 Lorem Avenue, Miami, FL 12345, USA",
    cardPrice: "$1,800,000",
    bedrooms: "3",
    bathrooms: "4",
    sqft: "4,500 SqFt",
    featured: "Featured",
    forsale: "For Sale",
    cardimgalt: "house",
  };

  const card3template = {
    cardImg: house3,
    agentImg: agent1,
    cardTitle: "Mansion on Lorem Ave",
    address: "555 Lorem Avenue, Miami, FL 12345, USA",
    cardPrice: "$2,300,000",
    bedrooms: "4",
    bathrooms: "5",
    sqft: "5,000 SqFt",
    featured: "Featured",
    forsale: "For Sale",
    cardimgalt: "house",
  };
  const card4template = {
    cardImg: house4,
    agentImg: agent1,
    cardTitle: "Mansion on Lorem Ave",
    address: "555 Lorem Avenue, Miami, FL 12345, USA",
    cardPrice: "$900,000",
    bedrooms: "2",
    bathrooms: "3",
    sqft: "2,750 SqFt",
    featured: "Featured",
    forsale: "For Sale",
    cardimgalt: "house",
  };
  const card5template = {
    cardImg: house5,
    agentImg: agent1,
    cardTitle: "Mansion on Lorem Ave",
    address: "555 Lorem Avenue, Miami, FL 12345, USA",
    cardPrice: "$650,000",
    bedrooms: "2",
    bathrooms: "3",
    sqft: "2,300 SqFt",
    featured: "Featured",
    forsale: "For Sale",
    cardimgalt: "house",
  };
  const p1link = {
    plink: "/MansionInFoxchapel",
  };
  const p2link = {
    plink: "/MansionInFoxchapel",
  };
  const p3link = {
    plink: "/MansionInFoxchapel",
  };
  const p4link = {
    plink: "/MansionInFoxchapel",
  };
  const p5link = {
    plink: "/MansionInFoxchapel",
  };
  return (
    <div className="agent_john_profile">
      <AgentProfiles
        agentImg={agent1}
        agentName="John Ryan"
        card1template={card1template}
        card2template={card2template}
        card3template={card3template}
        card4template={card4template}
        card5template={card5template}
        p1link={p1link}
        p2link={p2link}
        p3link={p3link}
        p4link={p4link}
        p5link={p5link}
      />
    </div>
  );
}

export default AgentJohnProfile;
