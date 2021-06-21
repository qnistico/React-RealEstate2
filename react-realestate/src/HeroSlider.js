import React from 'react';
import './App.css';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
import { MDBBtn } from 'mdb-react-ui-kit';
import { MDBInput } from 'mdb-react-ui-kit';
import SearchIcon from '@material-ui/icons/Search';
import house1 from "./img/house1.jpg";
import house2 from "./img/house2.jpg";
import house3 from "./img/house3.jpg";
import house4 from "./img/house4.jpg";
import house5 from "./img/house5.jpg";
import house6 from "./img/house6.jpg";
import house7 from "./img/house7.jpg";
import house8 from "./img/house8.jpg";
import house9 from "./img/house9.jpg";




function HeroSlider() {
  return (
      <div>
      <div className="hero_container">
          <div className="hero_content">
              <h1>Real Estate</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor.</p>
              <MDBBtn className="hero_button">Read More</MDBBtn>
          </div>
      </div>
      <div className="hero_slider">
    <MDBCarousel showIndicators showControls fade interval={5000}>
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src={house1} alt='...' />
          
        </MDBCarouselItem>

        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src={house2} alt='...' />
          
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src={house3} alt='...' />
          
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
    </div>
    </div>
  );
}

export default HeroSlider