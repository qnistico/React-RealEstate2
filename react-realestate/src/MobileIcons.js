import React from "react";
import mobileoverlay from "./img/mobileoverlay.png";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import "./MobileIcons.css";
import mobileoverlayedit from "./img/mobileoverlayedit.png";

function MobileIcons() {
  return (
    <div className="mobile_icons">
      <h2>Mobile Ready Tours</h2>
      <p className="lp_header_p">
        Want to view a property? Schedule a tour on the go
      </p>
      <div className="mobile_icons_flex">
        <div className="icon_list_left">
          
          <div className="icon_list_left_item">
            <PhoneAndroidIcon />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="icon_list_left_item">
            <PhoneAndroidIcon />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
          <img src={mobileoverlayedit} alt="mobile phone" className="mobile_phone" />
        <div className="icon_list_right">
          
          <div className="icon_list_right_item">
            <PhoneAndroidIcon />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
          <div className="icon_list_right_item">
            <PhoneAndroidIcon />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileIcons;
