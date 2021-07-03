import {
  AndroidOutlined,
  EmailOutlined,
  LocationOn,
  Phone,
  PhoneAndroid,
} from "@material-ui/icons";
import React from "react";
import VPForm from "./VPForm";
import "./ContactUs.css";
import PagesHero from "./PagesHero";
import Footer from "./Footer";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxImg from "./ParallaxImg";
import contactbg from "./img/contactbg.jpg";
import SortByContent from "./SortByContent";

function ContactUs() {
  return (
    <div>
          <div className="dark_gradient"></div>
      <PagesHero headerTitle="Contact Us" parallaximg1={contactbg} />
<SortByContent />
      <div className="contact_us">
        <div className="contact_us_flex">
          <form id="contact-form" className="contact_form_primary">
            <h3>Contact Us</h3>

            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control form_input"
                placeholder="Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Phone</label>
              <input
                type="phone"
                className="form-control form_input"
                aria-describedby="phoneHelp"
                placeholder="Phone"
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
              <input
                type="email"
                className="form-control form_input"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                className="form-control form_input"
                rows="3"
                placeholder="Message"
              ></textarea>
            </div>
            <button className="send_button">Submit</button>
          </form>
          <div className="contact_us_info">
              <div className="contact_us_icon_info_flex">
            <Phone />
            <div className="contact_us_icon_flex">
            <p>Phone</p>
            <a href="tel:1234561235">(123)-456-1235</a>
            </div>
            </div>
            <div className="contact_us_icon_info_flex">
            <PhoneAndroid />
            <div className="contact_us_icon_flex">
            <p>Mobile</p>
            <a href="tel:1234561235">(123)-456-1235</a>
            </div>
            </div>
            <div className="contact_us_icon_info_flex">
            <EmailOutlined />
            <div className="contact_us_icon_flex">
            <p>Email</p>
            <a href="mailto:example@gmail.com">example@gmail.com</a>
            </div>
            </div>
            <div className="contact_us_icon_info_flex">
            <LocationOn />
            <div className="contact_us_icon_flex">
            <p>Address</p>
            <p>2030 Lorem Ave, Lorem Circle, FL 12345</p>
            </div>
            </div>
          </div>
        </div>
        <div className="contact_map">
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6402.289532358501!2d-80.21163895982946!3d25.765165481805656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0a20ec8c111%3A0xff96f271ddad4f65!2sLorem%2C%20FL!5e0!3m2!1sen!2sus!4v1624050037325!5m2!1sen!2sus"></iframe>
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
