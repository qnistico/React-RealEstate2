import React from "react";
import mobileoverlay from "./img/mobileoverlay.png";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import "./MobileIcons.css";
import mobileoverlayedit from "./img/mobileoverlayedit.png";
import HouseOutlinedIcon from "@material-ui/icons/HouseOutlined";
import QueryBuilderIcon from "@material-ui/icons/QueryBuilder";
import EventNoteIcon from "@material-ui/icons/EventNote";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import Fade from 'react-reveal/Fade';


function MobileIcons() {
  return (
    <div className="mobile_icons">
      <Fade duration="1050" cascade>
      <h2>Mobile Ready Tours</h2>
      <p className="lp_header_p">
        Want to view a property? Schedule a tour on the go
      </p>
      </Fade>
      <Fade duration="1618" delay="100">

      <div className="mobile_icons_flex">
        <div className="icon_list_left">
          <div className="icon_list_left_item">
            <HouseOutlinedIcon />
            <h3>Nearby Properties</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="icon_list_left_item">
          <i class="far fa-handshake"></i>
            <h3>Trusted Agents</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
        <img
          src={mobileoverlayedit}
          alt="mobile phone"
          className="mobile_phone"
        />
        <div className="icon_list_right">
          <div className="icon_list_right_item">
            <EventNoteIcon />
            <h3>Choose Date</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
          <div className="icon_list_right_item">
            <QueryBuilderIcon />
            <h3>Fast Booking</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor.
            </p>
          </div>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default MobileIcons;
