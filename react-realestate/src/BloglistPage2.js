import React from "react";
import FeaturedListings from "./FeaturedListings";
import "./Blogs.css";
import BlogHero from "./BlogHero";
import Footer from "./Footer";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ArrowForward } from "@material-ui/icons";
import MortgageCalculator from "@herilsaha/mortgage-calculator";
import "./Calculator.css";
import blogheroimg from "./img/blogheroimg.jpg";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";
import Fade from "react-reveal/Fade";


function BlogListPage2(props) {


  return (
    <div>
          <div className="dark_gradient"></div>
          <Fade duration="1210">

      <BlogHero parallaximg1={blogheroimg} />
      </Fade>
      <div className="all_blogs">
        <div className="blog_flex">
          <div className="blog_box">
            <div className="blog_list blog_list_1">
              <div className="blog_item">
                <div className="blog_img">
                  <a href="/BuyingAHome"><img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  /></a>
                </div>
                <div className="blog_item_content">
                  <a href="/BuyingAHome" className="blog_title">
                    Buying Homes
                  </a>
                  <p className="blog_date">01/01/2021</p>
                  <p className="blog_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor...
                  </p>
                  <a href="/BuyingAHome" className="blog_button ">
                    Read More <ArrowForwardIosIcon />
                  </a>
                </div>
              </div>
              <div className="blog_item">
                <div className="blog_img">
                  <a href="/BuyingAHome"><img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  /></a>
                </div>
                <div className="blog_item_content">
                  <a href="/BuyingAHome" className="blog_title">
                    Selling Homes
                  </a>
                  <p className="blog_date">01/01/2021</p>
                  <p className="blog_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor...
                  </p>
                  <a href="/BuyingAHome" className="blog_button ">
                    Read More <ArrowForwardIosIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="blog_list">
              <div className="blog_item">
                <div className="blog_img">
                  <a href="/BuyingAHome"><img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  /></a>
                </div>
                <div className="blog_item_content">
                  <a href="/BuyingAHome" className="blog_title">
                    Buying a Home
                  </a>
                  <p className="blog_date">01/01/2021</p>
                  <p className="blog_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor...
                  </p>
                  <a href="/BuyingAHome" className="blog_button ">
                    Read More <ArrowForwardIosIcon />
                  </a>
                </div>
              </div>
              <div className="blog_item">
                <div className="blog_img">
                  <a href="/BuyingAHome"><img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  /></a>
                </div>
                <div className="blog_item_content">
                  <a href="/BuyingAHome" className="blog_title">
                    Buying a Home
                  </a>
                  <p className="blog_date">01/01/2021</p>
                  <p className="blog_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor...
                  </p>
                  <a href="/BuyingAHome" className="blog_button ">
                    Read More <ArrowForwardIosIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="blog_pagination">
              <a href="/BlogList" className="bp_arrow_back">
                <ArrowBackIosIcon />
              </a>
              <a href="/BlogList" className="bp_1 bp_1_p1">
                1
              </a>
              <a href="/BlogListMansionInFoxchapel" className="bp_2 bp_2_p2">
                2
              </a>
              <a href="/BlogListMansionInFoxchapel" className="bp_arrow_forward">
                <ArrowForwardIosIcon />
              </a>
            </div>
          </div>
          <div className="blog_sidebar">
            <div className="blog_sidebar_item">
            <h3>Featured Listings</h3>
            <FeaturedListings />
            </div>
            
            <div className="blog_sidebar_item">
            <div className="related_posts">
              <h3>Related Posts</h3>
  <div className="related_posts_item">
    <div className="rp_img">
  <a href=""><img src={blogheroimg} alt="" /></a>
  </div>
  <div className="rpi_content">
  <h4>Author: John Johnson</h4>
  <p>01/01/2021</p>
  </div>
  </div>
</div>
<div className="related_posts">
  <div className="related_posts_item">
    <div className="rp_img">
  <a href=""><img src={blogheroimg} alt="" /></a>
  </div>
  <div className="rpi_content">
  <h4>Author: John Johnson</h4>
  <p>01/01/2021</p>
  </div>
  </div>
</div>
<div className="related_posts">
  <div className="related_posts_item">
    <div className="rp_img">
  <a href=""><img src={blogheroimg} alt="" /></a>
  </div>
  <div className="rpi_content">
  <h4>Author: John Johnson</h4>
  <p>01/01/2021</p>
  </div>
  </div>
</div>
<div className="related_posts">
  <div className="related_posts_item rpi_last">
    <div className="rp_img">
  <a href=""><img src={blogheroimg} alt="" /></a>
  </div>
  <div className="rpi_content">
  <h4>Author: John Johnson</h4>
  <p>01/01/2021</p>
  </div>
  </div>
</div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogListPage2;

