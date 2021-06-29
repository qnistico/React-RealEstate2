import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import lphouse15 from "./img/lphouse15.jpg";
import ImgOverlay from "./ImgOverlay";


const ParallaxOverlay = (props) => {
  return (
    <ParallaxBanner
      className="contact_overlay_img"
      layers={[{ image: props.imgsrc, amount: -0.2}]}
    >
      <div>{props.children}</div>
    </ParallaxBanner>
  );
};

export default ParallaxOverlay;
