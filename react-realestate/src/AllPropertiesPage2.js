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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

function AllPropertiesMansionInFoxchapel(props) {
  return (
    <div>
      <div className="dark_gradient"></div>
      <PagesHero pagesheroTitle="All Listings" headerTitle="All Listings" />
      <div className="all_properties">
        <div className="all_properties_flex">
          <div className="ap_left">
          <CardSingle
              cardImg={house3}
              agentImg={agent1}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$2,300,000"
              bedrooms="4"
              bathrooms="5"
              sqft="5000 SqFt"
              cardimgalt="mansion"

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
              cardimgalt="house"

            />
            <CardSingle
              cardImg={house6}
              agentImg={agent4}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$425,000"
              bedrooms="2"
              bathrooms="2"
              sqft="2,300 SqFt"
              cardimgalt="house"

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
              cardimgalt="house"

            />
            <CardSingle
              cardImg={house16}
              agentImg={agent3}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$4,300,000"
              bedrooms="3"
              bathrooms="4"
              sqft="5,200 SqFt"
              cardimgalt="mansion"

            />
            <CardSingle
              cardImg={house11}
              agentImg={agent3}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$630,000"
              bedrooms="3"
              bathrooms="4"
              sqft="3,900 SqFt"
              cardimgalt="house"

            />
            <CardSingle
              cardImg={house12}
              agentImg={agent4}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Miami, FL 12345, USA"
              cardPrice="$499,999"
              bedrooms="2"
              bathrooms="3"
              sqft="2,850 SqFt"
              cardimgalt="house"

            />
            <div className="ap_pagination">
              <a href="/AllProperties" className="ap_arrow_back">
                <ArrowBackIosIcon />
              </a>
              <a href="/AllProperties" className="ap_1 ap_1_p1">
                1
              </a>
              <a href="/AllPropertiesMansionInFoxchapel" className="ap_2 ap_2_p2">
                2
              </a>
              <a href="/AllPropertiesMansionInFoxchapel" className="ap_arrow_forward">
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

export default AllPropertiesMansionInFoxchapel;
