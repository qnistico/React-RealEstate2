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
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";

function ContactUs() {
  return (
    <div>
      <Helmet>
        <title>Contact Us - PA Premium Realty</title>
        <meta
          name="description"
          content="Contact Pennsylvania Premium Realty"
        />

      </Helmet>
      <div className="dark_gradient"></div>
      <PagesHero headerTitle="Contact Us" parallaximg1={contactbg} />
      <SortByContent />
      <div className="contact_page">
        <div className="contact_us">
          <div className="contact_us_flex">
            <form id="contact-form" className="contact_form_primary">
              <h2>Contact Us</h2>

              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  aria-label="name"
                  name="name"
                  type="text"
                  className="form-control form_input"
                  placeholder="Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone</label>
                <input
                  aria-label="phone"
                  name="phone"
                  type="phone"
                  className="form-control form_input"
                  aria-describedby="phoneHelp"
                  placeholder="Phone"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  aria-label="email"
                  name="email"
                  type="email"
                  className="form-control form_input"
                  aria-describedby="emailHelp"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  aria-label="message"
                  name="message"
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
                  <p className="pb">2030 Lorem Ave, Lorem Circle, FL 12345</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact_map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1457879.8460371392!2d-78.66958803789858!3d40.877622931751745!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882d80261e32e589%3A0xc24621475022b43d!2sPennsylvania!5e0!3m2!1sen!2sus!4v1625813104172!5m2!1sen!2sus" title="Map of Pennsylvania"></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
