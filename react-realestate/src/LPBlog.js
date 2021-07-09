import React from "react";
import blogheroimg from "./img/blogheroimg.jpg";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import "./LPBlog.css";
import blogimg1 from "./img/blogimg1.jpg";
import blogimg3 from "./img/blogimg3.jpg";
import Fade from 'react-reveal/Fade';
import { useHistory } from "react-router-dom";


function LPBlog() {
  const history = useHistory();
  return (
    <div>
    <svg
        className="slope_reverse"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
      >
        <path
          fill="#fafafa"
          fill-opacity="1"
          d="M0,96L1440,192L1440,0L0,0Z"
        ></path>
      </svg>
    <div className="lp_blog">
      <h2>PA Realty Blog</h2>
      <p className="lp_header_p">Looking for informational strategies on buying real estate? Read our blog to learn more</p>
      <Fade duration="1200" delay="0">

      <div className="lp_blog_flex">
        <div className="lpb_item">
          <div className="blog_img">
            <a onClick={() => history.push("/BuyingAHome")}>
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                alt="living room"
              />
            </a>
          </div>
          <div className="blog_item_content">
            <a onClick={() => history.push("/BuyingAHome")} className="blog_title">
              Buying Homes
            </a>
            <p className="blog_date">01/01/2021</p>
            <p className="blog_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor...
            </p>
            <a onClick={() => history.push("/BuyingAHome")} className="blog_button ">
              Read More <ArrowForwardIosIcon />
            </a>
          </div>
        </div>
        <div className="lpb_item">
          <div className="blog_img">
            <a onClick={() => history.push("/BuyingAHome")}>
              <img
                src={blogimg1}
                alt="town houses"
              />
            </a>
          </div>
          <div className="blog_item_content">
            <a onClick={() => history.push("/BuyingAHome")} className="blog_title">
              Selling Homes
            </a>
            <p className="blog_date">01/01/2021</p>
            <p className="blog_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor...
            </p>
            <a onClick={() => history.push("/BuyingAHome")} className="blog_button ">
              Read More <ArrowForwardIosIcon />
            </a>
          </div>
        </div>
        <div className="lpb_item">
          <div className="blog_img">
            <a onClick={() => history.push("/BuyingAHome")}>
              <img
                src={blogimg3}
                alt="house porch"
              />
            </a>
          </div>
          <div className="blog_item_content">
            <a onClick={() => history.push("/BuyingAHome")} className="blog_title">
              Estimating Property Values
            </a>
            <p className="blog_date">01/01/2021</p>
            <p className="blog_description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor...
            </p>
            <a onClick={() => history.push("/BuyingAHome")} className="blog_button ">
              Read More <ArrowForwardIosIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="lpbb">
      <a href="/BlogList" className="lp_blog_button">All Blogs</a>
      </div>
      </Fade>
    </div>
    </div>
  );
}

export default LPBlog;
