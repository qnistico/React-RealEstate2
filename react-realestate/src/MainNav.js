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

function MainNav() {
  
  const [showBasic, setShowBasic] = useState(false);
  function resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || 
    document.documentElement.scrollTop,
    shrinkOn = 5,
    headerEl = document.getElementById('js-header');
   
   if (distanceY > shrinkOn) {
      headerEl.classList.add("smaller");
      } else {
       headerEl.classList.remove("smaller");
      }
    }
   
   window.addEventListener('scroll', resizeHeaderOnScroll);

   
   
  return (
    <MDBNavbar expand="lg" light bgColor="light" id="js-header">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/"><img src={logo1} alt="" id="logo" /></MDBNavbarBrand>

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
<div className="login_flex">
  <a href="#!" className="nav-link login_button">Login</a>
  <a href="#!" className=" signup_button">Sign Up</a>
</div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default MainNav;
