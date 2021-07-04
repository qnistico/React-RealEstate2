import React, { useState } from "react";
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
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';


function ViewProperty(props) {
  const reactElement = (
    <div>
      <MortgageCalculator />
    </div>
  );
  return (
    <div>
    <div className="dark_gradient"></div>
    <div className="view_property">

      <div className="property_showcase">
        <div className="property_showcase_flex">
          <div className="ps_primary_left">
            <div className="pspl_top">
              <div>
                <h1 className="pspl_title">{props.homeTitle}</h1>
                <p className="property_address">{props.homeAddress}</p>
              </div>
              <div>
                <p>For Sale</p>
                <p className="property_price">{props.homePrice}</p>
              </div>
            </div>
            <hr className="pspl_hr" />
            <HomeInteriorSlider {...props.templateImg} />

            <div className="pspl_description">
              <h3>Overview</h3>
              <div className="pspl_description_top">
                <div className="pspl_icon_flex">
                  <HomeOutlinedIcon />
                <h4>Property Type</h4>
                  <h5>{props.ptype}</h5>
                </div>
                <div className="pspl_icon_flex">
                  <KingBedOutlined />
                  <p>Bedrooms</p>
                  <p>{props.bedrooms}</p>
                </div>
                <div className="pspl_icon_flex">
                  <BathtubOutlined />
                  <p>Bathrooms</p>
                  <p>{props.bathrooms}</p>
                </div>
                <div className="pspl_icon_flex">
                  <CheckBoxOutlineBlankOutlined />
                  <p>Area</p>
                  <p>{props.sqft}</p>
                </div>
                <div className="pspl_icon_flex">
                  <DirectionsCar />
                  <p>Garages</p>
                  <p>{props.garages}</p>
                </div>
                <div className="pspl_icon_flex">
                  <EventNoteIcon />
                  <p>Year Built</p>
                  <p>{props.yearBuilt}</p>
                </div>
              </div>
            </div>
            <div className="pspl_summary">
              <h3>Summary</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo.
              </p>
            </div>
            <div className="pspl_features">
              <div className="pspl_features_item">
                <h3>Interior Details</h3>
                <p>
                  <KitchenOutlined />
                  Modern Kitchen
                </p>
                <p>
                  <Fireplace />
                  Fireplace
                </p>{" "}
                <p>
                  <FitnessCenter />
                  Gym
                </p>
                <p>
                  <BathtubOutlined />
                  Jacuzzi
                </p>
                <p>
                  <i className="fas fa-couch"></i>Lounge Room
                </p>
                <p>
                  <SportsEsportsOutlined />
                  Game Room
                </p>
              </div>
              <div className="pspl_features_item">
                <h3>Exterior Details</h3>
                <p>
                  <PoolOutlined />
                  Large Pool
                </p>
                <p>
                  <FilterVintageOutlined />
                  Front Yard
                </p>
                <p>
                  <LocalFloristOutlined />
                  Back Yard
                </p>
                <p>
                  <i className="fas fa-warehouse"></i>Garage
                </p>
                <p>
                  <SportsTennis />
                  Tennis Court
                </p>
                <p>
                  <DeckOutlined />
                  Porch
                </p>
              </div>
              <div className="pspl_features_item">
                <h3>Utilities</h3>
                <p>
                  <FlashOnOutlined />
                  Electricity
                </p>
                <p>
                  <LocalDrinkOutlined />
                  Water
                </p>
                <p>
                  <i className="fas fa-temperature-low"></i>Air Conditioning
                </p>
                <p>
                  <i className="fas fa-fire-alt"></i>Heating
                </p>
                <p>
                  <i className="fas fa-wind"></i>Central Air
                </p>
                <p>
                  <LocalGasStationOutlined />
                  Natural Gas
                </p>
              </div>
              <div className="pspl_features_item">
                <h3>Additional Features</h3>
                <p>
                  <AlarmOutlined />
                  Smoke Detectors
                </p>
                <p>
                  <LocalLaundryServiceOutlined />
                  Washer & Dryer
                </p>
                <p>
                  <LocalLaundryServiceOutlined />
                  Washer & Dryer
                </p>
                <p>
                  <AccessibleForwardOutlinedIcon />
                  Wheelchair Accessible
                </p>
                <p>
                  <i className="fas fa-fire-extinguisher"></i>Fire Extinguisher
                </p>
                <p>
                  <NetworkWifiOutlined />
                  Wifi
                </p>
              </div>
            </div>
            <div className="google_maps">
              <h3>Property Location</h3>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6402.289532358501!2d-80.21163895982946!3d25.765165481805656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sLorem%2C%20FL!5e0!3m2!1sen!2sus!4v1624050037325!5m2!1sen!2sus"></iframe>
            </div>
            <div className="pspl_similar_properties">
              <h3>{props.morelistings}</h3>
              <div className="pspl_similar_flex">
                <CardSingle {...props.card1template} />
                <CardSingle {...props.card2template} />
                <CardSingle {...props.card3template} />
              </div>
            </div>
          </div>
          <div className="ps_primary_right">
            <div className="pspr_item">
              <PropertyViewAgent {...props.psprAgent}  />
            </div>
            <div className="pspr_featured pspr_item">
              <h3>Featured Listings</h3>
              <FeaturedListings />
            </div>
            <div className="pspr_item">
              <h3>Contact</h3>
              <VPForm title="Request Viewing" />
            </div>
            <div className="pspr_item">
              <h3>Mortgage Calculator</h3>
              <MortgageCalculator />
            </div>
            <div className="pspr_cards pspr_item">
              <div className="pspr_card">
                <LandingPageSingleCard cardImage={house1} />
              </div>
              <LandingPageSingleCard cardImage={house5} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </div>
  );
}

export default ViewProperty;
