import React, { useRef } from "react";
import "./MainNav2.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";

export default function Dropdowns() {
    const history = useHistory();
  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false);
  const onClick = () => setIsActive(!isActive);

  return (
    <div className="">
      <div className="menu-container">
        <button onClick={onClick} className="menu-trigger">
          <span className="nav-links dropdown_link">
            Agents <ExpandMoreIcon />
          </span>
        </button>
        <nav
          ref={dropdownRef}
          className={`menu ${isActive ? "active" : "inactive"}`}
        >
          <ul className="dropdown_content">
            <li>
              <a href="/AgentJohnProfile" className="dropdown_item">John Ryan</a>
            </li>
            <li>
              <a href="/AgentKevinProfile" className="dropdown_item">Kevin Richmond</a>
            </li>
            <li>
              <a href="/AgentMaryProfile" className="dropdown_item">Mary Williams</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
