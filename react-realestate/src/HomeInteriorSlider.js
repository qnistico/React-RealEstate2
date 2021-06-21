import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
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

function HomeInteriorSlider(props) {
    return (
        <div className="home_interior_slider">
            <MDBCarousel showIndicators showControls fade interval={5000} className="wtf">
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src={props.houseImg} alt='...' />
          
        </MDBCarouselItem>

        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src={props.houseLR} alt='...' />
          
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src={props.houseMBR} alt='...' />
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <MDBCarouselElement src={props.houseBR} alt='...' />
          
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
        </div>
    )
}

export default HomeInteriorSlider
