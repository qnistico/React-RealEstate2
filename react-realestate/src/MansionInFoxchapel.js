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
import apt1 from "./img/apartment1.jpg";
import apt2 from "./img/apartment2.jpg";
import apt3 from "./img/apartment3.jpg";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";


function MansionInFoxchapel(props) {
  const history = useHistory();
  const templateImg = {
    houseImg: house1,
    houseLR: house1LR,
    houseMBR: house1MBR,
    houseBR: house1BR,
  };
  const psprAgent = {
    agentImg: agent1,
    agentName: "John Ryan",
    aplink: () => {
      history.push("/AgentJohnProfile");
    },
  };
  const card1template = {
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
    aplink: () => {
      history.push("/AgentJohnProfile");
    },
    plink: () => {
      history.push("/AptInPhiladelphia");
    }


    
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
    salerent: "For Sale",
    cardimgalt: "house",
    aplink: () => {
      history.push("/AgentJohnProfile");
    },
    plink: () => {
    history.push("/HouseInBerwyn");
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
    salerent: "For Sale",
    cardimgalt: "house",
    aplink: () => {
      history.push("/AgentJohnProfile");
    },
    plink: () => {
      history.push("/HouseInPennWynne");
    }  

  };
  
  return (
    <div className="mansion_in_foxchapel">
                        <Fade duration="1210">

      <div className="property_hero">
        <ParallaxProvider>
          <ParallaxImg imgsrc={house1} height="75vh"></ParallaxImg>
        </ParallaxProvider>
        <div className="property_hero_flex">
          <div className="property_hero_content">
            <h1>Mansion In FoxChapel</h1>
          </div>
        </div>
      </div>
      </Fade>

      <SortByContent />
      <ViewProperty
        homeTitle="Mansion on Lorem Ave"
        homeAddress="123 Lorem Ave"
        homePrice="$5,200,000"
        bedrooms="4"
        bathrooms="5"
        sqft="6500 SqFt"
        garages="2"
        ptype="Mansion"
        yearBuilt="2007"
        templateImg={templateImg}
        psprAgent={psprAgent}
        morelistings="More Listings from John Ryan"
        card1template={card1template}
        card2template={card2template}
        card3template={card3template}
      />
    </div>
  );
}

export default MansionInFoxchapel;
