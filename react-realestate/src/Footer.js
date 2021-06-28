import {
  Business,
  Laptop,
  PhoneEnabled,
  MailOutline,
} from "@material-ui/icons";
import React from "react";
import FeaturedListings from "./FeaturedListings";
import "./Footer.css";
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";
import logo1 from "./img/logo1.png";

function Footer() {
  return (
    <div>
      <svg
        className="slope2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
      >
        <path
          fill="#091f33"
          fill-opacity="1"
          d="M0,96L1440,192L1440,0L0,0Z"
        ></path>
      </svg>
      <footer>
        <div className="footer_flex">
          <div className="footer_item footer_description">
            <h3>About</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis.
            </p>
            <a href="/">
              <img src={logo1} alt="logo" />
            </a>
          </div>
          <div className="footer_item footer_agents">
            <h3>Agent Listings</h3>
            <ul>
              <li>
                <a href="/AgentJohnProfile">
                  <img
                    src={agent1}
                    className="footer_avatar"
                    alt="real estate agent"
                  />
                  John Ryan's Listings
                </a>
              </li>
              <li>
                <a href="/AgentKevinProfile">
                  <img
                    src={agent3}
                    className="footer_avatar"
                    alt="real estate agent"
                  />
                  Kevin Richmond' Listings
                </a>
              </li>
              <li>
                <a href="/AgentMaryProfile">
                  <img
                    src={agent4}
                    className="footer_avatar"
                    alt="real estate agent"
                  />
                  Meridith Williams' Listings
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_item footer_contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="!#">
                  <Business />
                  12345 Lorem, Sunshine Boulevard, PA 19053
                </a>
              </li>
              <li>
                <a href="tel: 1234561235">
                  <PhoneEnabled />
                  (123)-456-1235
                </a>
              </li>
              <li>
                <a href="mailto: example@gmail.com">
                  <MailOutline />
                  example@gmail.com
                </a>
              </li>
              <li>
                <a href="!#">
                  <Laptop />
                  Company Name
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_item footer_properties">
            <h3>Featured Listings</h3>
            <div>
              <FeaturedListings />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
