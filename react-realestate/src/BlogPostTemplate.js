import React from "react";
import blogheroimg from "./img/blogheroimg.jpg";
import FeaturedListings from "./FeaturedListings";
import BlogHero from "./BlogHero";
import MortgageCalculator from "@herilsaha/mortgage-calculator";
import "./Calculator.css";
import "./Blogs.css";

function BlogPostTemplate(props) {
  return (
    <div>
    <BlogHero />
    <div className="blog_post">
      <div className="blog_flex">
        <div className="blog_post_left">
            <div className="blog_post_img">
                <img src={props.blogpostImg} alt="" />
            </div>
            <div className="bpl_header">
            <h1>{props.blogpostTitle}</h1>
            <p>{props.blogpostDate}</p>
            </div>
            <div className="bpl_content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="bpl_comments">

            </div>
        </div>
        <div className="blog_sidebar blog_post_sidebar">
          <div className="blog_sidebar_item">
            <h3>Featured Listings</h3>
            <FeaturedListings />
            </div>
          <div className="blog_sidebar_item">
<h3>Related Posts</h3>
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

          </div>
          <div className="blog_sidebar_item">
            <h3>Mortgage Calculator</h3>
            <MortgageCalculator />
          </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default BlogPostTemplate;
