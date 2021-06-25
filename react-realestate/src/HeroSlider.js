import React from "react";
import "./App.css";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";
import SearchIcon from "@material-ui/icons/Search";
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
import lphouse1 from "./img/lphouse1.jpg";
import lphouse2 from "./img/lphouse2.jpg";
import lphouse11 from "./img/lphouse11.jpg";

function HeroSlider() {
  return (
    <div>
      <div className="hero_container">
        <div className="hero_content">
          <h1>Florida Realty</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor.
          </p>
          <MDBBtn className="hero_button">Read More</MDBBtn>
        </div>
      </div>
      <div className="hero_slider">
        <MDBCarousel showIndicators showControls fade interval={5000}>
          <MDBCarouselInner>
            <MDBCarouselItem itemId={0}>
              <MDBCarouselElement src={house15} alt="..." />
            </MDBCarouselItem>

            <MDBCarouselItem itemId={1}>
              <MDBCarouselElement src={house1} alt="..." />
            </MDBCarouselItem>

            <MDBCarouselItem itemId={2}>
              <MDBCarouselElement src={house2} alt="..." />
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>
      </div>
    </div>
  );
}

export default HeroSlider;
