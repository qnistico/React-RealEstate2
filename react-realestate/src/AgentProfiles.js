import {
  EmailOutlined,
  Laptop,
  MailOutline,
  Phone,
  PhoneAndroid,
  PhoneInTalk,
} from "@material-ui/icons";
import React, { useState } from "react";
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";
import "./AgentProfiles.css";
import PagesHero from "./PagesHero";
import VpForm from "./VPForm";
import CardSingle from "./CardSingle";
import house1 from "./img/house1.jpg";
import house2 from "./img/house2.jpg";
import house3 from "./img/house3.jpg";
import house4 from "./img/house4.jpg";
import house5 from "./img/house5.jpg";
import house6 from "./img/house6.jpg";
import house7 from "./img/house7.jpg";
import house8 from "./img/house8.jpg";
import house9 from "./img/house9.jpg";
import FeaturedListings from "./FeaturedListings";

function AgentJohnRyan(props) {
  return (
    <div>
      <PagesHero />
      <div className="agent_profile">
        <div className="agent_profile_flex">
          <div className="ap_primary_left">
            <div className="appl_top">
              <img src={props.agentImg} alt="" />
              <div className="agent_info_top">
                <h1>{props.agentName}</h1>
                <p className="agent_position">Real Estate Agent</p>
                <p><span className="color">5</span> Listed Properties</p>
                <div className="agent_icons_top">
                  <a href="tel:1234561234">
                    <PhoneInTalk />
                    (123)-456-1234
                  </a>
                  <a href="tel:1234561234">
                    <PhoneAndroid />
                    (123)-456-1234
                  </a>
                  <a href="mailto:example@gmail.com">
                    <MailOutline />
                    example@gmail.com
                  </a>
                  <a href="#!">
                    <Laptop />
                    www.website.com
                  </a>
                </div>
              </div>
            </div>
            <div className="appl_buttons">
              <a href="tel: 1234561234"><Phone /> Call (123)-456-1234</a>
              <a href="mailto: example@gmail.com"><EmailOutlined /> example@gmail.com</a>
              <a href="#!"><Laptop /> Website</a>
            </div>
            <hr />
            <div className="about_agent">
              <h3>About Me</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <div className="agent_contact">
              <h3>Contact Me</h3>
              <VpForm />
            </div>
            <div className="agent_listings">
              <h3>My Listings</h3>
              <CardSingle cardImg={house1} agentImg={agent1} cardTitle="Mansion on Lorem Ave" address="555 Lorem Avenue, Miami, FL 12345, USA" cardPrice="$5,200,000" sqft="6,500 SqFt" />
            <CardSingle cardImg={house2} agentImg={agent1} cardTitle="Mansion on Lorem Ave" address="555 Lorem Avenue, Miami, FL 12345, USA" cardPrice="$1,800,000" sqft="4500 SqFt" />
            <CardSingle cardImg={house3} agentImg={agent1} cardTitle="Mansion on Lorem Ave" address="555 Lorem Avenue, Miami, FL 12345, USA" cardPrice="$2,300,000" sqft="5000 SqFt" />
            <CardSingle cardImg={house4} agentImg={agent1} cardTitle="Mansion on Lorem Ave" address="555 Lorem Avenue, Miami, FL 12345, USA" cardPrice="$900,000" sqft="2750 SqFt" />
              <CardSingle cardImg={house5} agentImg={agent1} cardTitle="Villa on Lorem Street" address="555 Lorem Avenue, Miami, FL 12345, USA" cardPrice="$650,000" sqft="2300 SqFt" />
            </div>
          </div>
          <div className="ap_primary_right">
            <div className="appr_item">
            <h3>Featured Listings</h3>
            <FeaturedListings />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AgentJohnRyan;
