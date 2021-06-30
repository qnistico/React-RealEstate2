import React from "react";
import PhiImage from "./img/phioverlay.jpg";
import PhiImage2 from "./img/phioverlay2.jpg";
import { MDBBtn } from "mdb-react-ui-kit";


function PhiOverlay() {
  return (
    <div className="phi_overlay">
      <svg className="slope1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#f1f2f5" fill-opacity="1" d="M0,96L1440,192L1440,0L0,0Z"></path></svg>
      <div className="phi_overlay_flex">
        <img src={PhiImage} alt="male real estate agent with skyscraper" />
        <div className="phi_overlay_content">
          <h3>Expert Real Estate Agents</h3>
          <p>Our team of highly qualified real estate agents will help find the property right for you</p>
          <MDBBtn href="#!" className="hero_button phi_button">Read More</MDBBtn>
        </div>
      </div>
      
    </div>
  );
}

export default PhiOverlay;
