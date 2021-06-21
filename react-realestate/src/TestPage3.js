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
import ImgOverlay from "./ImgOverlay";
import Agents from "./Agents";
import LandingPage from "./LandingPage";
import ViewProperty from './ViewProperty';
import HomeInteriorSlider from "./HomeInteriorSlider";
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
import LRinterior1 from "./img/LRinterior1.jpg";

function TestPage3(props) {
    const templateImg = {
        exteriorImg: "./img/house14.jpg",
        livingroomImg: "./img/house1.jpg",
        bedroomImg: "./img/house2.jpg",
        bathroomImg: "./img/house13.jpg"
      }
    return (
        <div className="page_3">
            <ViewProperty headerTitle="Mansion on Lorem Ave" homeTitle="Mansion on Lorem Ave" homeAddress="123 Lorem Ave" homePrice="5,200,000" bedrooms="4" bathrooms="5" sqft="6500 SqFt" yearBuilt="2007" templateImg={templateImg}/>
        </div>
    )
}

export default TestPage3
