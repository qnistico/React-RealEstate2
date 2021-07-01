import React from 'react';
import "@material-ui/core";
import "@material-ui/icons";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import house4 from "./img/house4.jpg";
import house5 from "./img/house5.jpg";
import house6 from "./img/house6.jpg";
import house7 from "./img/house7.jpg";
import house8 from "./img/house8.jpg";
import house9 from "./img/house9.jpg";
import { Avatar } from '@material-ui/core';
import { CheckBoxOutlineBlankOutlined, Hotel } from '@material-ui/icons';

function CardSingle(props) {
    return (
        <div>
          <div className="single_cards">
            <div className={props.filterItem}>
            <div className="single_cards_body vp_single_cards">
            <div className="sc_img_container">
              <a href={props.plink}><img src={props.cardImg} alt={props.cardimgalt} /></a>
              <p className="featured_badge">{props.featured}</p>
              <p className="for_sale_badge">{props.forsale}</p>

              <a href={props.plink} className="card_img_agent">
                <Avatar src={props.agentImg} alt="real estate agent" />
              </a>
            </div>
          <div className="single_cards_content">
            <div className="sc_top_center_flex">
            <div className="single_cards_top">
              <a href={props.plink} className="single_cards_title">
                {props.cardTitle}
              </a>
              <a href={props.plink} className="single_cards_location">
                {props.address}
              </a>
              <p>A fabulous villa in Pennsylvania located conveniently near a train station, beach and...{props.description}<a href={props.plink} className="more_button">[more]</a></p>
            </div>
            <div className="single_cards_center">
                <div className="icon_info_flex">
              <div className="icon_flex">
              <Hotel className="card_icon" />
              <p>{props.bedrooms}</p>
              </div>
              </div>
              <div className="icon_info_flex">
              <div className="icon_flex">
              <BathtubOutlinedIcon className="card_icon" />
              <p>{props.bathrooms}</p>
              </div>
              </div>
              <div className="icon_info_flex">
              <div className="icon_flex">
              <CheckBoxOutlineBlankOutlined className="card_icon" />
              <p>{props.sqft}</p>
              </div>
              </div>
              </div>
            </div>
            <div className="single_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">{props.cardPrice}</p>
                </div>
                <a href={props.plink} className="single_cards_button hero_button">
                  View
                </a>
              </div>
          </div>
        </div>
        </div>
        </div>
        </div>
    )
}

export default CardSingle
