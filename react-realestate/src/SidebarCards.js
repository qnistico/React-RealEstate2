import React from 'react';
import "@material-ui/core";
import "@material-ui/icons";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import SquareFootOutlinedIcon from "@material-ui/icons/SquareFootOutlined";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import house4 from "./img/house4.jpg";
import house5 from "./img/house5.jpg";
import house6 from "./img/house6.jpg";
import house7 from "./img/house7.jpg";
import house8 from "./img/house8.jpg";
import house9 from "./img/house9.jpg";
import { Avatar } from '@material-ui/core';

function SidebarCards(props) {
    return (
        <div>
          <div className="sidebar_cards">
            <div className="sidebar_cards_body">
            <div className="card_img_container">
              <a href="/Page2"><img src={props.cardImg} alt="" /></a>
              <a href="/Page2" className="card_img_agent">
                <Avatar src={props.agentImg} />
              </a>
            </div>
          <div className="sidebar_cards_content">
            <div className="sidebar_cards_top">
              <a href="#!" className="sidebar_cards_title">
                {props.cardTitle}
              </a>
              <a href="#!" className="sidebar_cards_location">
                {props.address}
              </a>
            </div>
            <div className="sidebar_cards_center">
                <div className="icon_info_flex">
              <p className="ml_1">Bedrooms</p>
              <div className="icon_flex">
              <KingBedOutlinedIcon className="card_icon" />
              <p>3</p>
              </div>
              </div>
              <div className="icon_info_flex">
              <p className="ml_1">Bathrooms</p> 
              <div className="icon_flex">
              <BathtubOutlinedIcon className="card_icon" />
              <p>3</p>
              </div>
              </div>
              <div className="icon_info_flex">
              <p className="ml_1">Area</p>
              <div className="icon_flex">
              <SquareFootOutlinedIcon className="card_icon" />
              <p>{props.sqft}</p>
              </div>
              </div>
            </div>
            <div className="sidebar_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">{props.cardPrice}</p>
                </div>
                <a href="/Page2" className="sidebar_cards_button">
                  View
                </a>
              </div>
          </div>
        </div>
        </div>
        </div>
    )
}

export default SidebarCards
