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
import house7lr from "./img/house7lr.jpg";
import house7mbr from "./img/house7mbr.jpg";
import house7br from "./img/house7br.jpg";
import lphouse7 from "./img/lphouse7.jpg";
import apt1 from "./img/apartment1.jpg";
import apt2 from "./img/apartment2.jpg";
import apt3 from "./img/apartment3.jpg";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

function MansionInGladwyne(props) {
  const history = useHistory();
  const templateImg = {
    houseImg: house7,
    houseLR: house7lr,
    houseMBR: house7mbr,
    houseBR: house7br,
    althouse: "Mansion",
    altlr: "living room",
    altmbr: "bedroom",
    altbr: "bathroom"
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
      history.push("/MansionInSewickleyHeights");
    }
  };

  const card2template = {
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
    salerent: "For Sale",
    cardimgalt: "house",
    aplink: () => {
      history.push("/AgentKevinProfile");
    },
    plink: () => {
      history.push("/MansionInNorwin");
    }
  };

  const card3template = {
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
      history.push("/AptInAllentown");
    }
  };

  return (
    <div>
      <Helmet>
        <title>Mansion in Gladwyne, PA - PA Premium Realty</title>
        <meta
          name="description"
          content="Mansion in Gladwyne PA"
        />
      </Helmet>
    <div className="mansion_in_gladwyne">
                  <Fade duration="1210">

      <div className="property_hero">
        <ParallaxProvider>
          <ParallaxImg imgsrc={lphouse7} height="75vh"></ParallaxImg>
        </ParallaxProvider>
        <div className="property_hero_flex">
          <div className="property_hero_content">
            <h1>Mansion In Gladwyne</h1>
          </div>
        </div>
      </div>
      </Fade>

      <ViewProperty
        homeTitle="Mansion on 555 Lorem Ave, Gladwyne, PA"
        homeAddress="555 Lorem Ave"
        homePrice="$14,000,000"
        bedrooms="6"
        bathrooms="7"
        sqft="13,500 SqFt"
        garages="3"
        ptype="Mansion"
        yearBuilt="2003"
        templateImg={templateImg}
        psprAgent={psprAgent}
        morelistings="More Listings from Kevin Richmond"
        card1template={card1template}
        card2template={card2template}
        card3template={card3template}
      />
    </div>
    </div>
  );
}

export default MansionInGladwyne;
