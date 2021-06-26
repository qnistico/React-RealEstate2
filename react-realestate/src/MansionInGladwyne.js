import React, { useState } from "react";
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
function MansionInGladwyne() {
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
        aplink: "/AgentKevinProfile"
      };
      const card1template = {
        cardImg: house10,
        agentImg: agent3,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$5,400,000",
        bedrooms: "4",
        bathrooms: "5",
        sqft: "7,200 SqFt",
        featured: "Featured",
            forsale: "For Sale",
      };
    
      const card2template = {
        cardImg: house7,
        agentImg: agent3,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$14,000,000",
        bedrooms: "6",
        bathrooms: "7",
        sqft: "13,500 SqFt",
        featured: "Featured",
            forsale: "For Sale"
      };
    
      const card3template = {
        cardImg: house16,
        agentImg: agent3,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$4,300,000",
        bedrooms: "3",
        bathrooms: "4",
        sqft: "5,200 SqFt",
        featured: "Featured",
            forsale: "For Sale"
      };
      const card4template = {
        cardImg: house11,
        agentImg: agent3,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$630,000",
        bedrooms: "3",
        bathrooms: "4",
        sqft: "3,900 SqFt",
        featured: "Featured",
            forsale: "For Sale"
      };
      const card5template = {
        cardImg: house15,
        agentImg: agent3,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$5,700,000",
        bedrooms: "4",
        bathrooms: "5",
        sqft: "7,200 SqFt",
        featured: "Featured",
            forsale: "For Sale"
      };
    return (
        <div className="mansion_in_gladwyne">
            <ViewProperty
        headerTitle="Mansion on 555 Lorem Ave"
        homeTitle="Mansion on 555 Lorem Ave, Gladwyne, PA"
        homeAddress="555 Lorem Ave"
        homePrice="$14,000,000"
        bedrooms="6"
        bathrooms="7"
        sqft="13,500 SqFt"
        yearBuilt="2003"
        templateImg={templateImg}
        psprAgent={psprAgent}
        morelistings="More Listings from Kevin Richmond"
        card1template={card1template}
        card2template={card2template}
        card3template={card3template}
        card4template={card4template}
        card5template={card5template}
        aplink="/AgentKevinProfile"
      />
        </div>
    )
}

export default MansionInGladwyne
