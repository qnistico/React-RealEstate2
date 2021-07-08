import React from "react";
import "@material-ui/core";
import "@material-ui/icons";
import BathtubOutlinedIcon from "@material-ui/icons/BathtubOutlined";
import house1 from "./img/house1.jpg";

import house7 from "./img/house7.jpg";
import house8 from "./img/house8.jpg";
import house9 from "./img/house9.jpg";
import house10 from "./img/house10.jpg";

import house15 from "./img/house15.jpg";
import { Avatar } from "@material-ui/core";
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";
import {
  CameraAlt,
  CheckBoxOutlineBlankOutlined,
  Hotel,
} from "@material-ui/icons";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

function LandingPageCards() {
// Add styles 

addStyles()

function addStyles() {
    let styles = `

    @keyframes moveUp {
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
    @keyframes moveDown {
        0% {

            transform: translateY(-150px);
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

        transform: scale(0.75);
    }
    .lightboxImage {

        max-height: 80vh;
        max-width: 80vw;
        object-fit: cover;
        cursor: grab;
        user-select: none;
        transition: all 0.3s;
        animation: moveUp 0.4s;
        overflow: hidden;
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
        animation: moveDown 0.4s;
        user-selct: none;
    }
    .closeButton:hover {

        opacity: 0.5;
    }
    .closeButtonHide {

        transform: scale(0.75);
        opacity: 0;
        pointer-events: none;
    }
    `

    var styleSheet = document.createElement("style")
    styleSheet.innerHTML = styles
    document.head.appendChild(styleSheet)
}

let lightElements = document.getElementsByClassName("ezLightbox")

window.onload = function() {

    for (let element of lightElements) {

        element.style.cursor = "pointer"
    }
}

window.ontouchstart = function(click) {

    userInteract(click)
}
window.onclick = function(click) {

    userInteract(click)
}

function userInteract(click) {

    let element = click.target

    if (element.classList.contains("ezLightbox")) {

        // Add defaults if none are provided

        if (!element.dataset.src) {

            element.dataset.src = element.src
        }
        if (!element.dataset.src) {

            return console.error("no src provided")
        }

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

        lightboxImage.src = element.dataset.src

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

        closeLightbox()
    }
}

window.onkeydown = function(interaction) {

    if (interaction.key == "Escape" || interaction.key == " ") {

        closeLightbox()
    }
}

// Hide lightbox when user scrolls

window.onscroll = function() {

    closeLightbox()
}
window.onwheel = function() {

    closeLightbox()
}

function closeLightbox() {

    let lightboxContainers = document.getElementsByClassName("lightboxContainer")

    for (let element of lightboxContainers) {

        element.classList.add("lightboxContainerHide")
    }

    let closeButtons = document.getElementsByClassName("closeButton")

    for (let element of closeButtons) {

        element.classList.add("closeButtonHide")
    }
}

window.onmousedown = function() {

    let className = "lightboxImage"
    let ratio = 0.3
    let ignoreX = false
    let ignoreY = false

    if (!className) {

        return console.error('You must provide a valid selector or DOM object as first argument')
    }
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

        return console.log("Mobile user panning disabled")
    }

    let elements = document.getElementsByClassName(className)

    if (elements.length == 0) {

        return console.log("No elements to pan")
    }

    for (let element of elements) {

        console.log(element)

        let trackX = (!ignoreX) ? true : false,
            trackY = (!ignoreY) ? true : false,

            curDown = false,
            curYPos = 0,
            curXPos = 0,

            startScrollY = 0,
            startScrollX = 0,
            scrollDif = 0,
            animation = null;


        element.addEventListener('mousedown', (e) => {
            e.preventDefault();
            curDown = true;

            startScrollY = parseInt(element.scrollTop, 10);
            startScrollX = parseInt(element.scrollLeft, 10);
            curYPos = e.clientY;
            curXPos = e.clientX;
        });


        element.addEventListener('mouseup', (e) => {

            // Smooth action effect 
            let currScrollY = element.scrollTop,
                scrollDiffY = (startScrollY - currScrollY) * -1,
                newScrollY = currScrollY + (scrollDiffY * ratio),

                currScrollX = element.scrollLeft,
                scrollDiffX = (startScrollX - currScrollX) * -1,
                newScrollX = currScrollX + (scrollDiffX * ratio);

            let scroll_obj = {
                behavior: 'smooth'
            };
            if (trackY) {
                scroll_obj.top = newScrollY;
            }
            if (trackX) {
                scroll_obj.left = newScrollX;
            }

            animation = element.scroll(scroll_obj);
        });



        document.body.addEventListener('mouseup', (e) => {
            curDown = false;
        });



        element.addEventListener('mousemove', (e) => {
            if (curDown === true) {
                if (animation) {
                    animation.pause();
                }

                let scroll_obj = {
                    behavior: 'auto'
                };
                if (trackY) {
                    scroll_obj.top = startScrollY + (curYPos - e.clientY);
                }
                if (trackX) {
                    scroll_obj.left = startScrollX + (curXPos - e.clientX);
                }

                element.scroll(scroll_obj);
            }
        })
    }
}
  const history = useHistory();

  return (
    <div>
      <div className="lp_cards">
        <h2>Recent Properties</h2>
        <p className="lp_header_p">View some of our most recent listings</p>
        <div className="lp_cards_flex">
          <div className="lp_cards_body">
            <div className="card_img_container">
              <a onClick={() => history.push("/MansionInNorwin")}>
                <img src={house15} alt="house" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Sale</p>
              <button className="lightbox_button ezLightbox" data-src="./img/house15.jpg  " data-size-multiplier="20"><CameraAlt /></button>
              <div className="card_img_agent">
                <a onClick={() => history.push("/AgentKevinProfile")}>
                  <Avatar src={agent3} alt="real estate agent" />
                </a>
              </div>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a
                  onClick={() => history.push("/MansionInNorwin")}
                  className="lp_cards_title"
                >
                  Mansion in Norwin
                </a>
                <a
                  onClick={() => history.push("/MansionInNorwin")}
                  className="lp_cards_location"
                >
                  555 Lorem Avenue, Norwin, PA 12345, USA
                </a>
                <p>
                  A fabulous villa in Norwin, Pennsylvania located conveniently
                  near a train station and...
                  <a
                    onClick={() => history.push("/MansionInNorwin")}
                    className="more_button"
                  >
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>4</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>5</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>7,200 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">$5,700,000</p>
                </div>
                <a
                  onClick={() => history.push("/MansionInNorwin")}
                  className="lp_cards_button"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="lp_cards_body">
            <div className="card_img_container">
              <a onClick={() => history.push("/MansionInGladwyne")}>
                <img src={house7} alt="house" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Sale</p>

              <a
                onClick={() => history.push("/AgentKevinProfile")}
                className="card_img_agent"
              >
                <Avatar src={agent3} alt="real estate agent" />
              </a>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a
                  onClick={() => history.push("/MansionInGladwyne")}
                  className="lp_cards_title"
                >
                  Mansion in Gladywne
                </a>
                <a href="#!" className="lp_cards_location">
                  555 Lorem Avenue, Gladwyne, PA 12345, USA
                </a>
                <p>
                  A fabulous villa in Gladwyne, PA located near various
                  transportation outlets like...
                  <a
                    onClick={() => history.push("/MansionInGladwyne")}
                    className="more_button"
                  >
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>6</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>7</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>13,500 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">$14,000,000</p>
                </div>
                <a
                  onClick={() => history.push("/MansionInGladwyne")}
                  className="lp_cards_button"
                >
                  View
                </a>
              </div>
            </div>
          </div>

          <div className="lp_cards_body">
            <div className="card_img_container">
              <a onClick={() => history.push("/MansionInFoxchapel")}>
                <img src={house1} alt="house" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Sale</p>

              <a
                onClick={() => history.push("/AgentJohnProfile")}
                className="card_img_agent"
              >
                <Avatar src={agent1} alt="real estate agent" />
              </a>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a href="#!" className="lp_cards_title">
                  Villa in Foxchapel
                </a>
                <a href="#!" className="lp_cards_location">
                  555 Lorem Avenue, Foxchapel, PA 12345, USA
                </a>
                <p>
                  A fabulous villa in Foxchapel complete with a spectacular view
                  of the...
                  <a
                    onClick={() => history.push("/MansionInFoxchapel")}
                    className="more_button"
                  >
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>4</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>5</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>6,500 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">$5,200,000</p>
                </div>
                <a
                  onClick={() => history.push("/MansionInFoxchapel")}
                  className="lp_cards_button"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="lp_cards_body mobile_hide">
            <div className="card_img_container">
              <a onClick={() => history.push("/HouseInEdgeworth")}>
                <img src={house9} alt="house" />
              </a>
              <p className="featured_badge">Recent</p>
              <p className="for_sale_badge">For Sale</p>

              <a
                onClick={() => history.push("/AgentMaryProfile")}
                className="card_img_agent"
              >
                <Avatar src={agent4} alt="real estate agent" />
              </a>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a
                  onClick={() => history.push("/HouseInEdgeworth")}
                  className="lp_cards_title"
                >
                  House In Edgeworth
                </a>
                <a
                  onClick={() => history.push("/HouseInEdgeworth")}
                  className="lp_cards_location"
                >
                  555 Lorem Avenue, Edgeworth, PA 12345, USA
                </a>
                <p>
                  A fabulous villa in PA with a gorgeous front yard, back yard
                  and...
                  <a
                    onClick={() => history.push("/HouseInEdgeworth")}
                    className="more_button"
                  >
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>2</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>4</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>3,200 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">$680,000</p>
                </div>
                <a
                  onClick={() => history.push("/HouseInEdgeworth")}
                  className="lp_cards_button"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="lp_cards_body mobile_hide">
            <div className="card_img_container">
              <a onClick={() => history.push("/MansionInSewickleyHeights")}>
                <img src={house10} alt="house" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Sale</p>

              <a
                onClick={() => history.push("/AgentKevinProfile")}
                className="card_img_agent"
              >
                <Avatar src={agent3} alt="real estate agent" />
              </a>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a
                  onClick={() => history.push("/MansionInSewickleyHeights")}
                  className="lp_cards_title"
                >
                  Villa in Sewickley Heights
                </a>
                <a
                  onClick={() => history.push("/MansionInSewickleyHeights")}
                  className="lp_cards_location"
                >
                  555 Lorem Ave, Sewickley Heights, PA 12345, USA
                </a>
                <p>
                  A fabulous villa in PA located conveniently near a train
                  station, beach and...
                  <a
                    onClick={() => history.push("/MansionInSewickleyHeights")}
                    className="more_button"
                  >
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>4</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>5</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>7,200 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">$5,400,000</p>
                </div>
                <a
                  onClick={() => history.push("/MansionInSewickleyHeights")}
                  className="lp_cards_button"
                >
                  View
                </a>
              </div>
            </div>
          </div>
          <div className="lp_cards_body mobile_hide">
            <div className="card_img_container">
              <a onClick={() => history.push("/HouseInOreland")}>
                <img src={house8} alt="mansion" />
              </a>
              <p className="featured_badge">Featured</p>
              <p className="for_sale_badge">For Sale</p>

              <a
                onClick={() => history.push("/AgentMaryProfile")}
                className="card_img_agent"
              >
                <Avatar src={agent4} alt="real estate agent" />
              </a>
            </div>
            <div className="lp_cards_content">
              <div className="lp_cards_top">
                <a href="#!" className="lp_cards_title">
                  Mansion in Oreland
                </a>
                <a href="#!" className="lp_cards_location">
                  555 Lorem Avenue, Oreland, PA 12345, USA
                </a>
                <p>
                  Large home in Oreland, PA complete with 45 acres of land
                  with...
                  <a
                    onClick={() => history.push("/HouseInOreland")}
                    className="more_button"
                  >
                    [more]
                  </a>
                </p>
              </div>
              <div className="lp_cards_center">
                <div className="lp_icon_info_flex">
                  <div className="lp_icon_flex">
                    <Hotel className="card_icon" />
                    <p>2</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <BathtubOutlinedIcon className="card_icon" />
                    <p>4</p>
                  </div>
                </div>
                <div className="lp_icon_info_flex ml-1">
                  <div className="lp_icon_flex">
                    <CheckBoxOutlineBlankOutlined className="card_icon" />
                    <p>4,900 Sq Ft</p>
                  </div>
                </div>
              </div>
              <div className="lp_cards_bottom">
                <div>
                  <p>For Sale</p>
                  <p className="card_price">$2,300,000</p>
                </div>
                <a
                  onClick={() => history.push("/HouseInOreland")}
                  className="lp_cards_button"
                >
                  View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPageCards;
