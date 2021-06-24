import React from "react";
import HomeInteriorSlider from "./HomeInteriorSlider";
import MeetingRoomIcon from "@material-ui/icons/MeetingRoom";
import DirectionsCarIcon from "@material-ui/icons/DirectionsCar";
import CheckIcon from "@material-ui/icons/Check";
import EventNoteIcon from "@material-ui/icons/EventNote";
import AccessibleForwardOutlinedIcon from "@material-ui/icons/AccessibleForwardOutlined";
import PropertyViewAgent from "./PropertyViewAgent";
import VPForm from "./VPForm";
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
import SidebarCards from "./SidebarCards";
import LandingPageSingleCard from "./LandingPageSingleCard";
import TestCarousel from "./TestCarousel";
import FeaturedListings from "./FeaturedListings";
import Footer from "./Footer";
import MortgageCalculator from "@herilsaha/mortgage-calculator";
import "./Calculator.css";
import PagesHero from "./PagesHero";
import "./AllProperties.css";
import AllAgentsSidebar from "./AllAgentsSidebar";
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";

function AllProperties(props) {
  return (
    <div>
      <PagesHero />
      <div className="all_properties">
        <div className="all_properties_flex">
          <div className="ap_left">
            <CardSingle
              cardImg={house1}
              agentImg={agent1}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$5,200,000"
              bedrooms="4"
              bathrooms="5"
              sqft="6,500 SqFt"
            />
            <CardSingle
              cardImg={house2}
              agentImg={agent1}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$1,800,000"
              bedrooms="3"
              bathrooms="4"
              sqft="4500 SqFt"
            />
            <CardSingle
              cardImg={house3}
              agentImg={agent1}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$2,300,000"
              bedrooms="4"
              bathrooms="5"
              sqft="5000 SqFt"
            />
            <CardSingle
              cardImg={house4}
              agentImg={agent1}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$900,000"
              bedrooms="2"
              bathrooms="3"
              sqft="2750 SqFt"
            />
            <CardSingle
              cardImg={house5}
              agentImg={agent1}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$650,000"
              bedrooms="2"
              bathrooms="3"
              sqft="2300 SqFt"
            />
          </div>
          <div className="ap_sidebar">
            <div className="ap_sidebar_item">
              <h3>Our Agents</h3>
              <AllAgentsSidebar
                agentSBImg={agent1}
                agentSBName="John Ryan"
                agentSBPhone="(123)-456-1235"
              />
            </div>
            <div className="ap_sidebar_item">
              <FeaturedListings />
            </div>
            <div className="ap_sidebar_item">
              <MortgageCalculator />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProperties;
