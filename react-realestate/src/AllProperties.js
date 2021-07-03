import React, { useState } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';

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
import birdseye from "./img/birdseye.jpg";
import propertybg from "./img/propertybg.jpg";
import Categories from "./components/Categories";
import SortByContent from "./SortByContent";
import apt1 from "./img/apartment1.jpg";
import apt2 from "./img/apartment2.jpg";
import apt3 from "./img/apartment3.jpg";

function AllProperties(props) {

  function showAllAgents() {
    var showAgents = document.querySelectorAll('div.agent1, div.agent3, div.agent4');
    showAgents.forEach((el) => el.classList.add('show'));
    showAgents.forEach((el) => el.classList.remove('hide'));
  }
  
function showAgent1() {
  var filteragent1 = document.querySelectorAll( 'div.agent3, div.agent4');
  var showa1 = document.querySelectorAll('div.agent1');
  filteragent1.forEach((el) => el.classList.add('hide'));
  filteragent1.forEach((el) => el.classList.remove('show'));
  showa1.forEach((el) => el.classList.add('show'));
  showa1.forEach((el) => el.classList.remove('hide'));
}
function showAgent3() {
  var filteragent3 = document.querySelectorAll( 'div.agent1, div.agent4');
  var showa3 = document.querySelectorAll('div.agent3');

  filteragent3.forEach((el) => el.classList.add('hide'));
  filteragent3.forEach((el) => el.classList.remove('show'));
  showa3.forEach((el) => el.classList.add('show'));
  showa3.forEach((el) => el.classList.remove('hide'));
}
function showAgent4() {
  var filteragent4 = document.querySelectorAll( 'div.agent1, div.agent3');
  var showa4 = document.querySelectorAll('div.agent4');

  filteragent4.forEach((el) => el.classList.add('hide'));
  filteragent4.forEach((el) => el.classList.remove('show'));
  showa4.forEach((el) => el.classList.add('show'));
  showa4.forEach((el) => el.classList.remove('hide'));
}
  function hideApartments() {
    var apartments = document.querySelectorAll(".apartment");
    apartments.forEach((el) => el.classList.add("hide"));
    apartments.forEach((el) => el.classList.remove('show'));
  
    var houses = document.querySelectorAll(".house");
    houses.forEach((el) => el.classList.add("show"));
    houses.forEach((el) => el.classList.remove('hide'));
  
  }
  
  function hideHouses() {
    var houses = document.querySelectorAll(".house");
    houses.forEach((el) => el.classList.add("hide"));
    houses.forEach((el) => el.classList.remove("show"));
  
    var apartments = document.querySelectorAll('.apartment');
    apartments.forEach((el) => el.classList.add('show'));
    apartments.forEach((el) => el.classList.remove('hide'));
    console.log(apartments);
  }
  
  function showAll() {
      var showAllProperties = document.querySelectorAll('.house, .apartment');
      showAllProperties.forEach((el) => el.classList.add('show'));
      showAllProperties.forEach((el) => el.classList.remove('hide'));
  }
  return (
    <div>
          <div className="dark_gradient"></div>

      <PagesHero headerTitle="All Listings" parallaximg1={propertybg}/>
      <div className="sort_table">
            <div className="search_property">
                <div className="icon_flex">
            </div>
            </div>
            <div className="property_sorting">
            <div className="property_list">
            <MDBDropdown>
      <MDBDropdownToggle className="property_dropdown">Property Type</MDBDropdownToggle>
      <MDBDropdownMenu className="property_dropdown_2">
        <MDBDropdownItem>
          <MDBDropdownLink className="filter_btn" onClick={showAll} >All</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink className="filter_btn" onClick={hideApartments} >Homes</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink className="filter_btn" onClick={hideHouses}>Apartments</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
            </div>
            
            <div className="property_price">
            <MDBDropdown>
      <MDBDropdownToggle className="property_dropdown">Price</MDBDropdownToggle>
      <MDBDropdownMenu className="property_dropdown_2">
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Lowest to Highest</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Highest to Lowest</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </div>
            <div className="agent_list">
            <MDBDropdown>
      <MDBDropdownToggle className="property_dropdown">Agents</MDBDropdownToggle>
      <MDBDropdownMenu className="property_dropdown_2">
      <MDBDropdownItem>
          <MDBDropdownLink onClick={showAllAgents}>All Agents</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink onClick={showAgent1}>Agent John Ryan</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink onClick={showAgent3}>Agent Kevin Richmond</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink onClick={showAgent4}>Agent Mary Williams</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </div>
            </div>
            <MDBBtn className="hero_button" href="/AllProperties">Search</MDBBtn>
            
        </div>
      <div className="all_properties">
        <div className="all_properties_flex">
          <div className="ap_left">
            <CardSingle className="filterItem"
              cardImg={house1}
              agentImg={agent1}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Lorem, FL 12345, USA"
              cardPrice="$5,200,000"
              bedrooms="4"
              bathrooms="5"
              sqft="6,500 SqFt"
              cardimgalt="mansion"
              plink="/MansionInFoxchapel"
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent1"
            />
            <CardSingle
              cardImg={apt2}
              agentImg={agent4}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$1450 / mo"
              bedrooms="2"
              bathrooms="2"
              sqft="1650 Sq Ft"
              cardimgalt="apartment"
              featured="Featured"
              forsale="For Rent"
              filteritem="apartment agent4"

            />
            
            <CardSingle
              cardImg={house8}
              agentImg={agent4}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Lorem, FL 12345, USA"
              cardPrice="$2,300,000"
              bedrooms="2"
              bathrooms="4"
              sqft="4,900 SqFt"
              cardimgalt="mansion"
              plink="/HouseInOreland"
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent4"

            />
            <CardSingle
              cardImg={house15}
              agentImg={agent3}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Lorem, FL 12345, USA"
              cardPrice="$5,700,000"
              bedrooms="4"
              bathrooms="5"
              sqft="7,200 SqFt"
              cardimgalt="mansion"
              plink="/MansionInNorwin"
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent3"

            />
            <CardSingle
              cardImg={house10}
              agentImg={agent3}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Lorem, FL 12345, USA"
              cardPrice="$5,400,000"
              bedrooms="4"
              bathrooms="5"
              sqft="7,200 SqFt"
              cardimgalt="mansion"
              plink="/MansionInSewickleyHeights"
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent3"

            />
            <CardSingle
              cardImg={house7}
              agentImg={agent3}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Lorem, FL 12345, USA"
              cardPrice="$14,000,000"
              bedrooms="6"
              bathrooms="7"
              sqft="13,500 SqFt"
              cardimgalt="mansion"
              plink="/MansionInGladwyne"
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent3"

            />
<CardSingle
              cardImg={apt3}
              agentImg={agent3}
              cardTitle=""
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$1200 / mo"
              bedrooms="1"
              bathrooms="1"
              sqft="1200 Sq Ft"
              cardimgalt="apartment"
              featured="Featured"
              forsale="For Rent"
              filteritem="apartment agent3"

            />
            
<CardSingle
              cardImg={apt1}
              agentImg={agent1}
              cardTitle="Apartment on Lorem Ave"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$1400 / mo"
              bedrooms="2"
              bathrooms="1"
              sqft="1400 Sq Ft"
              cardimgalt="apartment"
              featured="Featured"
              forsale="For Rent"
              filteritem="apartment agent1"

            />
            <CardSingle
              cardImg={house3}
              agentImg={agent1}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$2,300,000"
              bedrooms="4"
              bathrooms="5"
              sqft="5000 SqFt"
              cardimgalt="mansion"
              filteritem="house agent1"
              featured="Featured"
              forsale="For Sale"

            />
            <CardSingle
              cardImg={house4}
              agentImg={agent1}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$900,000"
              bedrooms="2"
              bathrooms="3"
              sqft="2750 SqFt"
              cardimgalt="house"
              filteritem="house agent1"
              featured="Featured"
              forsale="For Sale"

            />
            <CardSingle
              cardImg={house2}
              agentImg={agent1}
              cardTitle="Mansion on Lorem Ave"
              address="555 Lorem Avenue, Lorem, FL 12345, USA"
              cardPrice="$1,800,000"
              bedrooms="3"
              bathrooms="4"
              sqft="4500 SqFt"
              cardimgalt="mansion"
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent1"
            />
            
            <CardSingle
              cardImg={house16}
              agentImg={agent3}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$4,300,000"
              bedrooms="3"
              bathrooms="4"
              sqft="5,200 SqFt"
              cardimgalt="mansion"
              filteritem="house agent3"
              featured="Featured"
              forsale="For Sale"


            />
            <CardSingle
              cardImg={house9}
              agentImg={agent4}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Lorem, FL 12345, USA"
              cardPrice="$680,000"
              bedrooms="2"
              bathrooms="4"
              sqft="3,200 SqFt"
              cardimgalt="house"
              plink="/HouseInEdgeworth"
              featured="Featured"
              forsale="For Sale"
              filteritem="house agent4"

            />
            <CardSingle
              cardImg={house12}
              agentImg={agent4}
              cardTitle="Villa on Lorem Street"
              address="555 Lorem Avenue, Lorem, PA 12345, USA"
              cardPrice="$499,999"
              bedrooms="2"
              bathrooms="3"
              sqft="2,850 SqFt"
              cardimgalt="house"
              filteritem="house agent4"
              featured="Featured"
              forsale="For Sale"


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
