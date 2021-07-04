import React from "react";
import { CheckBoxOutlineBlankOutlined, Hotel } from "@material-ui/icons";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import SquareFootOutlinedIcon from "@material-ui/icons/SquareFootOutlined";
import "./OverlayCarouselCard.css";
import { Avatar } from "@material-ui/core";
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";


function OverlayCarouselCard(props) {
  return (
    <div className="oc_card">
      <div className="oc_card_flex">
        <div className="oc_card_img">
          <a href={props.plink}>
          <img src={props.occimg} alt="house" />
          </a>
          <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Sale</p>
        </div>
        <div className="oc_card_content">
          <div className="oc_card_top">
            <a href={props.plink} className="oc_card_title">
              {props.occtitle}
            </a>
            <p className="oc_card_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="oc_cards_center">
              <div className="occ_flex">
            <div className="oc_icon_info_flex">
              <div className="lp_icon_flex">
                <Hotel className="card_icon" />
                <p>{props.occbedrooms}</p>
              </div>
            </div>
            <div className="lp_icon_info_flex ml-1">
              <div className="lp_icon_flex">
                <BathtubOutlinedIcon className="card_icon" />
                <p>{props.occbathrooms}</p>
              </div>
            </div>
            <div className="lp_icon_info_flex ml-1">
              <div className="lp_icon_flex">
                <CheckBoxOutlineBlankOutlined className="card_icon" />
                <p>{props.occsqft}</p>
              </div>
            </div>
            </div>
            <div className="oc_card_bottom_2">
              <a href={props.aplink}>
          <Avatar src={props.occbottomagent} alt="real estate agent" />
          </a>
<div className="oc_card_bottom_2_info">
    <p>Sold By</p>
    <p>{props.occbottomname}</p>
</div>
          </div>
          </div>
          <div className="oc_card_bottom">
            <div className="occb_left">
              <p>For Sale</p>
              <p className="card_price">{props.occprice}</p>
            </div>
            <a href={props.plink} className="hero_button oc_card_button">
              View Property
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default OverlayCarouselCard;
