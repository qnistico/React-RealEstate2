import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import MainNav from "./MainNav";
import HeroSlider from "./HeroSlider";
import SortByContent from "./SortByContent";
import LandingPageCards from "./LandingPageCards";
import LandingPageCards1 from "./LandingPageCards1";
import LandingPageCards2 from "./LandingPageCards2";
import ImgOverlay from "./ImgOverlay";
import Agents from "./Agents";
import PhiOverlay from "./PhiOverlay";
import MultiCarousel from "./MultiCarousel";
import Footer from "./Footer";
import ContactOverlay from "./ContactOverlay";
function LandingPage() {
  return (
    <div className="landing_page">
      <HeroSlider />
      <SortByContent />
      <LandingPageCards />
      <Agents />
      <ImgOverlay />
      <PhiOverlay />
      <ContactOverlay />
      <MultiCarousel />
      <Footer />
    </div>
  );
}

export default LandingPage;
