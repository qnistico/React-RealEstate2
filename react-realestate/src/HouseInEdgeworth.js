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
import house9lr from "./img/house9lr.jpg";
import house9mbr from "./img/house9mbr.jpg";
import house9br from "./img/house9br.jpg";
function HouseInEdgeworth(props) {
    const templateImg = {
        houseImg: house9,
        houseLR: house9lr,
        houseMBR: house9mbr,
        houseBR: house9br,
        althouse: "Mansion",
            altlr: "living room",
            altmbr: "bedroom",
            altbr: "bathroom"
      };
      const psprAgent = {
        agentImg: agent4,
        agentName: "Mary Williams",
        aplink: "/AgentMaryProfile"
      };
      const card1template = {
        cardImg: house8,
        agentImg: agent4,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$1,100,000",
        bedrooms: "2",
        bathrooms: "4",
        sqft: "4,900 SqFt",
        featured: "Featured",
        forsale: "For Sale",
                cardimgalt: "house"

      };
    
      const card2template = {
        cardImg: house6,
        agentImg: agent4,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$425,000",
        bedrooms: "2",
        bathrooms: "2",
        sqft: "2,300 SqFt",
        featured: "Featured",
        forsale: "For Sale",
                cardimgalt: "house"

      };
    
      const card3template = {
        cardImg: house12,
        agentImg: agent4,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$499,999",
        bedrooms: "2",
        bathrooms: "3",
        sqft: "2,850 SqFt",
        featured: "Featured",
        forsale: "For Sale",
                cardimgalt: "house"

      };
      const card4template = {
        cardImg: house14,
        agentImg: agent4,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$4,100,000",
        bedrooms: "4",
        bathrooms: "5",
        sqft: "5,000 SqFt",
        featured: "Featured",
        forsale: "For Sale",
                cardimgalt: "house"

      };
      const card5template = {
        cardImg: house9,
        agentImg: agent4,
        cardTitle: "Mansion on Lorem Ave",
        address: "555 Lorem Avenue, Miami, FL 12345, USA",
        cardPrice: "$680,000",
        bedrooms: "2",
        bathrooms: "4",
        sqft: "3,200 SqFt",
        featured: "Featured",
        forsale: "For Sale",
                cardimgalt: "house"

      };
    return (
        <div className="house_in_edgeworth">
            <ViewProperty
        headerTitle="Mansion on 555 Lorem Ave"
        homeTitle="Mansion on 555 Lorem Ave, EdgeWorth, PA"
        homeAddress="555 Lorem Ave"
        homePrice="$680,000"
        bedrooms="2"
        bathrooms="4"
        sqft="3,200 SqFt"
        yearBuilt="2003"
        templateImg={templateImg}
        psprAgent={psprAgent}
        morelistings="More Listings from Mary Williams"
        card1template={card1template}
        card2template={card2template}
        card3template={card3template}
        card4template={card4template}
        card5template={card5template}
        aplink="/AgentMaryProfile"
      />
        </div>
    )
}

export default HouseInEdgeworth
