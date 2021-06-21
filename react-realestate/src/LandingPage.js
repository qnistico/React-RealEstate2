import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import MainNav from "./MainNav";
import HeroSlider from "./HeroSlider";
import SortByContent from "./SortByContent";
import LandingPageCards from "./LandingPageCards";
import LandingPageCards1 from "./LandingPageCards1";
import LandingPageCards2 from "./LandingPageCards2";
import CardSlider from "./CardSlider";
import ImgOverlay from "./ImgOverlay";
import Agents from "./Agents";
import PhiOverlay from "./PhiOverlay";
import { SliderData } from "./SliderData";
import MultiCarousel from "./MultiCarousel";
function LandingPage() {
  return (
    <div className="landing_page">
      <HeroSlider />
      <SortByContent />
      <LandingPageCards />
      <PhiOverlay />
      <ImgOverlay />
      <Agents />
      <MultiCarousel />
    </div>
  );
}

export default LandingPage;
