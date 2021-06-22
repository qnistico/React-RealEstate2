import React from "react";
import PhiImage from "./img/phioverlay.png";
import PhiImage2 from "./img/phioverlay2.png";

function PhiOverlay() {
  return (
    <div className="phi_overlay">
      <div className="phi_overlay_flex">
        <img src={PhiImage} alt="" />
        <div className="phi_overlay_content">
          <h3>Expert Real Estate Agents</h3>
          <p>Our team of highly qualified real estate agents will help find the property right for you.</p>
          <a href="#!" className="hero_button">Read More</a>
        </div>
      </div>
      <div className="phi_overlay_flex phi_overlay_flex_reverse">
        <img src={PhiImage2} alt="" />
        <div className="phi_overlay_content">
          <h3>Expert Real Estate Agents</h3>
          <p>Our team of highly qualified real estate agents will help find the property right for you.</p>
          <a href="#!" className="hero_button">Read More</a>
        </div>
      </div>
    </div>
  );
}

export default PhiOverlay;
