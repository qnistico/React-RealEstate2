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
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";
import agentbg from "./img/agentbg.jpg";
import apt1 from "./img/apartment1.jpg";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";


function AgentJohnProfile(props) {
  const history = useHistory();
  const card1template = {
    cardImg: house1,
    agentImg: agent1,
    cardTitle: "Mansion in Foxchapel",
    address: "555 Lorem Avenue, Lorem, FL 12345, USA",
    cardPrice: "$5,200,000",
    bedrooms: "4",
    bathrooms: "5",
    sqft: "6,500 SqFt",
    featured: "Featured",
    forsale: "For Sale",
    cardimgalt: "house",
    salerent: "For Sale",
    aplink: () => {
      history.push("/AgentJohnProfile");
    },
    plink: () => {
      history.push("/MansionInFoxchapel");
    },
  };

  const card2template = {
    cardImg: house2,
    agentImg: agent1,
    cardTitle: "House in Berwyn",
    address: "555 Lorem Avenue, Lorem, FL 12345, USA",
    cardPrice: "$1,800,000",
    bedrooms: "3",
    bathrooms: "4",
    sqft: "4,500 SqFt",
    featured: "Featured",
    forsale: "For Sale",
    cardimgalt: "house",
    salerent: "For Sale",
    aplink: () => {
      history.push("/AgentJohnProfile");
    }

  };

  const card3template = {
    cardImg: house4,
    agentImg: agent1,
    cardTitle: "House in PennWynne",
    address: "555 Lorem Avenue, Lorem, FL 12345, USA",
    cardPrice: "$900,000",
    bedrooms: "2",
    bathrooms: "3",
    sqft: "2,750 SqFt",
    featured: "Featured",
    forsale: "For Sale",
    cardimgalt: "house",
    salerent: "For Sale",
    aplink: () => {
      history.push("/AgentJohnProfile");
    }

  };

  const card4template = {
    cardImg: apt1,
    agentImg: agent1,
    cardTitle: "Apartment in Philadelphia",
    address: "555 Lorem Avenue, Lorem, FL 12345, USA",
    cardPrice: "$1400 / mo",
    bedrooms: "2",
    bathrooms: "1",
    sqft: "1,400 Sq Ft",
    featured: "Featured",
    forsale: "For Rent",
    salerent: "For Rent",
    cardimgalt: "apartment",
    plink: () => {
      history.push("/AptInPhiladelphia");
    }  ,
    aplink: () => {
      history.push("/AgentJohnProfile");
    }
  }
  
  
  return (
    <div className="agent_john_profile">
      <AgentProfiles
        headerTitle="John Ryan"
        parallaximg1={agentbg}
        agentImg={agent1}
        agentName="John Ryan"
        card1template={card1template}
        card2template={card2template}
        card3template={card3template}
        card4template={card4template}
        
  
      />
    </div>
  );
}

export default AgentJohnProfile;
