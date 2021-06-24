import React from 'react';
import './App.css';
import { MDBBtn } from 'mdb-react-ui-kit';
import "@material-ui/core";
import "@material-ui/icons";
import { MDBInput } from 'mdb-react-ui-kit';  
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem, MDBDropdownLink } from 'mdb-react-ui-kit';
import SearchIcon from '@material-ui/icons/Search';




function SortByContent() {
    return (
        <div className="sort_table">
            <div className="search_property">
                <div className="icon_flex">
            </div>
            </div>
            <div className="property_sorting">
            <div className="property_list">
            <MDBDropdown>
      <MDBDropdownToggle className="property_dropdown">Property Types</MDBDropdownToggle>
      <MDBDropdownMenu className="property_dropdown_2">
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Homes</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Apartments</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Offices</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
            </div>
            <div className="rooms_list">
            <MDBDropdown>
      <MDBDropdownToggle className="property_dropdown">Rooms</MDBDropdownToggle>
      <MDBDropdownMenu className="property_dropdown_2">
        <MDBDropdownItem>
          <MDBDropdownLink href="#">1 Room</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">2 Rooms</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">3 Rooms</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
            </div>
            <div className="property_price">
            <MDBDropdown>
      <MDBDropdownToggle className="property_dropdown">Price</MDBDropdownToggle>
      <MDBDropdownMenu className="property_dropdown_2">
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Lowest to Highest</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Highest to Lowest</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Any Price</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </div>
            <div className="agent_list">
            <MDBDropdown>
      <MDBDropdownToggle className="property_dropdown">Agents</MDBDropdownToggle>
      <MDBDropdownMenu className="property_dropdown_2">
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Agent John Ryan</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Agent Katie Adams</MDBDropdownLink>
        </MDBDropdownItem>
        <MDBDropdownItem>
          <MDBDropdownLink href="#">Agent Mary Williams</MDBDropdownLink>
        </MDBDropdownItem>
      </MDBDropdownMenu>
    </MDBDropdown>
    </div>
            </div>
            <MDBBtn className="hero_button">Search</MDBBtn>
            
        </div>
    )
}

export default SortByContent
