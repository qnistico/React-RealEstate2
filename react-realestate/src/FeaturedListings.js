import React from "react";
import "./FeaturedListings.css";
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

function FeaturedListings() {
  return (
    <div className="featured_listings">
      <div className="featured_listings_flex">
          <div className="featured_item">
        <div className="featured_img">
          <a href="/MansionInGladwyne"><img src={house7} alt="house" /></a>
        </div>
        <div className="featured_content">
          <a href="/MansionInGladwyne">Mansion In Gladwyne</a>
          <p>$14,000,000</p>
        </div>
        </div>
        <div className="featured_item">
        <div className="featured_img">
          <a href="/MansionInFoxchapel"><img src={house1} alt="house" /></a>
        </div>
        <div className="featured_content">
          <a href="/MansionInFoxchapel">Villa In Foxchapel</a>
          <p>$5,200,000</p>
        </div>
        </div>
        <div className="featured_item">
        <div className="featured_img">
          <a href="/HouseInOreland"><img src={house8} alt="house" /></a>
        </div>
        <div className="featured_content">
          <a href="/HouseInOreland">Mansion In Oreland</a>
          <p>$2,300,000</p>
        </div>
        </div>
        <div className="featured_item">
        <div className="featured_img">
          <a href="/MansionInNorwin"><img src={house15} alt="house" /></a>
        </div>
        <div className="featured_content">
          <a href="/MansionInNorwin">Mansion In Norwin</a>
          <p>$5,700,000</p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedListings;
