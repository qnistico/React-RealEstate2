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
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


function MainNav() {
  
  const [showBasic, setShowBasic] = useState(false);

   function fixHeaderOnScoll() {

    const distanceY = window.pageYOffset || 
    document.documentElement.scrollTop,
    fixOn = 450,
    headerEl = document.getElementById('navbar');
   
   if (distanceY > fixOn) {
      headerEl.classList.add("fix_nav");
      } else {
       headerEl.classList.remove("fix_nav");
      }
    }
   
   window.addEventListener('scroll', fixHeaderOnScoll);
   
   
   
   
   
  return (
    <MDBNavbar expand="lg" light bgColor="light" id="navbar" className="navbar">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/"><img src={logoprata} alt="logo" id="logo" /></MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="/" className="home">
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
<MDBNavbarItem>
    <a href="/AllProperties" className="nav-link">
  All Listings
  </a>
</MDBNavbarItem>
            
            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link">
                  Agents
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="/AgentJohnProfile">Agent John Ryan</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="/AgentKevinProfile">Agent Kevin Richmond</MDBDropdownLink>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <MDBDropdownLink href="/AgentMaryProfile">Agent Mary Williams</MDBDropdownLink>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="/ContactUs">Contact Us</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
            <div className="nav_blog nav-item">
  <a href="/BlogList" className="nav-link">Blog</a>
</div>
            </MDBNavbarItem>
          </MDBNavbarNav>
          <div className="signup_flex">
  <a href="/LoginAuth" className=" signup_button"><AccountCircleIcon />Login / Sign Up</a>
  </div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default MainNav;
