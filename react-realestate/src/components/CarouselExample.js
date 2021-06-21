import React from 'react'

function CarouselExample(props) {
    return (
        <div>
            <div className="carousel_container">
                <div className="carousel_item">{props.carouselImg1}</div>
                <div className="carousel_item">{props.carouselImg2}</div>
                <div className="carousel_item">{props.carouselImg3}</div>
            </div>
        </div>
    )
}

export default CarouselExample
