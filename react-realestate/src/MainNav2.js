import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logoprata from "./img/logoprata.png";
import "./MainNav2.css";
import { useHistory } from "react-router-dom";
import Dropdowns from "./Dropdowns";


function MainNav2() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  const [showBasic, setShowBasic] = useState(false);

  function fixHeaderOnScoll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
      fixOn = 450,
      headerEl = document.getElementById("navbar");

    if (distanceY > fixOn) {
      headerEl.classList.add("fix_nav");
    } else {
      headerEl.classList.remove("fix_nav");
    }
  }

  window.addEventListener("scroll", fixHeaderOnScoll);
  const [show, handleShow] = useState(false);
  const history = useHistory();

  

  return (
    <div>
      <>
        <nav className="navbar" id="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
              <img src={logoprata} alt="logo" />
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/AllProperties"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  All Properties
                </NavLink>
              </li>
              <li className="nav-item">
                
                    <Dropdowns />
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/ContactUs"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Contact Us
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/BlogList"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Blog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/LoginAuth"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <div className="signup_flex">
            <a
              className=" signup_button"
            >
              <AccountCircleIcon />
              Login / Sign Up
            </a>
          </div>
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </>
    </div>
  );
}

export default MainNav2;
