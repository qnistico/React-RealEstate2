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
import house14lr from "./img/house14lr.jpg";
import house14mbr from "./img/house14mbr.jpg";
import house14br from "./img/house14br.jpg";
import lphouse15 from "./img/lphouse15.jpg";
import lphouse1 from "./img/lphouse1.jpg";
import lphouse2 from "./img/lphouse2.jpg";
import apt1 from "./img/apartment1.jpg";
import apt2 from "./img/apartment2.jpg";
import apt3 from "./img/apartment3.jpg";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
function MansionInMalvern(props) {
    const history = useHistory();
  const templateImg = {
    houseImg: house14,
    houseLR: house14lr,
    houseMBR: house14mbr,
    houseBR: house14br,
    althouse: "Mansion",
    altlr: "living room",
    altmbr: "bedroom",
    altbr: "bathroom",
  };
  const psprAgent = {
    agentImg: agent4,
    agentName: "Mary Williams",
    aplink: () => {
      history.push("/AgentMaryProfile");
    },
  };
  const card1template = {
    cardImg: apt2,
    agentImg: agent4,
    cardTitle: "Apartment in Williamsport",
    address: "555 Lorem Avenue, Lorem, PA 12345, USA",
    cardPrice: "$1450/mo",
    bedrooms: "2",
    bathrooms: "2",
    sqft: "1650 Sq Ft",
    featured: "Featured",
    forsale: "For Rent",
    salerent: "For Rent",
    cardimgalt: "apartment",
    aplink: () => {
      history.push("/AgentMaryProfile");
    },
    plink: () => {
      history.push("/AptInWilliamsport");
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
        <div className="mansion_in_malvern">
            <Helmet>
        <title>Mansion in Malvern, PA - PA Premium Realty</title>
        <meta
          name="description"
          content="Mansion in Malvern PA"
        />
      </Helmet>
      <div className="malvern_mansion">
        <Fade duration="1210">
          <div className="property_hero">
            <ParallaxProvider>
              <ParallaxImg imgsrc={house14} height="75vh"></ParallaxImg>
            </ParallaxProvider>
            <div className="property_hero_flex">
              <div className="property_hero_content">
                <h1>Mansion In Malvern</h1>
              </div>
            </div>
          </div>
        </Fade>

        <ViewProperty
          homeTitle="Mansion on 555 Lorem Ave, Norwin, PA"
          homeAddress="555 Lorem Ave"
          garages="2"
          ptype="Mansion"
          homePrice="$4,100,000"
          bedrooms="4"
          bathrooms="5"
          sqft="5,000 Sq Ft"
          yearBuilt="2015"
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

export default MansionInMalvern
