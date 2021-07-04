import React from 'react';
import PhiImage2 from "./img/phioverlay2.jpg";
import Fade from "react-reveal/Fade";


function PhiOverlay2() {
    return (
        <div className="phi_overlay">
                <Fade duration="1618" delay="100">

            <div className="phi_overlay_flex phi_overlay_flex_reverse">
        <img src={PhiImage2} alt="female real estate agent with skyscraper" />
        <div className="phi_overlay_content">
          <h3>Expert Real Estate Agents</h3>
          <p>Our team of highly qualified real estate agents will help find the property right for you.</p>
          <a href="#!" className="hero_button">Read More</a>
        </div>
      </div>
      </Fade>
        </div>
    )
}

export default PhiOverlay2
