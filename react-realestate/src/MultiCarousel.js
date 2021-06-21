import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LandingPageCards from './LandingPageCards';
import LandingPageCards1 from './LandingPageCards1';
import LandingPageCards2 from './LandingPageCards2';
import CarouselCards from './CarouselCards';
import house1 from "./img/house1.jpg";
import house2 from "./img/house2.jpg";
import house3 from "./img/house3.jpg";
import house4 from "./img/house4.jpg";
import house5 from "./img/house5.jpg";
import house6 from "./img/house6.jpg";
import house7 from "./img/house7.jpg";
import house8 from "./img/house8.jpg";
import house9 from "./img/house9.jpg";
import "./MultiCarousel.css";

function MultiCarousel(props) {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <div>
            
<div className="multi_car_flex">

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
  <div><CarouselCards cardImage={house1}/></div>
  <div><CarouselCards cardImage={house2}/></div>
  <div><CarouselCards cardImage={house3}/></div>
  <div><CarouselCards cardImage={house4}/></div>
  <div><CarouselCards cardImage={house5}/></div>
  <div><CarouselCards cardImage={house6}/></div>
  <div><CarouselCards cardImage={house7}/></div>
  <div><CarouselCards cardImage={house8}/></div>
  <div><CarouselCards cardImage={house9}/></div>
</Carousel>
</div>
        </div>
    )
}

export default MultiCarousel
