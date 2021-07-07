import React, { useState, useEffect } from "react";
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
import LPBlog from "./LPBlog";
import CustomerReviews from "./CustomerReviews";
import OverlayCarousel from "./OverlayCarousel";
import PhiOverlay2 from "./PhiOverlay2";
import {
  Widget,
  addResponseMessage,
  addLinkSnippet,
  addUserMessage,
} from "react-chat-widget";
import "./ChatWidget.css";
import MobileIcons from "./MobileIcons";
import Fade from "react-reveal/Fade";
import LandingPageApts from "./LandingPageApts";

function LandingPage() {
  useEffect(() => {
    
    addResponseMessage("Welcome to PA Premium Realty. How can we help you?");
  }, []);

  const handleNewUserMessage = (newMessage) => {
    addResponseMessage(
      "Thank you for your interest in our services.  A representative will be with you shortly."
    );
  };
  return (
    <div className="landing_page">
        <HeroSlider />
      <SortByContent />
      <LandingPageApts />

      <OverlayCarousel />
      <LandingPageCards />

      <PhiOverlay />

      <Agents />
      <PhiOverlay2 />

      <ContactOverlay />
      <MobileIcons />
      <LPBlog />
      <CustomerReviews />
      <MultiCarousel />
      <Widget
        handleNewUserMessage={handleNewUserMessage}
        title="Hello!"
        subtitle="How can we help you?"
        senderPlaceHolder="Your message..."
        profileAvatar="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=334&q=80"
        addResponseMessage={addResponseMessage}
      />
      <Footer />
    </div>
  );
}

export default LandingPage;
