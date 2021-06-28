import React from "react";
import BlogPostTemplate from "./BlogPostTemplate";
import blogheroimg from "./img/blogheroimg.jpg";

function BuyingAHome() {
  return (
    <div>
      <div className="dark_gradient"></div>
      <BlogPostTemplate blogpostImg={blogheroimg} blogpostTitle="Buying A Home" blogpostDate="Posted by Lorem on January 1, 2021" />
    </div>
  );
}

export default BuyingAHome;
