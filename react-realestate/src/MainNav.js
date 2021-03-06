import React, { useState } from "react";
import "./App.css";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBDropdownLink,
  MDBCollapse,
} from "mdb-react-ui-kit";
import logo1 from "./img/logo1.png";
import logoprata from "./img/logoprata.png";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useHistory } from "react-router-dom";
import MenuIcon from '@material-ui/icons/Menu';

function MainNav() {
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
    <MDBNavbar expand="lg" light bgColor="light" id="navbar" className="navbar">
      <MDBContainer fluid>
        <MDBNavbarBrand onClick={() => history.push("/")}>
          <img src={logoprata} alt="logo" id="logo" />
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon><MenuIcon /></MDBIcon>
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                onClick={() => history.push("/")}
                className="home"
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <a onClick={() => history.push('/AllProperties')}
 className="nav-link">
                All Properties
              </a>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Agents
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink
                      onClick={() => history.push("/AgentJohnProfile")}
                    >
                      Agent John Ryan
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink onClick={() => history.push('/AgentKevinProfile')}
>
                      Agent Kevin Richmond
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink onClick={() => history.push('/AgentMaryProfile')}
>
                      Agent Mary Williams
                    </MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink onClick={() => history.push('/ContactUs')}
>Contact Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <div className="nav_blog nav-item">
                <a onClick={() => history.push('/BlogList')}
 className="nav-link">
                  Blog
                </a>
              </div>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <div className="signup_flex">
            <a
              onClick={() => history.push("/LoginAuth")}
              className=" signup_button"
            >
              <AccountCircleIcon />
              Login / Sign Up
            </a>
          </div>
          <a onClick={() => history.push("/ProfileScreen")} className="hide">
            <AccountCircleIcon />
          </a>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default MainNav;
