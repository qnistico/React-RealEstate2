import React from 'react';
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBCarouselElement,
  MDBCarouselCaption,
} from 'mdb-react-ui-kit';
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

function HomeInteriorSlider(props) {
  // Add styles 

addStyles()

function addStyles() {
    let styles = `

    @keyframes floatIn {
        0% {

            transform: translateY(150px);
            opacity: 0;
        }
        50% {

            opacity: 0;
        }
        100% { 

            opacity: 1;
            transform: translateY(0);
        }
    }

    .lightboxContainer {

        z-index: 1000;
        transition: all 0.3s;
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
    }
    .lightboxContainerHide {

        opacity: 0;
        pointer-events: none;
    }
    .lightboxContainerHide .lightboxImage {

        transform: translateY(-150px);
    }
    .lightboxImage {

        max-height: 80vh;
        max-width: 80vw;
        object-fit: cover;
        cursor: grab;
        user-select: none;
        transition: all 0.3s;
        animation: floatIn 0.4s;
        aspect-ratio: 1/1;
    }
    .closeButton {

        z-index: 1001;
        cursor: pointer;
        position: fixed;
        right: 20px;
        top: 20px;
        border-radius: 100%;
        font-size: 40px;
        color: white;
        width: 35px;
        height: 35px;
        text-align: center;
        transition: all 0.3s;
    }
    .closeButton:hover {

        opacity: 0.5;
    }
    .closeButtonHide {

        opacity: 0;
        pointer-events: none;
    }
    `

    var styleSheet = document.createElement("style")
    styleSheet.innerHTML = styles
    document.head.appendChild(styleSheet)
}

let lightElements = document.getElementsByClassName("ezLightbox")

// Add styles to improve UX with lightbox

window.onload = function() {

    for (let element of lightElements) {

        element.style.cursor = "pointer"
    }
}

window.onclick = function(click) {

    let element = click.target

    if (element.classList.contains("ezLightbox")) {

        // Add default values

        if (!element.dataset.backgroundOpacity) {

            element.dataset.backgroundOpacity = 0.85
        }

        if (!element.dataset.sizeMultiplier) {

            element.dataset.sizeMultiplier = 1.5
        }

        if (!element.dataset.aspectRatio) {

            element.dataset.aspectRatio = 1 / 1
        }

        // Container

        let lightboxContainer = document.createElement("div")

        lightboxContainer.style.background = "rgba(0, 0, 0, " + element.dataset.backgroundOpacity + ")"

        lightboxContainer.classList.add("lightboxContainer")

        document.body.appendChild(lightboxContainer)

        // Image

        let lightboxImage = document.createElement("img")

        lightboxImage.src = element.src

        lightboxImage.style.width = element.offsetWidth * element.dataset.sizeMultiplier + "px"

        lightboxImage.style.aspectRatio = element.dataset.aspectRatio

        lightboxImage.classList.add("lightboxImage")

        lightboxContainer.appendChild(lightboxImage)

        // Close button

        let closeButton = document.createElement("img")

        closeButton.src = "https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2018/png/iconmonstr-x-mark-thin.png&r=255&g=255&b=255"

        closeButton.classList.add("closeButton")

        document.body.appendChild(closeButton)

    } else if (!element.classList.contains("lightboxImage")) {

        // Hide lightbox when user clicks off

        let lightboxContainers = document.getElementsByClassName("lightboxContainer")

        for (let element of lightboxContainers) {

            element.classList.add("lightboxContainerHide")
        }

        let closeButtons = document.getElementsByClassName("closeButton")

        for (let element of closeButtons) {

            element.classList.add("closeButtonHide")
        }
    }
}

// Hide lightbox when user scrolls

window.onscroll = function() {

    let lightboxContainers = document.getElementsByClassName("lightboxContainer")

    for (let element of lightboxContainers) {

        element.classList.add("lightboxContainerHide")
    }

    let closeButtons = document.getElementsByClassName("closeButton")

    for (let element of closeButtons) {

        element.classList.add("closeButtonHide")
    }
}
    return (
        <div className="home_interior_slider">
            <MDBCarousel showIndicators showControls slide interval={5000} className="wtf">
      <MDBCarouselInner>
        <MDBCarouselItem itemId={0}>
          <MDBCarouselElement src={props.houseImg} alt={props.althouse} className="ezLightbox" data-size-multiplier="1" data-background-opacity="0.85" />
          
        </MDBCarouselItem>

        <MDBCarouselItem itemId={1}>
          <MDBCarouselElement src={props.houseLR} alt={props.altlr} className="ezLightbox" data-size-multiplier="1" data-background-opacity="0.85" />
          
        </MDBCarouselItem>

        <MDBCarouselItem itemId={2}>
          <MDBCarouselElement src={props.houseMBR} alt={props.altmbr} className="ezLightbox" data-size-multiplier="1" data-background-opacity="0.85" />
          
        </MDBCarouselItem>
        <MDBCarouselItem itemId={3}>
          <MDBCarouselElement src={props.houseBR} alt={props.altbr} className="ezLightbox" data-size-multiplier="1" data-background-opacity="0.85" />
          
        </MDBCarouselItem>
      </MDBCarouselInner>
    </MDBCarousel>
        </div>
    )
}

export default HomeInteriorSlider
