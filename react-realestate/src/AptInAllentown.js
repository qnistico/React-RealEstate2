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
import house15LR from "./img/house15LR.jpg";
import house15MBR from "./img/house15MBR.jpg";
import house15BR from "./img/house15BR.jpg";
import lphouse15 from "./img/lphouse15.jpg";
import lphouse1 from "./img/lphouse1.jpg";
import lphouse2 from "./img/lphouse2.jpg";
import apt3 from "./img/apartment3.jpg";
import apt3exterior from "./img/apartment3exterior.jpg";
import apt3mbr from "./img/apartment3mbr.jpg";
import apt3br from "./img/apartment3br.jpg";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

function AptInAllentown(props) {
  const history = useHistory();
  const templateImg = {
    houseImg: apt3exterior,
    houseLR: apt3,
    houseMBR: apt3mbr,
    houseBR: apt3br,
    althouse: "apartment building",
    altlr: "apartment",
    altmbr: "bedroom",
    altbr: "bathroom",
  };
  const psprAgent = {
    agentImg: agent3,
    agentName: "Kevin Richmond",
    aplink: () => {
      history.push("/AgentKevinProfile");
    },
  };
  const card1template = {
    cardImg: house10,
    agentImg: agent3,
    cardTitle: "Mansion on Lorem Ave",
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
      history.push("/MansionInSewickleyHeights");
    },
  };

  const card2template = {
    cardImg: house15,
    agentImg: agent3,
    cardTitle: "Mansion on Lorem Ave",
    address: "555 Lorem Avenue, Lorem, FL 12345, USA",
    cardPrice: "$5,700,000",
    bedrooms: "4",
    bathrooms: "5",
    sqft: "7,200 SqFt",
    featured: "Featured",
    plink: () => {
      history.push("/MansionInNorwin");
    },

    forsale: "For Sale",
    salerent: "For Sale",
    cardimgalt: "house",
    aplink: () => {
      history.push("/AgentKevinProfile");
    },
  };

  const card3template = {
    cardImg: house7,
    agentImg: agent3,
    cardTitle: "Mansion on Lorem Ave",
    address: "555 Lorem Avenue, Lorem, FL 12345, USA",
    cardPrice: "$14,000,000",
    bedrooms: "6",
    bathrooms: "7",
    sqft: "13,500 SqFt",
    featured: "Featured",
    forsale: "For Sale",
    plink: () => {
      history.push("/MansionInGladwyne");
    },
    salerent: "For Sale",
    cardimgalt: "house",
    aplink: () => {
      history.push("/AgentKevinProfile");
    },
  };
  return (
    <div className="apt_in_allentown">
      <Fade duration="1210">
        <div className="property_hero">
          <ParallaxProvider>
            <ParallaxImg imgsrc={apt3} height="75vh"></ParallaxImg>
          </ParallaxProvider>
          <div className="property_hero_flex">
            <div className="property_hero_content">
              <h2>Apartment In Allentown</h2>
            </div>
          </div>
        </div>
      </Fade>

      <SortByContent />
      <ViewProperty
        homeTitle="Apartment on 555 Lorem Ave, Allentown, PA"
        homeAddress="555 Lorem Ave"
        garages="0"
        ptype="Apartment"
        homePrice="$1,200 / mo"
        bedrooms="1"
        bathrooms="1"
        sqft="1,200 Sq Ft"
        yearBuilt="2012 "
        pagesheroimg={apt3}
        templateImg={templateImg}
        psprAgent={psprAgent}
        morelistings="More Listings from Kevin Richmond"
        card1template={card1template}
        card2template={card2template}
        card3template={card3template}
      />
    </div>
  );
}

export default AptInAllentown;
