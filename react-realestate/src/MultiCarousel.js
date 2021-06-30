import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import LandingPageCards from "./LandingPageCards";
import LandingPageCards1 from "./LandingPageCards1";
import LandingPageCards2 from "./LandingPageCards2";
import CarouselCards from "./CarouselCards";
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";
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
import "./MultiCarousel.css";

function MultiCarousel(props) {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="multi_carousel">
      <svg className="slope_reverse" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 200"><path fill="#fafafa" fill-opacity="1" d="M0,96L1440,192L1440,0L0,0Z"></path></svg>
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
          <div><CarouselCards
            cardImg={house1}
            agentImg={agent1}
            cardTitle="Mansion on Lorem Ave"
            address="555 Lorem Avenue, Miami, FL 12345, USA"
            cardPrice="$5,200,000"
            bedrooms="4"
            bathrooms="5"
            sqft="6,500 SqFt"
            cardimgalt="mansion"
          /></div>
         <div> <CarouselCards
            cardImg={house2}
            agentImg={agent1}
            cardTitle="Mansion on Lorem Ave"
            address="555 Lorem Avenue, Miami, FL 12345, USA"
            cardPrice="$1,800,000"
            bedrooms="3"
            bathrooms="4"
            sqft="4500 SqFt"
            cardimgalt="mansion"
          /></div>
          <div><CarouselCards
            cardImg={house16}
            agentImg={agent3}
            cardTitle="Mansion on Lorem Ave"
            address="555 Lorem Avenue, Miami, FL 12345, USA"
            cardPrice="$4,300,000"
            bedrooms="3"
            bathrooms="4"
            sqft="5,200 SqFt"
            cardimgalt="mansion"
          /></div>
          <div><CarouselCards
            cardImg={house15}
            agentImg={agent3}
            cardTitle="Villa on Lorem Street"
            address="555 Lorem Avenue, Miami, FL 12345, USA"
            cardPrice="$5,700,000"
            bedrooms="4"
            bathrooms="5"
            sqft="7,200 SqFt"
            cardimgalt="mansion"
          /></div>
          <div><CarouselCards
            cardImg={house10}
            agentImg={agent3}
            cardTitle="Villa on Lorem Street"
            address="555 Lorem Avenue, Miami, FL 12345, USA"
            cardPrice="$5,400,000"
            bedrooms="4"
            bathrooms="5"
            sqft="7,200 SqFt"
            cardimgalt="mansion"
          /></div>
          <div><CarouselCards
            cardImg={house7}
            agentImg={agent3}
            cardTitle="Villa on Lorem Street"
            address="555 Lorem Avenue, Miami, FL 12345, USA"
            cardPrice="$14,000,000"
            bedrooms="6"
            bathrooms="7"
            sqft="13,500 SqFt"
            cardimgalt="mansion"
          /></div>

          <div><CarouselCards
            cardImg={house11}
            agentImg={agent3}
            cardTitle="Villa on Lorem Street"
            address="555 Lorem Avenue, Miami, FL 12345, USA"
            cardPrice="$630,000"
            bedrooms="3"
            bathrooms="4"
            sqft="3,900 SqFt"
            cardimgalt="house"
          /></div>

          <div><CarouselCards
            cardImg={house14}
            agentImg={agent4}
            cardTitle="Villa on Lorem Street"
            address="555 Lorem Avenue, Miami, FL 12345, USA"
            cardPrice="$4,100,000"
            bedrooms="4"
            bathrooms="5"
            sqft="5,000 SqFt"
            cardimgalt="mansion"
          />
          </div>
          
        </Carousel>
      </div>
    </div>
  );
}

export default MultiCarousel;
