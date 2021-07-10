import React from "react";
import blogheroimg from "./img/blogheroimg.jpg";
import FeaturedListings from "./FeaturedListings";
import BlogHero from "./BlogHero";
import MortgageCalculator from "@herilsaha/mortgage-calculator";
import "./Calculator.css";
import "./Blogs.css";
import Footer from "./Footer";
import { useHistory } from "react-router-dom";
import AllAgentsSidebar from "./AllAgentsSidebar";
import VPForm from "./VPForm";

function BlogPostTemplate(props) {
  const history = useHistory();
  return (
    <div>
      <BlogHero parallaximg1={blogheroimg} />
      <div className="blog_post">
        <div className="blog_flex">
          <div className="blog_post_left">
            <div className="blog_post_img">
              <img src={props.blogpostImg} alt="" />
            </div>
            <div className="bpl_header">
              <h2>{props.blogpostTitle}</h2>
              <p>{props.blogpostDate}</p>
            </div>
            <div className="bpl_content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <h2>Lorem Ipsum</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
            </div>
            <div className="blog_comments">
              <div className="blog_comments_flex">
                <form id="contact-form" className="contact_form">
                  <div className="form-group">
                    <label htmlFor="message">Comment</label>
                    <textarea
                      className="form-control form_input comment_textarea"
                      rows="3"
                      name="message"
                      aria-label="message"
                      aria-required="true"
                    ></textarea>
                  </div>
                  <div className="comments_bottom_flex">
                    <div className="form-group cbf_item cbf_item_1">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        className="form-control form_input"
                        name="name"
                        aria-label="name"
                        aria-required="true"
                      />
                    </div>
                    <div className="form-group cbf_item">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        className="form-control form_input"
                        name="email"
                        aria-label="email"
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <button className="send_button">Submit</button>
                </form>
              </div>
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

export default BlogPostTemplate;
