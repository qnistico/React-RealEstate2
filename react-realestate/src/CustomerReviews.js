import React from "react";
import customerimg1 from "./img/customerreviewsimg1.jpg";
import customerimg2 from "./img/customerreviewsimg2.jpg";
import customerimg3 from "./img/customerreviewsimg3.jpg";
import StarIcon from "@material-ui/icons/Star";
import "./CustomerReviews.css";


function CustomerReviews() {
  return (
    <div className="customer_reviews">
        <svg className="slope1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#f1f2f5" fill-opacity="1" d="M0,96L1440,192L1440,0L0,0Z"></path></svg>
      <h2>Customer Reviews</h2>
      <p className="lp_header_p">Read what our customers are saying about FL Premium Realty and our agents.</p>
      <div className="customer_reviews_flex">
        <div className="cr_item">
            <div className="cr_img_flex">
            <img src={customerimg1} alt="" />
            <div>
            <p className="cr_name">Kaitlin McKinney</p>
            <p className="cr_profession">Profession</p>
            </div>
            </div>
            <p className="cr_review">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            <div className="customer_stars">
            <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          </div>
        </div>
        <div className="cr_item">
            <div className="cr_img_flex">
            <img src={customerimg2} alt="" />
            <div>
            <p className="cr_name">Kaitlin McKinney</p>
            <p className="cr_profession">Profession</p>
            </div>
            </div>
            <p className="cr_review">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            <div className="customer_stars">
            <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          </div>
        </div>

        <div className="cr_item">
            <div className="cr_img_flex">
            <img src={customerimg3} alt="" />
            <div>
            <p className="cr_name">Kaitlin McKinney</p>
            <p className="cr_profession">Profession</p>
            </div>
            </div>
            <p className="cr_review">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            <div className="customer_stars">
            <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomerReviews;
