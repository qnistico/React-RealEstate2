import React from "react";
import FeaturedListings from "./FeaturedListings";
import "./Blogs.css";
import BlogHero from "./BlogHero";
import Footer from "./Footer";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'; 
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function BlogList() {
  return (
      <div>
        <BlogHero />
    <div className="all_blogs">
      <div className="blog_flex">
        <div className="blog_box">
        <div className="blog_list blog_list_1">
          <div className="blog_item">
            <div className="blog_img">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
            </div>
            <div 
            className="blog_item_content">
              <a href="#!" className="blog_title">
                Buying a Home
              </a>
              <p className="blog_date">01/01/2021</p>
              <p className="blog_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#!" className="blog_button hero_button">
                Read More
              </a>
            </div>
          </div>
          <div className="blog_item">
            <div className="blog_img">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
            </div>
            <div className="blog_item_content">
              <a href="#!" className="blog_title">
                Buying a Home
              </a>
              <p className="blog_date">01/01/2021</p>
              <p className="blog_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#!" className="blog_button hero_button">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="blog_list">
          <div className="blog_item">
            <div className="blog_img">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
            </div>
            <div 
            className="blog_item_content">
              <a href="#!" className="blog_title">
                Buying a Home
              </a>
              <p className="blog_date">01/01/2021</p>
              <p className="blog_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#!" className="blog_button hero_button">
                Read More
              </a>
            </div>
          </div>
          <div className="blog_item">
            <div className="blog_img">
            <img
              src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt=""
            />
            </div>
            <div className="blog_item_content">
              <a href="#!" className="blog_title">
                Buying a Home
              </a>
              <p className="blog_date">01/01/2021</p>
              <p className="blog_description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="#!" className="blog_button hero_button">
                Read More
              </a>
            </div>
          </div>
        </div>
        <div className="blog_pagination">
        <a href="" className="bp_arrow_back"><ArrowBackIosIcon /></a>
        <a href="" className="bp_1">1</a>
        <a href="" className="bp_2">2</a>
        <a href="" className="bp_arrow_forward"><ArrowForwardIosIcon /></a>
      </div>
        </div>
        <div className="blog_sidebar">
          <h3>Featured Listings</h3>
          <FeaturedListings />
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}

export default BlogList;
