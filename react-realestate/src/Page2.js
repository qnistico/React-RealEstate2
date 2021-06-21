import React, { useState } from 'react';
import {
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBCarouselElement,
    MDBCarouselCaption,
  } from 'mdb-react-ui-kit';
import MainNav from "./MainNav";
import SortByContent from "./SortByContent";
import LandingPageCards from "./LandingPageCards";
import CardSlider from "./CardSlider";
import ImgOverlay from "./ImgOverlay";
import Agents from "./Agents";
import LandingPage from "./LandingPage";
import ViewProperty from './ViewProperty';
import HomeInteriorSlider from "./HomeInteriorSlider";

function Page2(props) {
    return (
        <div className="page_2">
            <MainNav />
            <ViewProperty headerTitle="Mansion on Lorem Ave" homeTitle="Mansion on Lorem Ave" homeAddress="123 Lorem Ave" homePrice="5,200,000" bedrooms="4" bathrooms="5" sqft="6500 SqFt" yearBuilt="2007" />
        </div>
    )
}

export default Page2
