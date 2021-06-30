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
import house10lr from "./img/house10lr.jpg";
import house10mbr from "./img/house10mbr.jpg";
import house10br from "./img/house10br.jpg";
function MansionInSewickleyHeights(props) {
    const templateImg = {
        houseImg: house10,
        houseLR: house10lr,
        houseMBR: house10mbr,
        houseBR: house10br,
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
    
      const card2template = {
        cardImg: house10,
    agentImg: agent3,
    cardTitle: "Mansion on Lorem Ave",
    address: "555 Lorem Avenue, Miami, FL 12345, USA",
    cardPrice: "$5,400,000",
    bedrooms: "4",
    bathrooms: "5",
    sqft: "7,200 SqFt",
    featured: "Featured",
        forsale: "For Sale"
      };
    
      const card3template = {
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
      const card4template = {
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
      const card5template = {
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
    return (
        <div className="house_in_sewickley_heights">
          <div className="property_hero" >
        <ParallaxProvider>
        <ParallaxImg  imgsrc={house10} height="75vh">
        
        </ParallaxImg>
      </ParallaxProvider>
        <div className="property_hero_flex">
          <div className="property_hero_content">
            <h2>Villa In Sewickley Heights</h2>
          </div>
        </div>
      </div>
      
      <SortByContent />
            <ViewProperty
        homeTitle="Mansion on 555 Lorem Ave, Sewickley Heights, PA"
        homeAddress="555 Lorem Ave"
        homePrice="$5,400,000"
        bedrooms="4"
        bathrooms="5"
        sqft="7,200 SqFt"
        garages="2"
        ptype="Villa"
        yearBuilt="2007"
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

export default MansionInSewickleyHeights
