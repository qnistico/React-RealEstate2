import React from "react";
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
import { Avatar } from "@material-ui/core";
import agent1 from "./img/agent1.jpg";
import agent2 from "./img/agent2.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";
import { CheckBoxOutlineBlankOutlined, Hotel } from "@material-ui/icons";
import "./CarouselCards.css";

function CarouselCards(props) {
    return (
      <div className="ccsc">
      <div className="cc_single_card carousel_single_card">
      <div className="card_img_container cccic">
        <a href="/MansionInFoxchapel"><img src={props.cardImg} alt={props.cardimgalt} /></a>
              <p className="for_sale_badge">For Sale</p>
        <a href="/MansionInFoxchapel" className="card_img_agent">
          <Avatar src={props.agentImg} alt="real estate agent" />
        </a>
      </div>
      <div className="cc_cards_content">
        <div className="cc_cards_top">
          <a href="#!" className="cc_cards_title">
            {props.cardTitle}
          </a>
          <a href="#!" className="cc_cards_location">
            {props.address}
          </a>
          <p>A fabulous villa in Pennsylvania located conveniently near a train station, beach and...<a href="/MansionInFoxchapel" className="more_button">[more]</a></p>
        </div>
        <div className="cc_cards_center">
          <div className="cc_icon_info_flex">
            <div className="cc_icon_flex">
              <Hotel className="card_icon" />
              <p>{props.bedrooms}</p>
            </div>
          </div>
          <div className="cc_icon_info_flex ml-1">
            <div className="cc_icon_flex">
              <BathtubOutlinedIcon className="card_icon" />
              <p>{props.bathrooms}</p>
            </div>
          </div>
          <div className="cc_icon_info_flex ml-1">
            <div className="cc_icon_flex">
              <CheckBoxOutlineBlankOutlined className="card_icon" />
              <p>{props.sqft}</p>
            </div>
          </div>
        </div>
        <div className="cc_cards_bottom">
          <div>
            <p>For Sale</p>
            <p className="card_price">{props.cardPrice}</p>
          </div>
          <a href="/MansionInFoxchapel" className="lp_cards_button">
            View
          </a>
        </div>
      </div>
    </div>
  </div>
    )
}

export default CarouselCards
