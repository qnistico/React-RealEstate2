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
import lphouse15 from "./img/lphouse15.jpg";
import lphouse1 from "./img/lphouse1.jpg";
import lphouse2 from "./img/lphouse2.jpg";
import lphouse7 from "./img/lphouse7.jpg";
import { useHistory } from "react-router-dom";
import Fade from "react-reveal/Fade";

function HeroSlider() {
  const history = useHistory();

  return (
    <div>
      <Fade duration="1210">
        <div className="dark_gradient"></div>
        <div className="hero_container">
          
        </div>
        
        <div className="hero_slider">
          <div className="hero_content_flex">
          <div className="hero_content">
            <h1>Pennsylvania Realty</h1>
            <p>
              We sell premium real estate in Pennsylvania ranging from rural to
              urban locations. Mansions, homes and apartments... We've got it
              all. Consult one of our agents to schedule a tour.
            </p>
            <MDBBtn
              onClick={() => history.push("/AllProperties")}
              className="hero_button"
            >
              View All Listings
            </MDBBtn>
          </div>
          </div>
          <MDBCarousel showIndicators showControls fade interval={5000}>
            <MDBCarouselInner>
              <MDBCarouselItem itemId={0}>
                <MDBCarouselElement src={lphouse15} alt="mansion" />
              </MDBCarouselItem>
{/*
              <MDBCarouselItem itemId={1}>
                <MDBCarouselElement src={lphouse7} alt="mansion" />
              </MDBCarouselItem>

              <MDBCarouselItem itemId={2}>
                <MDBCarouselElement src={lphouse2} alt="mansion" />
              </MDBCarouselItem>
*/}
            </MDBCarouselInner>
          </MDBCarousel>
        </div>
      </Fade>
    </div>
  );
}

export default HeroSlider;
