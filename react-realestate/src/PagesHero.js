import React from 'react';
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";
import SortByContent from './SortByContent';
import house1 from "./img/house1.jpg";
import house2 from "./img/house2.jpg";
import house3 from "./img/house3.jpg";
import house4 from "./img/house4.jpg";
import house5 from "./img/house5.jpg";
import house6 from "./img/house6.jpg";
import house7 from "./img/house7.jpg";
import house8 from "./img/house8.jpg";
import house9 from "./img/house9.jpg";
import house10 from "./img/house10.jpg";
import house11 from "./img/house11.jpg";
import house12 from "./img/house12.jpg";
import house13 from "./img/house13.jpg";
import house14 from "./img/house14.jpg";
import house15 from "./img/house15.jpg";
import house16 from "./img/house16.jpg";
import Fade from "react-reveal/Fade";

function PagesHero(props) {
  
    return (
            <div className="view_property">
                          <Fade duration="1210">

      <div className="property_hero" >
        <ParallaxProvider>
        <ParallaxImg  imgsrc={props.parallaximg1} height="75vh">
        
        </ParallaxImg>
      </ParallaxProvider>
        <div className="property_hero_flex">
          <div className="property_hero_content">
            <h1>{props.headerTitle}</h1>
          </div>
        </div>
      </div>
      </Fade>
      
        </div>
    )
}

export default PagesHero
