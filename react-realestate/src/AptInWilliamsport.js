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
import apt2 from "./img/apartment2.jpg";
import apt2exterior from "./img/apartment2exterior.jpg";
import apt2mbr from "./img/apartment2mbr.jpg";
import apt2br from "./img/apartment2br.jpg";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

function AptInWilliamsport(props) {
  const history = useHistory();
    const templateImg = {
        houseImg: apt2exterior,
        houseLR: apt2,
        houseMBR: apt2mbr,
        houseBR: apt2br,
        althouse: "apartment building",
                altlr: "apartment",
                altmbr: "bedroom",
                altbr: "bathroom"
      };
      const psprAgent = {
        agentImg: agent4,
        agentName: "Mary Williams",
        aplink: () => {
      history.push("/AgentMaryProfile");
    }
      };
      const card1template = {
        cardImg: house14,
        agentImg: agent4,
        cardTitle: "House in Somewhere",
        address: "555 Lorem Avenue, Lorem, FL 12345, USA",
        cardPrice: "$4,100,000",
        bedrooms: "4",
        bathrooms: "5",
        sqft: "5,000 SqFt",
        featured: "Featured",
        forsale: "For Sale",
        salerent: "For Sale",
        cardimgalt: "house",
        aplink: () => {
      history.push("/AgentMaryProfile");
    }

      };
    
      const card2template = {
        cardImg: house9,
        agentImg: agent4,
        cardTitle: "Houses in Edgeworth",
        address: "555 Lorem Avenue, Lorem, FL 12345, USA",
        cardPrice: "$680,000",
        bedrooms: "2",
        bathrooms: "4",
        sqft: "3,200 SqFt",
        featured: "Featured",
        forsale: "For Sale",
        plink: () => {
          history.push("/HouseInEdgeworth");
        },
        salerent: "For Sale",
        cardimgalt: "house",
        aplink: () => {
          history.push("/AgentMaryProfile");
        }

      };
    
      const card3template = {
        cardImg: house8,
        agentImg: agent4,
        cardTitle: "House in Oreland",
        address: "555 Lorem Avenue, Lorem, FL 12345, USA",
        cardPrice: "$2,300,000",
        bedrooms: "2",
        bathrooms: "4",
        sqft: "4,900 SqFt",
        featured: "Featured",
        forsale: "For Sale",
        cardimgalt: "house",
        salerent: "For Sale",
        aplink: () => {
          history.push("/AgentMaryProfile");
        },
        plink: () => {
          history.push("/HouseInOreland");
        }

      };
    return (
      <div>
        <Helmet>
        <title>Apartment In Williamsport, PA - PA Premium Realty</title>
        <meta
          name="description"
          content="Apartment in Williamsport PA"
        />
      </Helmet>
        <div className="apt_in_williamsport">
                            <Fade duration="1210">

            <div className="property_hero" >
        <ParallaxProvider>
        <ParallaxImg  imgsrc={apt2} height="75vh">
        
        </ParallaxImg>
      </ParallaxProvider>
        <div className="property_hero_flex">
          <div className="property_hero_content">
            <h1>Apartment In Williamsport</h1>
          </div>
        </div>
      </div>
      </Fade>
      
      <SortByContent />
            <ViewProperty
        homeTitle="Apartment on 555 Lorem Ave, Williamsport, PA"
        homeAddress="555 Lorem Ave"
        homePrice="$1,450 / mo"
        bedrooms="2"
        bathrooms="2"
        sqft="1,650 Sq Ft"
        garages="0"
        ptype="Apartment"
        yearBuilt="2011"
        templateImg={templateImg}
        psprAgent={psprAgent}
        morelistings="More Listings from Mary Williams"
        card1template={card1template}
        card2template={card2template}
        card3template={card3template}
      />
        </div>
        </div>
    )
}

export default AptInWilliamsport
