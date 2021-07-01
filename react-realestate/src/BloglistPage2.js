import React from "react";
import FeaturedListings from "./FeaturedListings";
import "./Blogs.css";
import BlogHero from "./BlogHero";
import Footer from "./Footer";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { ArrowForward } from "@material-ui/icons";
import blogheroimg from "./img/blogheroimg.jpg";

function BlogListPage2() {
  window.addEventListener("scroll", parallax);

  function parallax() {
    function getPosition(item) {
      let top = (
        (item.getBoundingClientRect().top / window.innerHeight) *
        100
      ).toFixed(0);

      return top;
    }

    let itemsToParallax = document.getElementsByClassName("parallaxify");

    for (let item of itemsToParallax) {
      if (!item.dataset.speedMultiplier) {
        item.dataset.speedMultiplier = "0.7";
      }
      item.style.position = "relative";

      item.style.top = getPosition(item) * item.dataset.speedMultiplier + "px";
    }

    let imagesToParallax = document.getElementsByClassName("parallaxifyBg");

    for (let item of imagesToParallax) {
      function getPosition(item) {
        let top = (
          (item.getBoundingClientRect().top / window.innerHeight) *
          100
        ).toFixed(0);

        return top;
      }

      if (!item.dataset.speedMultiplier) {
        item.dataset.speedMultiplier = "3";
      }

      item.style.backgroundAttachment = "fixed";
      item.style.backgroundPositionY =
        getPosition(item) * item.dataset.speedMultiplier + "px";
    }
  }

  return (
    <div>
          <div className="dark_gradient"></div>
      <BlogHero parallaximg1={blogheroimg} />
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
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
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
            <div className="blog_list">
              <div className="blog_item">
                <div className="blog_img">
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
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
                  <img
                    src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                    alt=""
                  />
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
            <h3>Featured Listings</h3>
            <FeaturedListings />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default BlogListPage2;
