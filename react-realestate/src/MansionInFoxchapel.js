import React, { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import MainNav from "./MainNav";
import SortByContent from "./SortByContent";
import LandingPageCards from "./LandingPageCards";
import ViewProperty from "./ViewProperty";
import HomeInteriorSlider from "./HomeInteriorSlider";
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
import house1LR from "./img/house1LR.jpg";
import house1MBR from "./img/house1MBR.jpg";
import house1BR from "./img/house1BR.jpg";
import agent1 from "./img/agent1.jpg";
import lphouse1 from "./img/lphouse1.jpg";

function MansionInFoxchapel(props) {
  const templateImg = {
    houseImg: house1,
    houseLR: house1LR,
    houseMBR: house1MBR,
    houseBR: house1BR,
  };
  const psprAgent = {
    agentImg: agent1,
    agentName: "John Ryan",
    aplink: "/AgentJohnProfile",
  };
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
    featured: "Recent",
    forsale: "For Sale",
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
    featured: "Recent",
    forsale: "For Sale",
  };
  return (
    <div className="mansion_in_foxchapel">
      
      <div className="property_hero" >
        <ParallaxProvider>
        <ParallaxImg  imgsrc={house1} height="75vh">
        
        </ParallaxImg>
      </ParallaxProvider>
        <div className="property_hero_flex">
          <div className="property_hero_content">
            <h2>Mansion In FoxChapel</h2>
          </div>
        </div>
      </div>
      
      <SortByContent />
      <ViewProperty
        homeTitle="Mansion on Lorem Ave"
        homeAddress="123 Lorem Ave"
        homePrice="$5,200,000"
        bedrooms="4"
        bathrooms="5"
        sqft="6500 SqFt"
        yearBuilt="2007"
        templateImg={templateImg}
        psprAgent={psprAgent}
        morelistings="More Listings from John Ryan"
        card1template={card1template}
        card2template={card2template}
        card3template={card3template}
        card4template={card4template}
        card5template={card5template}
      />
    </div>
  );
}

export default MansionInFoxchapel;
