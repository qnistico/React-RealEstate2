import React from "react";
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
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";
import "./MultiCarousel.css";
import Carousel from "react-multi-carousel";

import OverlayCarouselCard from "./OverlayCarouselCard";
import "./OverlayCarousel.css";

function OverlayCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <div className="overlay_carousel">
      <svg className="slope1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#f1f2f5" fill-opacity="1" d="M0,96L1440,192L1440,0L0,0Z"></path></svg>
        <div className="overlay_carousel_container">
          <Carousel
            swipeable={true}
            draggable={true}
            showDots={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4500}
            keyBoardControl={true}
            customTransition="all 0.5s"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <div>
              <OverlayCarouselCard
                occimg={house15}
                occtitle="Mansion on Lorem Ave"
                occbedrooms="4"
                occbathrooms="5"
                occsqft="7,200 SqFt"
                occprice="$5,700,000"
                occbottomagent={agent3}
                occbottomname="Kevin Richmond"
              />
            </div>
            <div>
              <OverlayCarouselCard
                occimg={house15}
                occtitle="Mansion on Lorem Ave"
                occbedrooms="4"
                occbathrooms="5"
                occsqft="7,200 SqFt"
                occprice="$5,700,000"
                occbottomagent={agent3}
                occbottomname="Kevin Richmond"
              />
            </div>
            <div>
              <OverlayCarouselCard
                occimg={house15}
                occtitle="Mansion on Lorem Ave"
                occbedrooms="4"
                occbathrooms="5"
                occsqft="7,200 SqFt"
                occprice="$5,700,000"
                occbottomagent={agent3}
                occbottomname="Kevin Richmond"
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default OverlayCarousel;
