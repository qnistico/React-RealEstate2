import React from 'react';
import PhiImage2 from "./img/phioverlay2.jpg";
import { MDBBtn } from "mdb-react-ui-kit";
import Fade from "react-reveal/Fade";


function PhiOverlay2() {
    return (
        <div className="phi_overlay">
                <Fade duration="1210">

            <div className="phi_overlay_flex phi_overlay_flex_reverse">
        <img src={PhiImage2} alt="female real estate agent with skyscraper" />
        <div className="phi_overlay_content">
          <h3>Expert Real Estate Agents</h3>
          <p>Our team of highly qualified real estate agents will help find the property right for you.</p>
          <button href="#!" className="hero_button phi_button">Read More</button>
        </div>
      </div>
      </Fade>
        </div>
    )
}

export default PhiOverlay2
