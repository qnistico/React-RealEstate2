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
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import logoprata from "./img/logoprata.png";
import { useHistory } from "react-router-dom";


function Footer() {
  const history = useHistory();
  return (
    <div>
      <svg
        className="slope2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
      >
        <path
          fill="#2c2c2c"
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
            <a onClick={() => history.push('/')}>
              <img src={logoprata} alt="logo" />
            </a>
          </div>
          <div className="footer_item footer_agents">
            <h3>Agent Listings</h3>
            <ul>
              <li>
                <a onClick={() => history.push('/AgentJohnProfile')}>
                  <img
                    src={agent1}
                    className="footer_avatar"
                    alt="real estate agent"
                  />
                   Listings from John Ryan
                </a>
              </li>
              <li>
                <a onClick={() => history.push('/AgentKevinProfile')}>
                  <img
                    src={agent3}
                    className="footer_avatar"
                    alt="real estate agent"
                  />
                   Listings from Kevin Richmond
                </a>
              </li>
              <li>
                <a onClick={() => history.push('/AgentMaryProfile')}>
                  <img
                    src={agent4}
                    className="footer_avatar"
                    alt="real estate agent"
                  />
                   Listings from Mary Williams
                </a>
              </li>
            </ul>
          </div>
          <div className="footer_item footer_contact">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="#!">
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
                <a href="#!">
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
        <div className="footer_newsletter">
          <h3>Subscribe to our newsletter</h3>
          <form className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email" className="form-control form_input" name="email" aria-label="email" placeholder="Email" />
    </form>
    <a href="#!" className="footer_newsletter_button">Subscribe</a>
        </div>
        <div className="footer_copyright">
          <div className="footer_copyright_flex">
          <p>&copy; 2021 | PA Premium Realty | All Rights Reserved</p>
          <div className="footer_icons">
<a href="https://www.facebook.com/" aria-label="Facebook" target="_blank" rel="noreferrer"><FacebookIcon /></a>
<a href="https://www.instagram.com/" aria-label="Instagram" target="_blank" rel="noreferrer"><InstagramIcon /></a>
<a href="https://twitter.com/" aria-label="Twitter" target="_blank" rel="noreferrer"><TwitterIcon /></a>
<a href="https://www.pinterest.com/" aria-label="Pinterest" target="_blank" rel="noreferrer"><PinterestIcon /></a>
<a href="https://www.linkedin.com/" aria-label="Linkedin" target="_blank" rel="noreferrer"><LinkedInIcon /></a>
          </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
