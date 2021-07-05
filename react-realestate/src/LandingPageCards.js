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
import Fade from 'react-reveal/Fade';
import { useHistory } from "react-router-dom";



function LandingPageCards() {
  const history = useHistory()

  return (
    <div>
      <div className="lp_cards">
        <Fade duration="1050" cascade>
        <h2>Recent Properties</h2>
        <p className="lp_header_p">View some of our most recent listings</p>
        </Fade>
        <div className="lp_cards_flex lpcf_1">
          <div className="lp_cards_body">
            <div className="card_img_container">
              <a onClick={() => history.push('/MansionInNorwin')}>
                <img src={house15} alt="house" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Sale</p>

              <div className="card_img_agent">
                <a onClick={() => history.push('/AgentKevinProfile')}
>
                  <Avatar src={agent3} alt="real estate agent" />
                </a>
              </div>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a onClick={() => history.push('/MansionInNorwin')} className="lp_cards_title">
                  Mansion in Norwin
                </a>
                <a onClick={() => history.push('/MansionInNorwin')} className="lp_cards_location">
                  555 Lorem Avenue, Norwin, PA 12345, USA
                </a>
                <p>
                  A fabulous villa in Norwin, Pennsylvania located conveniently
                  near a train station and...
                  <a onClick={() => history.push('/MansionInNorwin')} className="more_button">
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>4</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>5</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>7,200 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">$5,700,000</p>
                </div>
                <a onClick={() => history.push('/MansionInNorwin')} className="lp_cards_button">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="lp_cards_body">
            <div className="card_img_container">
              <a onClick={() => history.push('/MansionInGladwyne')}>
                <img src={house7} alt="house" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Sale</p>

              <a onClick={() => history.push('/AgentKevinProfile')}
 className="card_img_agent">
                <Avatar src={agent3} alt="real estate agent" />
              </a>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a onClick={() => history.push('/MansionInGladwyne')} className="lp_cards_title">
                  Mansion in Gladywne
                </a>
                <a href="#!" className="lp_cards_location">
                  555 Lorem Avenue, Gladwyne, PA 12345, USA
                </a>
                <p>
                  A fabulous villa in Gladwyne, PA located near various transportation outlets like...
                  <a onClick={() => history.push('/MansionInGladwyne')} className="more_button">
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>6</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>7</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>13,500 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">$14,000,000</p>
                </div>
                <a onClick={() => history.push('/MansionInGladwyne')} className="lp_cards_button">
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="lp_cards_body">
            <div className="card_img_container">
              <a onClick={() => history.push('/MansionInFoxchapel')}>
                <img src={house1} alt="house" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Sale</p>

              <a onClick={() => history.push('/AgentJohnProfile')}
 className="card_img_agent">
                <Avatar src={agent1} alt="real estate agent" />
              </a>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a href="#!" className="lp_cards_title">
                  Villa in Foxchapel
                </a>
                <a href="#!" className="lp_cards_location">
                  555 Lorem Avenue, Foxchapel, PA 12345, USA
                </a>
                <p>
                  A fabulous villa in Foxchapel complete with a spectacular view
                  of the...
                  <a onClick={() => history.push('/MansionInFoxchapel')} className="more_button">
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>4</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>5</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>6,500 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">$5,200,000</p>
                </div>
                <a onClick={() => history.push('/MansionInFoxchapel')} className="lp_cards_button">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="lp_cards_body">
            <div className="card_img_container">
              <a onClick={() => history.push('/HouseInEdgeworth')}>
                <img src={house9} alt="house" />
              </a>
              <p className="featured_badge">Recent</p>
              <p className="for_sale_badge">For Sale</p>

              <a onClick={() => history.push('/AgentMaryProfile')}
 className="card_img_agent">
                <Avatar src={agent4} alt="real estate agent" />
              </a>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a onClick={() => history.push('/HouseInEdgeworth')} className="lp_cards_title">
                  House In Edgeworth
                </a>
                <a onClick={() => history.push('/HouseInEdgeworth')} className="lp_cards_location">
                  555 Lorem Avenue, Edgeworth, PA 12345, USA
                </a>
                <p>
                  A fabulous villa in PA with a gorgeous front yard, back yard and...
                  <a onClick={() => history.push('/HouseInEdgeworth')} className="more_button">
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
                    <p>4</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>3,200 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">$680,000</p>
                </div>
                <a onClick={() => history.push('/HouseInEdgeworth')} className="lp_cards_button">
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="lp_cards_body">
            <div className="card_img_container">
              <a onClick={() => history.push('/MansionInSewickleyHeights')}>
                <img src={house10} alt="house" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Sale</p>

              <a onClick={() => history.push('/AgentKevinProfile')}
 className="card_img_agent">
                <Avatar src={agent3} alt="real estate agent" />
              </a>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a onClick={() => history.push('/MansionInSewickleyHeights')} className="lp_cards_title">
                  Villa in Sewickley Heights
                </a>
                <a
                  onClick={() => history.push('/MansionInSewickleyHeights')}
                  className="lp_cards_location"
                >
                  555 Lorem Ave, Sewickley Heights, PA 12345, USA
                </a>
                <p>
                  A fabulous villa in PA located conveniently near a train
                  station, beach and...
                  <a onClick={() => history.push('/MansionInSewickleyHeights')} className="more_button">
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>4</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>5</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>7,200 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">$5,400,000</p>
                </div>
                <a
                  onClick={() => history.push('/MansionInSewickleyHeights')}
                  className="lp_cards_button"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="lp_cards_body">
            <div className="card_img_container">
              <a onClick={() => history.push('/HouseInOreland')}>
                <img src={house8} alt="mansion" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Sale</p>

              <a onClick={() => history.push('/AgentMaryProfile')}
 className="card_img_agent">
                <Avatar src={agent4} alt="real estate agent" />
              </a>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a href="#!" className="lp_cards_title">
                  Mansion in Oreland
                </a>
                <a href="#!" className="lp_cards_location">
                  555 Lorem Avenue, Oreland, PA 12345, USA
                </a>
                <p>
                  Large home in Oreland, PA complete with 45 acres of land
                  with...
                  <a onClick={() => history.push('/HouseInOreland')} className="more_button">
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
                    <p>4</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>4,900 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">$2,300,000</p>
                </div>
                <a onClick={() => history.push('/HouseInOreland')} className="lp_cards_button">
                  View
                </a>
              </div>
            </div>
          </div>
          <a href="/AllProperties" className="hero_button">View All Listings</a>
        </div>
      </div>
    </div>
  );
}

export default LandingPageCards;
