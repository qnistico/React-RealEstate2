import React from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import lphouse15 from "./img/lphouse15.jpg";

const ParallaxOverlay = (props) => {
  return (
    <ParallaxBanner
      className="contact_overlay_img"
      layers={[{ image: props.imgsrc, amount: 0.4}]}
      style={{ height: props.height }}
    >
      <div>{props.children}</div>
    </ParallaxBanner>
  );
};

export default ParallaxOverlay;
