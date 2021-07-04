import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "@material-ui/core";
import "@material-ui/icons";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import SquareFootOutlinedIcon from "@material-ui/icons/SquareFootOutlined";
import house1 from "./img/house1.jpg";
import house2 from "./img/house2.jpg";
import house3 from "./img/house3.jpg";
import house4 from "./img/house4.jpg";
import house5 from "./img/house5.jpg";
import house6 from "./img/house6.jpg";
import house7 from "./img/house7.jpg";
import house8 from "./img/house8.jpg";
import house9 from "./img/house9.jpg";
import house10 from "./img/house10.jpg";
import house11 from "./img/house11.jpg";
import house12 from "./img/house12.jpg";
import house13 from "./img/house13.jpg";
import house14 from "./img/house14.jpg";
import house15 from "./img/house15.jpg";
import house16 from "./img/house16.jpg";
import { Avatar } from "@material-ui/core";
import agent1 from "./img/agent1.jpg";
import agent2 from "./img/agent2.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";
import { CheckBoxOutlineBlankOutlined, Hotel } from "@material-ui/icons";
import CardSingle from "./CardSingle";
import Fade from 'react-reveal/Fade';
import apt1 from "./img/apartment1.jpg";
import apt2 from "./img/apartment2.jpg";
import apt3 from "./img/apartment3.jpg";

function LandingPageApts(props) {
    return (
        <div className="lp_apts">
                    <Fade duration="1050" cascade>

            <h2>For Rent</h2>
            <p className="lp_header_p">View our apartments for rent</p>
            </Fade>
            <Fade duration="1618" delay="100">

            <div className="lp_apts_flex">
            <div className="lp_cards_body">
            <div className="card_img_container">
              <a href="/AptInPhiladelphia">
                <img src={apt1} alt="apartment" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Rent</p>

              <div className="card_img_agent">
                <a href="/AgentJohnProfile">
                  <Avatar src={agent1} alt="real estate agent" />
                </a>
              </div>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a href="/AptInPhiladelphia" className="lp_cards_title">
                  Apartment in Philadelphia
                </a>
                <a href="/AptInPhiladelphia" className="lp_cards_location">
                  555 Lorem Ave, Philadelphia, PA 12345, USA
                </a>
                <p>
                  Spacious and affordable apartment in Philadelphia, PA.  Complete with...
                  <a href="/AptInPhiladelphia" className="more_button">
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>2</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>1</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>1,400 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Rent</p>
                  <p className="card_price">$1,400 / mo</p>
                </div>
                <a href="/AptInPhiladelphia" className="lp_cards_button">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="lp_cards_body">
            <div className="card_img_container">
              <a href="/AptInAllentown">
                <img src={apt3} alt="house" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Rent</p>

              <div className="card_img_agent">
                <a href="/AgentKevinProfile">
                  <Avatar src={agent3} alt="real estate agent" />
                </a>
              </div>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a href="/AptInAllentown" className="lp_cards_title">
                  Apartment in Allentown
                </a>
                <a href="/AptInAllentown" className="lp_cards_location">
                  555 Lorem Avenue, Allentown, PA 12345, USA
                </a>
                <p>
                Spacious and affordable apartment in Philadelphia, PA.  Complete with...
                  <a href="/AptInAllentown" className="more_button">
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>1</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>1</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>1,200 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Rent</p>
                  <p className="card_price">$1,200 / mo</p>
                </div>
                <a href="/AptInAllentown" className="lp_cards_button">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="lp_cards_body">
            <div className="card_img_container">
              <a href="/AptInWilliamsport">
                <img src={apt2} alt="apartment" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Rent</p>

              <div className="card_img_agent">
                <a href="/AgentMaryProfile">
                  <Avatar src={agent4} alt="real estate agent" />
                </a>
              </div>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a href="/AptInWilliamsport" className="lp_cards_title">
                  Apartment in Williamsport
                </a>
                <a href="/AptInWilliamsport" className="lp_cards_location">
                  555 Lorem Ave, Williamsport, PA 12345, USA
                </a>
                <p>
                Spacious and affordable apartment in Philadelphia, PA.  Complete with...
                  <a href="/AptInWilliamsport" className="more_button">
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>2</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>2</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>1,650 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Rent</p>
                  <p className="card_price">$1,450 / mo</p>
                </div>
                <a href="/AptInWilliamsport" className="lp_cards_button">
                  View
                </a>
              </div>
            </div>
          </div>
            </div>
            </Fade>
        </div>
    )
}

export default LandingPageApts
