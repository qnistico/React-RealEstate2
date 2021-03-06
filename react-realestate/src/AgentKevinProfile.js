import React from "react";
import AgentProfiles from "./AgentProfiles";
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
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
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";
import agentbg from "./img/agentbg.jpg";
import apt3 from "./img/apartment3.jpg";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";


function AgentKevinProfile(props) {
  const history = useHistory();
  const card1template = {
    cardImg: house15,
    agentImg: agent3,
    cardTitle: "Mansion in Norwin",
    address: "555 Lorem Avenue, Lorem, FL 12345, USA",
    cardPrice: "$5,700,000",
    bedrooms: "4",
    bathrooms: "5",
    sqft: "7,200 SqFt",
    featured: "Featured",
    forsale: "For Sale",
    cardimgalt: "house",
    aplink: () => {
      history.push("/AgentKevinProfile");
    },
    plink: () => {
      history.push("/MansionInNorwin");}
  };

  const card2template = {
    cardImg: house10,
    agentImg: agent3,
    cardTitle: "Mansion in Sewickley",
    address: "555 Lorem Avenue, Lorem, FL 12345, USA",
    cardPrice: "$5,400,000",
    bedrooms: "4",
    bathrooms: "5",
    sqft: "7,200 SqFt",
    featured: "Featured",
    forsale: "For Sale",
    salerent: "For Sale",
    cardimgalt: "house",
    aplink: () => {
      history.push("/AgentKevinProfile");
    },
    plink: () => {
      history.push("/MansionInSewickleyHeights");}
  };

  const card3template = {
    cardImg: house7,
    agentImg: agent3,
    cardTitle: "Mansion in Gladwyne",
    address: "555 Lorem Avenue, Lorem, FL 12345, USA",
    cardPrice: "$14,000,000",
    bedrooms: "6",
    bathrooms: "7",
    sqft: "13,500 SqFt",
    featured: "Featured",
    forsale: "For Sale",
    salerent: "For Sale",
    cardimgalt: "house",
    aplink: () => {
      history.push("/AgentKevinProfile");
    },
    plink: () => {
      history.push("/MansionInGladwyne");}
  };
  const card4template = {
    cardImg: apt3,
    agentImg: agent3,
    cardTitle: "Apartment in Allentown",
    address: "555 Lorem Avenue, Lorem, FL 12345, USA",
    cardPrice: "$1,200 / mo",
    bedrooms: "1",
    bathrooms: "1",
    sqft: "1,200 SqFt",
    featured: "Featured",
    forsale: "For Rent",
    salerent: "For Rent",
    cardimgalt: "apartment",
    aplink: () => {
      history.push("/AgentKevinProfile");
    },
    plink: () => {
      history.push("/AptInAllentown");}
    
  };

  return (
    <div>
      <Helmet>
        <title>Kevin Richmond - PA Premium Realty</title>
        <meta name="description"
        content="All property listings from Kevin Richmond"/>
      </Helmet>
      <div className="agent_kevin_profile">
        <AgentProfiles
          headerTitle="Kevin Richmond"
          parallaximg1={agentbg}
          agentImg={agent3}
          agentName="Kevin Richmond"
          card1template={card1template}
          card2template={card2template}
          card3template={card3template}
          card4template={card4template}
        />
      </div>
    </div>
  );
}

export default AgentKevinProfile;
