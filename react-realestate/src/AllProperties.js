import React, { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
  MDBDropdownLink,
} from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";

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
import birdseye from "./img/birdseye.jpg";
import propertybg from "./img/propertybg.jpg";
import SortByContent from "./SortByContent";
import apt1 from "./img/apartment1.jpg";
import apt2 from "./img/apartment2.jpg";
import apt3 from "./img/apartment3.jpg";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

function AllProperties(props) {
  const history = useHistory();

  return (
    <div>
      <div className="dark_gradient"></div>

      <PagesHero headerTitle="All Listings" parallaximg1={propertybg} />
      <SortByContent />
      <div className="all_properties">
        <div className="all_properties_flex">
          <div className="ap_left">
            <CardSingle
              className="filterItem"
              cardImg={house1}
              agentImg={agent1}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$5,200,000"
              bedrooms="4"
              bathrooms="5"
              sqft="6,500 Sq Ft"
              cardimgalt="mansion"
              plink={() => history.push('/MansionInFoxchapel')}
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent1"
              propertyprice="p14"
              salerent="For Sale"
              aplink={() => history.push('/AgentJohnProfile')}
            />
            <CardSingle
              cardImg={apt2}
              agentImg={agent4}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$1450 / mo"
              bedrooms="2"
              bathrooms="2"
              sqft="1,650 Sq Ft"
              cardimgalt="apartment"
              featured="Featured"
              forsale="For Rent"
              filteritem="apartment agent4"
              propertyprice="p13"
              salerent="For Rent"
              aplink={() => history.push('/AgentMaryProfile')}
              plink={() => history.push('/AptInWilliamsport')}


            />

            <CardSingle
              cardImg={house8}
              agentImg={agent4}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$2,300,000"
              bedrooms="2"
              bathrooms="4"
              sqft="4,900 Sq Ft"
              cardimgalt="mansion"
              plink={() => history.push('/HouseInOreland')}
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent4"
              propertyprice="p12"
              salerent="For Sale"
              aplink={() => history.push('/AgentMaryProfile')}


            />
            <CardSingle
              cardImg={house15}
              agentImg={agent3}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$5,700,000"
              bedrooms="4"
              bathrooms="5"
              sqft="7,200 Sq Ft"
              cardimgalt="mansion"
              plink={() => history.push('/MansionInNorwin')}
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent3"
              propertyprice="p11"
              salerent="For Sale"
              aplink={() => history.push('/AgentKevinProfile')}


            />
            <CardSingle
              cardImg={house10}
              agentImg={agent3}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$5,400,000"
              bedrooms="4"
              bathrooms="5"
              sqft="7,200 Sq Ft"
              cardimgalt="mansion"
              plink={() => history.push('/MansionInSewickleyHeights')}
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent3"
              propertyprice="p10"
              salerent="For Sale"
              aplink={() => history.push('/AgentKevinProfile')}


            />
            <CardSingle
              cardImg={house7}
              agentImg={agent3}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$14,000,000"
              bedrooms="6"
              bathrooms="7"
              sqft="13,500 Sq Ft"
              cardimgalt="mansion"
              plink={() => history.push('/MansionInGladwyne')}
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent3"
              propertyprice="p9"
              salerent="For Sale"
              aplink={() => history.push('/AgentKevinProfile')}


            />
            <CardSingle
              cardImg={apt3}
              agentImg={agent3}
              cardTitle="Apartment in Allentown"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$1,200 / mo"
              bedrooms="1"
              bathrooms="1"
              sqft="1,200 Sq Ft"
              cardimgalt="apartment"
              featured="Featured"
              forsale="For Rent"
              filteritem="apartment agent3"
              propertyprice="p8"
              salerent="For Rent"
              aplink={() => history.push('/AgentKevinProfile')}
              plink={() => history.push('/AptInAllentown')}


            />

            <CardSingle
              cardImg={apt1}
              agentImg={agent1}
              cardTitle="Apartment In Philadelphia"
              address="555 Lorem Avenue, Philadelphia, PA 12345, USA"
              cardPrice="$1,400 / mo"
              bedrooms="2"
              bathrooms="1"
              sqft="1,400 Sq Ft"
              cardimgalt="apartment"
              featured="Featured"
              forsale="For Rent"
              filteritem="apartment agent1"
              propertyprice="p7"
              salerent="For Rent"
              aplink={() => history.push('/AgentJohnProfile')}
              plink={() => history.push('/AptInPhiladelphia')}


            />
            
            <CardSingle
              cardImg={house4}
              agentImg={agent1}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$900,000"
              bedrooms="2"
              bathrooms="3"
              sqft="2,750 Sq Ft"
              cardimgalt="house"
              filteritem="house agent1"
              featured="Featured"
              forsale="For Sale"
              propertyprice="p5"
              salerent="For Sale"
              aplink={() => history.push('/AgentJohnProfile')}
              plink={() => history.push("/HouseInPennWynne")}


            />
            <CardSingle
              cardImg={house2}
              agentImg={agent1}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$1,800,000"
              bedrooms="3"
              bathrooms="4"
              sqft="4,500 Sq Ft"
              cardimgalt="mansion"
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent1"
              propertyprice="p4"
              salerent="For Sale"
              aplink={() => history.push('/AgentJohnProfile')}
              plink={() => history.push("/HouseInBerwyn")}


            />

            <CardSingle cardImg= {house14}
        agentImg= {agent4}
        cardTitle= "Mansion on Lorem Ave"
        address= "555 Lorem Avenue Lorem PA 12345 USA"
        cardPrice= "$4,100,000"
        bedrooms= "4"
        bathrooms= "5"
        sqft= "5,000 Sq Ft"
        featured= "Featured"
        forsale= "For Sale"
        cardimgalt= "house"
        salerent= "For Sale"
        filteritem="house agent4"
        aplink={() => history.push('/AgentMaryProfile')}

        />
        
        

            
            <CardSingle
              cardImg={house9}
              agentImg={agent4}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$680,000"
              bedrooms="2"
              bathrooms="4"
              sqft="3,200 Sq Ft"
              cardimgalt="house"
              plink={() => history.push('/HouseInEdgeworth')}
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent4"
              propertyprice="p2"
              salerent="For Sale"
              aplink={() => history.push('/AgentMaryProfile')}

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
