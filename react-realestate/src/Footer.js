import { Business, Laptop, PhoneEnabled, MailOutline } from "@material-ui/icons";
import React from "react";
import FeaturedListings from "./FeaturedListings";
import "./Footer.css";
import agent1 from './img/agent1.jpg';
import agent3 from './img/agent3.jpg';
import agent4 from './img/agent4.jpg';
import logo1 from "./img/logo1.png";

function Footer() {
  return (
    <div>
      <footer>
        <div className="footer_flex">
          <div className="footer_item footer_description">
            <h4>About</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </p>
            <a href="/"><img src={logo1} alt="" /></a>
          </div>
          <div className="footer_item footer_agents">
            <h4>Agent Listings</h4>
            <ul>
              <a href="/AgentJohnProfile"><img src={agent1} className="footer_avatar" alt="agent John Ryan" /><li>John Ryan's Listings</li></a>
              <a href="!#"><img src={agent3} className="footer_avatar" alt="agent Kevin Richmond" /><li>Kevin Richmond' Listings</li></a>
              <a href="!#"><img src={agent4} className="footer_avatar" alt="agent Mary Williams" /><li>Meridith Williams' Listings</li></a>
            </ul>
          </div>
          <div className="footer_item footer_contact">
            <h4>Contact</h4>
            <ul>
              <a href="!#"><li><Business />12345 Lorem, Sunshine Boulevard, PA 19053</li></a>
              <a href="tel: 1234561235"><li><PhoneEnabled />(123)-456-1235</li></a>
              <a href="mailto: example@gmail.com"><li><MailOutline />example@gmail.com</li></a>
              <a href="!#"><li><Laptop />Company Name</li></a>
            </ul>
          </div>
          <div className="footer_item footer_properties">
            <h4>Featured Listings</h4>
            <ul>
              <FeaturedListings />
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
