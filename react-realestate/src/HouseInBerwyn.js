import React, { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";
import ViewProperty from "./ViewProperty";
import SortByContent from "./SortByContent";
import {
  AlarmOutlined,
  BathtubOutlined,
  BathtubRounded,
  Bookmark,
  CheckBoxOutlineBlankOutlined,
  DeckOutlined,
  DirectionsCar,
  FilterVintageOutlined,
  Fireplace,
  FitnessCenter,
  FlashOnOutlined,
  KingBed,
  KingBedOutlined,
  KitchenOutlined,
  LocalDrinkOutlined,
  LocalFloristOutlined,
  LocalGasStationOutlined,
  LocalLaundryServiceOutlined,
  NetworkWifiOutlined,
  PoolOutlined,
  Print,
  Share,
  SportsEsportsOutlined,
  SportsTennis,
  SquareFoot,
} from "@material-ui/icons";
import HomeInteriorSlider from "./HomeInteriorSlider";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import CheckIcon from "@material-ui/icons/Check";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AccessibleForwardOutlinedIcon from "@material-ui/icons/AccessibleForwardOutlined";
import PropertyViewAgent from "./PropertyViewAgent";
import VPForm from "./VPForm";
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";
import CardSingle from "./CardSingle";
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
import SidebarCards from "./SidebarCards";
import LandingPageSingleCard from "./LandingPageSingleCard";
import TestCarousel from "./TestCarousel";
import FeaturedListings from "./FeaturedListings";
import Footer from "./Footer";
import MortgageCalculator from "@herilsaha/mortgage-calculator";
import "./Calculator.css";
import house2lr from "./img/house2lr.jpg";
import house2mbr from "./img/house2mbr.jpg";
import house2br from "./img/house2br.jpg";
import lphouse15 from "./img/lphouse15.jpg";
import lphouse1 from "./img/lphouse1.jpg";
import lphouse2 from "./img/lphouse2.jpg";
import apt1 from "./img/apartment1.jpg";
import apt2 from "./img/apartment2.jpg";
import apt3 from "./img/apartment3.jpg";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
function HouseInBerwyn(props) {
    const history = useHistory();
  const templateImg = {
    houseImg: house2,
    houseLR: house2lr,
    houseMBR: house2mbr,
    houseBR: house2br,
    althouse: "Mansion",
    altlr: "living room",
    altmbr: "bedroom",
    altbr: "bathroom",
  };
  const psprAgent = {
    agentImg: agent1,
    agentName: "John Ryan",
    aplink: () => {
      history.push("/AgentJohnProfile");
    }
  };
  const card1template = {
    cardImg: house1,
    agentImg: agent1,
    cardTitle: "Mansion on Lorem Ave",
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
    cardImg: apt1,
    agentImg: agent1,
    cardTitle: "Apartment on Lorem Ave",
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
  };

  const card3template = {
    cardImg: house4,
    agentImg: agent1,
    cardTitle: "Mansion on Lorem Ave",
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
    }  
  };
    return (
        <div className="house_in_berwyn">
                  <Fade duration="1210">

<div className="property_hero">
  <ParallaxProvider>
    <ParallaxImg imgsrc={house2} height="75vh"></ParallaxImg>
  </ParallaxProvider>
  <div className="property_hero_flex">
    <div className="property_hero_content">
      <h1>Mansion In Berwyn</h1>
    </div>
  </div>
</div>
</Fade>

<SortByContent />
<ViewProperty
  homeTitle="Mansion on 555 Lorem Ave, Berwyn, PA"
  homeAddress="555 Lorem Ave"
  garages="1"
  ptype="Mansion"
  homePrice="$5,700,000"
  bedrooms="3"
  bathrooms="4"
  sqft="4,500 Sq Ft"
  yearBuilt="2007"
  pagesheroimg={lphouse15}
  templateImg={templateImg}
  psprAgent={psprAgent}
  morelistings="More Listings from John Ryan"
  card1template={card1template}
  card2template={card2template}
  card3template={card3template}
/>
        </div>
    )
}

export default HouseInBerwyn
