import React from "react";
import BlogPostTemplate from "./BlogPostTemplate";
import blogheroimg from "./img/blogheroimg.jpg";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import { useHistory } from "react-router-dom";
import blogimg1 from "./img/blogimg1.jpg";

function FindingTheRightLocation(props) {
    const history = useHistory();
    return (
            <div>
      <Helmet>
        <title>Blog Post - PA Premium Realty</title>
        <meta
          name="description"
          content="Pennsylvania Premium Realty Blog Post"
        />

      </Helmet>
      <div className="dark_gradient"></div>
      <BlogPostTemplate blogpostImg={blogimg1} blogpostTitle="Finding the Right Location" blogpostDate="Posted by Lorem on January 1, 2021" />
    </div>
    )
}

export default FindingTheRightLocation
