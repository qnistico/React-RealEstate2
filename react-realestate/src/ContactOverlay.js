import React from 'react';
import contactOverlayImg from "./img/contactoverlay.jpg";
import "./ContactOverlay.css";
import ImgOverlay from "./ImgOverlay";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxOverlay from './ParallaxOverlay';

function ContactOverlay() {
    window.addEventListener("load", parallax)
    window.addEventListener("scroll", parallax)
    
    function parallax() {
    
        function getPosition(item) {
    
            let top = (item.getBoundingClientRect().top / window.innerHeight * 100).toFixed(0)
    
            return top
        }
    
        let itemsToParallax = document.getElementsByClassName("parallaxify")
    
        for (let item of itemsToParallax) {
    
            if (!item.dataset.speedMultiplier) {
    
                item.dataset.speedMultiplier = "0.7"
            }
    
            item.style.transform = "translateY(" + getPosition(item) * item.dataset.speedMultiplier + "px)"
        }
    
        let imagesToParallax = document.getElementsByClassName("parallaxifyBg")
    
        for (let item of imagesToParallax) {
    
            function getPosition(item) {
    
                let top = (item.getBoundingClientRect().top / window.innerHeight * 100).toFixed(0)
    
                return top
            }
    
            if (!item.dataset.speedMultiplier) {
    
                item.dataset.speedMultiplier = "3"
            }
    
            item.style.backgroundAttachment = "fixed"
            item.style.backgroundPositionY = getPosition(item) * item.dataset.speedMultiplier + "px"
        }
    }
    return (
        <div className="contact_overlay">
          <div className="contact_overlay_img parallaxifyBg" data-speed-multiplier="-1.2"></div>
                <div className="co_content_flex">
                    <div className="co_content_text">
                    <h2>We sell premium properties to turn your dream house into your dream <span className="coct_color">Home</span></h2>
                    <p>Contact our expert real estate agents to inquire about property details or purchases.</p>
                    </div>
                    <div className="co_contact_form">
                        <h3>Speak with us</h3>
                        <p>Use this form to content one of our agents.</p>
                        <form id="contact-form" className="contact_form">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text" className="form-control form_input" placeholder="Name" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Phone</label>
        <input type="phone" className="form-control form_input" aria-describedby="phoneHelp" placeholder="Phone" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input type="email" className="form-control form_input" aria-describedby="emailHelp" placeholder="Email" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control form_input" rows="3" placeholder="Message"></textarea>
    </div>
    <button className="send_button">Submit</button>
</form>
                </div>
            </div>
        </div>
    )
}

export default ContactOverlay
