import React from "react";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from "mdb-react-ui-kit";
import LandingPageCards from "./LandingPageCards";
import LandingPageCards1 from "./LandingPageCards1";
import LandingPageCards2 from "./LandingPageCards2";
import CardSingle from "./CardSingle";

function CardSlider() {
  return (
    <div>
      <MDBCarousel showIndicators showControls fade interval={5000}>
          <MDBCarouselItem itemId={0}>
            <LandingPageCards />
          </MDBCarouselItem>

          <MDBCarouselItem itemId={1}>
            <LandingPageCards1 />
          </MDBCarouselItem>

          <MDBCarouselItem itemId={2}>
            <LandingPageCards2 />
          </MDBCarouselItem>
      </MDBCarousel>
    </div>
  );
}

export default CardSlider;
