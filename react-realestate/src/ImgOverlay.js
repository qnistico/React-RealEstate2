import React from "react";
import img_overlay from "./img/birds_eye.jpg";

function ImgOverlay() {
  window.addEventListener("scroll", parallax);

  function parallax() {
    function getPosition(item) {
      let top = (
        (item.getBoundingClientRect().top / window.innerHeight) *
        100
      ).toFixed(0);

      return top;
    }

    let itemsToParallax = document.getElementsByClassName("parallaxify");

    for (let item of itemsToParallax) {
      if (!item.dataset.speedMultiplier) {
        item.dataset.speedMultiplier = "0.7";
      }
      item.style.position = "relative";

      item.style.top = getPosition(item) * item.dataset.speedMultiplier + "px";
    }

    let imagesToParallax = document.getElementsByClassName("parallaxifyBg");

    for (let item of imagesToParallax) {
      function getPosition(item) {
        let top = (
          (item.getBoundingClientRect().top / window.innerHeight) *
          100
        ).toFixed(0);

        return top;
      }

      if (!item.dataset.speedMultiplier) {
        item.dataset.speedMultiplier = "3";
      }

      item.style.backgroundAttachment = "fixed";
      item.style.backgroundPositionY =
        getPosition(item) * item.dataset.speedMultiplier + "px";
    }
  }
  return (
    <div className="img_overlay">
      <div className="img_overlay_content parallaxify" data-speed-multiplier="-0.75">
        <p>Buy or Rent</p>
        <h2>Looking to buy or rent a property?</h2>
        <h3>Lorem Real Estate provides excellent pricing!</h3>
        <div className="button_flex">
          <a href="#!" className="img_overlay_button">
            Buy or Rent
          </a>
          <a href="#!" className="img_overlay_button iob_2">
            Browse Properties
          </a>
        </div>
      </div>
    </div>
  );
}

export default ImgOverlay;
