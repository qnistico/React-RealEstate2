import React from 'react';
import SortByContent from './SortByContent';
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";


function BlogHero(props) {
    return (
        <div>
            <div>
      <div className="blog_hero">
      <ParallaxProvider>
        <ParallaxImg  imgsrc={props.parallaximg1} height="75vh">
        
        </ParallaxImg>
      </ParallaxProvider>
        <div className="blog_hero_flex">
          <div className="blog_hero_content">
            <h1 className="blog_header">Real Estate Blog</h1>
          </div>
        </div>
      </div>
      <SortByContent />
        </div>
        </div>
    )
}

export default BlogHero
