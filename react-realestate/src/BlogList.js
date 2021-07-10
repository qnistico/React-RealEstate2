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
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import blogimg1 from "./img/blogimg1.jpg";
import blogimg2 from "./img/blogimg2.jpg";
import blogimg3 from "./img/blogimg3.jpg";
import blogimg4 from "./img/blogimg4.jpg";
import AllAgentsSidebar from "./AllAgentsSidebar";
import VPForm from "./VPForm";

function BlogList(props) {
  const history = useHistory();

  return (
    <div>
      <Helmet>
        <title>Blog - PA Premium Realty</title>
        <meta name="description" content="Pennsylvania Premium Realty Blog" />
      </Helmet>
      <div className="dark_gradient"></div>
      <Fade duration="1210">
        <BlogHero parallaximg1={blogheroimg} />
      </Fade>
      <div className="all_blogs">
        <h2>All Blogs</h2>
        <div className="blog_flex">
          <div className="blog_box">
            <div className="blog_list blog_list_1">
              <div className="blog_item bi_1">
                <div className="blog_img">
                  <a onClick={() => history.push("/BuyingAHome")}>
                    <img
                      src={blogimg4}
                      alt=""
                    />
                  </a>
                </div>
                <div className="blog_item_content">
                  <a
                    onClick={() => history.push("/BuyingAHome")}
                    className="blog_title"
                  >
                    Buying A Home
                  </a>
                  <p className="blog_date">01/01/2021</p>
                  <p className="blog_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor...
                  </p>
                  <a
                    onClick={() => history.push("/BuyingAHome")}
                    className="blog_button "
                  >
                    Read More <ArrowForwardIosIcon />
                  </a>
                </div>
              </div>
              <div className="blog_item bi_2">
                <div className="blog_img">
                  <a onClick={() => history.push("/SellingAHome")}>
                    <img
                      src={blogimg3}
                      alt=""
                    />
                  </a>
                </div>
                <div className="blog_item_content">
                  <a
                    onClick={() => history.push("/SellingAHome")}
                    className="blog_title"
                  >
                    Selling A Home
                  </a>
                  <p className="blog_date">01/01/2021</p>
                  <p className="blog_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor...
                  </p>
                  <a
                    onClick={() => history.push("/SellingAHome")}
                    className="blog_button "
                  >
                    Read More <ArrowForwardIosIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="blog_list">
              <div className="blog_item bi_3">
                <div className="blog_img">
                  <a onClick={() => history.push("/ValuingYourHome")}>
                    <img
                      src={blogimg2}
                      alt=""
                    />
                  </a>
                </div>
                <div className="blog_item_content">
                  <a
                    onClick={() => history.push("/ValuingYourHome")}
                    className="blog_title"
                  >
                    Valuing Your Home
                  </a>
                  <p className="blog_date">01/01/2021</p>
                  <p className="blog_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor...
                  </p>
                  <a
                    onClick={() => history.push("/ValuingYourHome")}
                    className="blog_button "
                  >
                    Read More <ArrowForwardIosIcon />
                  </a>
                </div>
              </div>
              <div className="blog_item bi_4">
                <div className="blog_img">
                  <a onClick={() => history.push("/FindingTheRightLocation")}>
                    <img
                      src={blogimg1}
                      alt=""
                    />
                  </a>
                </div>
                <div className="blog_item_content">
                  <a
                    onClick={() => history.push("/FindingTheRightLocation")}
                    className="blog_title"
                  >
                    Finding the Right Location
                  </a>
                  <p className="blog_date">01/01/2021</p>
                  <p className="blog_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Duis aute irure dolor...
                  </p>
                  <a
                    onClick={() => history.push("/FindingTheRightLocation")}
                    className="blog_button "
                  >
                    Read More <ArrowForwardIosIcon />
                  </a>
                </div>
              </div>
            </div>
            <div className="blog_pagination">
              <a onClick={() => history.push("/BlogList")} className="bp_arrow_back">
                <ArrowBackIosIcon />
              </a>
              <a onClick={() => history.push("/BlogList")} className="bp_1">
                1
              </a>
              <a onClick={() => history.push("/BlogListPage2")} className="bp_2">
                2
              </a>
              <a onClick={() => history.push("/BlogListPage2")} className="bp_arrow_forward">
                <ArrowForwardIosIcon />
              </a>
            </div>
          </div>
          <div className="blog_sidebar">
            <div className="blog_sidebar_item bsi_1">
              <div className="blog_sidebar_item_flex bsif_1">
              <h3>Our Agents</h3>
              <AllAgentsSidebar />
              </div>
            </div>
            <div className="blog_sidebar_item bsi_2">
              <div className="blog_sidebar_item_flex">
              <h3>Featured Listings</h3>
              <FeaturedListings />
              </div>
            </div>

            <div className="blog_sidebar_item bsi_3">
              <div className="blog_sidebar_item_flex">
                <h3>Related Posts</h3>
                <div className="related_posts_item">
                  <div className="rp_img">
                    <a onClick={() => history.push("/BuyingAHome")}>
                      <img src={blogheroimg} alt="" />
                    </a>
                  </div>
                  <div className="rpi_content">
                    <h4>Author: John Johnson</h4>
                    <p>01/01/2021</p>
                  </div>
                </div>
                <div className="related_posts_item">
                  <div className="rp_img">
                    <a onClick={() => history.push("/BuyingAHome")}>
                      <img src={blogheroimg} alt="" />
                    </a>
                  </div>
                  <div className="rpi_content">
                    <h4>Author: John Johnson</h4>
                    <p>01/01/2021</p>
                  </div>
                </div>
                <div className="related_posts_item">
                  <div className="rp_img">
                    <a onClick={() => history.push("/BuyingAHome")}>
                      <img src={blogheroimg} alt="" />
                    </a>
                  </div>
                  <div className="rpi_content">
                    <h4>Author: John Johnson</h4>
                    <p>01/01/2021</p>
                  </div>
                </div>
                <div className="related_posts_item rpi_last">
                  <div className="rp_img">
                    <a onClick={() => history.push("/BuyingAHome")}>
                      <img src={blogheroimg} alt="" />
                    </a>
                  </div>
                  <div className="rpi_content">
                    <h4>Author: John Johnson</h4>
                    <p>01/01/2021</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog_sidebar_item bsi_4">
              <div className="blog_sidebar_item_flex">
              <h3>Contact Us</h3>
              <VPForm />
            </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogList;
