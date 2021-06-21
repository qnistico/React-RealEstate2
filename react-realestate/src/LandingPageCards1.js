import React from "react";
import "@material-ui/core";
import "@material-ui/icons";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import SquareFootOutlinedIcon from "@material-ui/icons/SquareFootOutlined";
import KingBedOutlinedIcon from "@material-ui/icons/KingBedOutlined";
import house1 from './img/house1.jpg';
import house2 from './img/house2.jpg';
import house3 from './img/house3.jpg';
import house4 from './img/house4.jpg';
import house5 from './img/house5.jpg';
import house6 from './img/house6.jpg';

function LandingPageCards1() {
    
  return (
    <div className="lp_cards">
      <div className="lp_cards_flex">
        <div className="lp_cards_body">
          <div className="card_img_container"><img
            src={house4}
            alt=""
          />
          </div>
          <div className="lp_cards_content">
            <div className="lp_cards_top">
              <a href="#!" className="lp_cards_title">
                Luxury Mansion
              </a>
              <a href="#!" className="lp_cards_location">
                555 Lorem Avenue, Miami, FL 12345, USA
              </a>
            </div>
            <div className="lp_cards_center">
                <div className="icon_info_flex">
              <p>Bedrooms</p>
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
              <p>4,500 Sq Ft</p>
              </div>
              </div>
            </div>
            <div className="lp_cards_bottom">
              <p>For Sale</p>
              <p className="card_price">$3,200,000</p>
            </div>
          </div>
        </div>
        <div className="lp_cards_body">
          <div className="card_img_container"><img
            src={house5}
            alt=""
          />
          </div>
          <div className="lp_cards_content">
            <div className="lp_cards_top">
              <a href="#!" className="lp_cards_title">
                Luxury Mansion
              </a>
              <a href="#!" className="lp_cards_location">
                555 Lorem Avenue, Miami, FL 12345, USA
              </a>
            </div>
            <div className="lp_cards_center">
                <div className="icon_info_flex">
              <p>Bedrooms</p>
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
              <p>3500 Sq Ft</p>
              </div>
              </div>
            </div>
            <div className="lp_cards_bottom">
              <p>For Sale</p>
              <p className="card_price">$3,200,000</p>
            </div>
          </div>
        </div>
        <div className="lp_cards_body">
          <div className="card_img_container"><img
            src={house6}
            alt=""
          />
          </div>
          <div className="lp_cards_content">
            <div className="lp_cards_top">
              <a href="#!" className="lp_cards_title">
                Luxury Mansion
              </a>
              <a href="#!" className="lp_cards_location">
                555 Lorem Avenue, Miami, FL 12345, USA
              </a>
            </div>
            <div className="lp_cards_center">
                <div className="icon_info_flex">
              <p>Bedrooms</p>
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
              <p>5000 Sq Ft</p>
              </div>
              </div>
            </div>
            <div className="lp_cards_bottom">
              <p>For Sale</p>
              <p className="card_price">$3,200,000</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageCards1;
