import React from 'react';
import './App.css';
import "@material-ui/core";
import "@material-ui/icons";
import { MDBInput } from 'mdb-react-ui-kit';  
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import SearchIcon from '@material-ui/icons/Search';




function FilterContent() {
  
  function showAllAgents() {
    var showAgents = document.querySelectorAll('div.agent1, div.agent3, div.agent4');
    showAgents.forEach((el) => el.classList.add('show'));
    showAgents.forEach((el) => el.classList.remove('hide'));
  }
  
function showAgent1() {
  var filteragent1 = document.querySelectorAll( 'div.agent3, div.agent4');
  var showa1 = document.querySelectorAll('div.agent1');
  filteragent1.forEach((el) => el.classList.add('hide'));
  filteragent1.forEach((el) => el.classList.remove('show'));
  showa1.forEach((el) => el.classList.add('show'));
  showa1.forEach((el) => el.classList.remove('hide'));
}
function showAgent3() {
  var filteragent3 = document.querySelectorAll( 'div.agent1, div.agent4');
  var showa3 = document.querySelectorAll('div.agent3');

  filteragent3.forEach((el) => el.classList.add('hide'));
  filteragent3.forEach((el) => el.classList.remove('show'));
  showa3.forEach((el) => el.classList.add('show'));
  showa3.forEach((el) => el.classList.remove('hide'));
}
function showAgent4() {
  var filteragent4 = document.querySelectorAll( 'div.agent1, div.agent3');
  var showa4 = document.querySelectorAll('div.agent4');

  filteragent4.forEach((el) => el.classList.add('hide'));
  filteragent4.forEach((el) => el.classList.remove('show'));
  showa4.forEach((el) => el.classList.add('show'));
  showa4.forEach((el) => el.classList.remove('hide'));
}
function showAll() {
  var showAllProperties = document.querySelectorAll('.house, .apartment');
  showAllProperties.forEach((el) => el.classList.add('show'));
  showAllProperties.forEach((el) => el.classList.remove('hide'));
}
  function hideApartments() {
    var apartments = document.querySelectorAll(".apartment");
    apartments.forEach((el) => el.classList.add("hide"));
    apartments.forEach((el) => el.classList.remove('show'));
  
    var houses = document.querySelectorAll(".house");
    houses.forEach((el) => el.classList.add("show"));
    houses.forEach((el) => el.classList.remove('hide'));
  
  }
  
  function hideHouses() {
    var houses = document.querySelectorAll(".house");
    houses.forEach((el) => el.classList.add("hide"));
    houses.forEach((el) => el.classList.remove("show"));
  
    var apartments = document.querySelectorAll('.apartment');
    apartments.forEach((el) => el.classList.add('show'));
    apartments.forEach((el) => el.classList.remove('hide'));
    console.log(apartments);
  }
  window.addEventListener("DOMContentLoaded", function() {

});

    return (
      <div className="sort_by_content">
      <div className="sort_table">
      <div className="search_property">
          <div className="icon_flex">
      </div>
      </div>
      <div className="property_sorting">
      <div className="property_list">
      <MDBDropdown>
<MDBDropdownToggle className="property_dropdown">Property Type</MDBDropdownToggle>
<MDBDropdownMenu className="property_dropdown_2">
  <MDBDropdownItem>
    <MDBDropdownLink className="filter_btn" onClick={showAll} >All</MDBDropdownLink>
  </MDBDropdownItem>
  <MDBDropdownItem>
    <MDBDropdownLink className="filter_btn" onClick={hideApartments} >Homes</MDBDropdownLink>
  </MDBDropdownItem>
  <MDBDropdownItem>
    <MDBDropdownLink className="filter_btn" onClick={hideHouses}>Apartments</MDBDropdownLink>
  </MDBDropdownItem>
</MDBDropdownMenu>
</MDBDropdown>
      </div>
      
      
      
      <div className="agent_list">
      <MDBDropdown>
<MDBDropdownToggle className="property_dropdown">Agents</MDBDropdownToggle>
<MDBDropdownMenu className="property_dropdown_2">
<MDBDropdownItem>
    <MDBDropdownLink className="filter_btn" onClick={showAllAgents}>All Agents</MDBDropdownLink>
  </MDBDropdownItem>
  <MDBDropdownItem>
    <MDBDropdownLink className="filter_btn" onClick={showAgent1}>Agent John Ryan</MDBDropdownLink>
  </MDBDropdownItem>
  <MDBDropdownItem>
    <MDBDropdownLink className="filter_btn" onClick={showAgent3}>Agent Kevin Richmond</MDBDropdownLink>
  </MDBDropdownItem>
  <MDBDropdownItem>
    <MDBDropdownLink className="filter_btn" onClick={showAgent4}>Agent Mary Williams</MDBDropdownLink>
  </MDBDropdownItem>
</MDBDropdownMenu>
</MDBDropdown>
</div>
<div className="buy_rent">
      <MDBDropdown>
<MDBDropdownToggle className="property_dropdown">Buy / Rent</MDBDropdownToggle>
<MDBDropdownMenu className="property_dropdown_2">
  <MDBDropdownItem>
    <MDBDropdownLink className="filter_btn" onClick={showAll} >All</MDBDropdownLink>
  </MDBDropdownItem>
  <MDBDropdownItem>
    <MDBDropdownLink className="filter_btn" onClick={hideApartments} >Buy</MDBDropdownLink>
  </MDBDropdownItem>
  <MDBDropdownItem>
    <MDBDropdownLink className="filter_btn" onClick={hideHouses}>Rent</MDBDropdownLink>
  </MDBDropdownItem>
</MDBDropdownMenu>
</MDBDropdown>
      </div>
      </div>
      <a className="hero_button" href="/AllProperties">Search</a>
      
  </div>
  </div>
    )
}

export default FilterContent
