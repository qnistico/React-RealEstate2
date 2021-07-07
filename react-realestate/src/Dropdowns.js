import React, { useRef } from "react";
import "./MainNav2.css";
import { useDetectOutsideClick } from "./useDetectOutsideClick";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useHistory } from "react-router-dom";
/*
 * Read the blog post here:
 * https://letsbuildui.dev/articles/building-a-dropdown-menu-component-with-react-hooks
 */
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
          <ul>
            <li>
              <a onClick={() => history.push("/AgentJohnProfile")} className="dropdown_item">John Ryan</a>
            </li>
            <li>
              <a onClick={() => history.push("/AgentKevinProfile")} className="dropdown_item">Kevin Richmond</a>
            </li>
            <li>
              <a onClick={() => history.push("/AgentMaryProfile")} className="dropdown_item">Mary Williams</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
