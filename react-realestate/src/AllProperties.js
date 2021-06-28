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
import house16 from "./img/house16.jpg";
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
import AllPropertiesPage2 from "./AllPropertiesPage2";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function AllProperties(props) {
  return (
    <div>
          <div className="dark_gradient"></div>

      <PagesHero headerTitle="All Listings" />
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
              cardimgalt="mansion"
              propertylink="/MansionInFoxchapel"
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
              cardimgalt="mansion"
            />
            <CardSingle
              cardImg={house8}
              agentImg={agent4}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$1,100,000"
              bedrooms="2"
              bathrooms="4"
              sqft="4,900 SqFt"
              cardimgalt="mansion"
            />
            <CardSingle
              cardImg={house15}
              agentImg={agent3}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$5,700,000"
              bedrooms="4"
              bathrooms="5"
              sqft="7,200 SqFt"
              cardimgalt="mansion"
              propertylink="/MansionInNorwin"
            />
            <CardSingle
              cardImg={house10}
              agentImg={agent3}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$5,400,000"
              bedrooms="4"
              bathrooms="5"
              sqft="7,200 SqFt"
              cardimgalt="mansion"
              propertylink="/MansionInSewickleyHeights"
            />
            <CardSingle
              cardImg={house7}
              agentImg={agent3}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$14,000,000"
              bedrooms="6"
              bathrooms="7"
              sqft="13,500 SqFt"
              cardimgalt="mansion"
              propertylink="/MansionInGladwyne"
            />

            <CardSingle
              cardImg={house9}
              agentImg={agent4}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$680,000"
              bedrooms="2"
              bathrooms="4"
              sqft="3,200 SqFt"
              cardimgalt="house"
              propertylink="/HouseInEdgeworth"
            />

            <CardSingle
              cardImg={house14}
              agentImg={agent4}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$4,100,000"
              bedrooms="4"
              bathrooms="5"
              sqft="5,000 SqFt"
              cardimgalt="mansion"
            />
            <div className="ap_pagination">
              <a href="/AllProperties" className="ap_arrow_back">
                <ArrowBackIosIcon />
              </a>
              <a href="/AllProperties" className="ap_1">
                1
              </a>
              <a href="/AllPropertiesPage2" className="ap_2">
                2
              </a>
              <a href="/AllPropertiesPage2" className="ap_arrow_forward">
                <ArrowForwardIosIcon />
              </a>
            </div>
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
              <h3>Featured Listings</h3>
              <FeaturedListings />
            </div>
            <div className="ap_sidebar_item">
              <h3>Mortgage Calculator</h3>
              <MortgageCalculator />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AllProperties;
