import React from "react";
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";
import { useHistory } from "react-router-dom";

function AllAgentsSidebar() {
  const history = useHistory();
  return (
    <div className="all_agents_sidebar_flex">
      <div className="all_agents_sidebar">
        <div className="all_agents_item">
          <div className="aai_img_container">
            <a onClick={() => history.push('/AgentJohnProfile')}
>
              <img src={agent1} alt="" />
            </a>
          </div>
          <div className="aai_content">
              <a onClick={() => history.push('/AgentJohnProfile')}
 className="aai_name">John Ryan</a>
            <a href="tel:1234561235" className="aai_phone">(123)-456-1235</a>
            <a onClick={() => history.push('/AgentJohnProfile')}
 className="aai_button">View Profile</a>
          </div>
        </div>
      </div>
      <div className="all_agents_sidebar">
        <div className="all_agents_item">
          <div className="aai_img_container">
            <a onClick={() => history.push('/AgentKevinProfile')}
>
              <img src={agent3} alt="" />
            </a>
          </div>
          <div className="aai_content">
              <a onClick={() => history.push('/AgentKevinProfile')}
 className="aai_name">Kevin Richmond</a>
            <a href="tel:1234561235" className="aai_phone">(123)-456-1235</a>
            <a onClick={() => history.push('/AgentKevinProfile')}
 className="aai_button">View Profile</a>
          </div>
        </div>
      </div>
      <div className="all_agents_sidebar">
        <div className="all_agents_item aai_last">
          <div className="aai_img_container">
            <a onClick={() => history.push('/AgentMaryProfile')}
>
              <img src={agent4} alt="" />
            </a>
          </div>
          <div className="aai_content">
              <a onClick={() => history.push('/AgentMaryProfile')}
 className="aai_name">Mary Williams</a>
            <a href="tel:1234561235" className="aai_phone">(123)-456-1235</a>
            <a onClick={() => history.push('/AgentMaryProfile')}
 className="aai_button">View Profile</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllAgentsSidebar;
