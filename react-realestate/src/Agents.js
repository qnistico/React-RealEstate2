import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import agent1 from './img/agent1.jpg';
import agent3 from './img/agent3.jpg';
import agent4 from './img/agent4.jpg';
import "./Agents.css";

function agentReviews(props) {
  return (
    <div className="agent_reviews">
      <svg className="slope1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f1f2f5" fill-opacity="1" d="M0,96L1440,192L1440,0L0,0Z"></path></svg>
      <h2>Our Top Agents</h2>
      <div className="agent_reviews_flex">
        <div className="agent_reviews_content">
        <div class="ribbon ribbon-top-left"><span>#1 Agent</span></div>
          <a href="/AgentJohnProfile"><img src={agent1} alt="" /></a>
          <h3>John Ryan</h3>
          <a href="#!" tel="123-456-7891">
            (123)-456-7891
          </a>
          <a href="#!" mailto="example@gmail.com"></a>
          <p>Rating</p>
          <div className="stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          </div>
          <a href="/AgentJohnProfile" className="hero_button">View Listings</a>
      </div>
        <div className="agent_reviews_content">
        <div class="ribbon ribbon-top-left"><span>#2 Agent</span></div>
          <a href="/AgentKevinProfile"><img src={agent3} alt="" /></a>
          <h3>Kevin Richmond</h3>
          <a href="#!" tel="123-456-7891">
            (123)-456-7891
          </a>
          <a href="#!" mailto="example@gmail.com"></a>
          <p>Rating</p>
          <div className="stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          </div>
          <a href="/AgentKevinProfile" className="hero_button">View Listings</a>
      </div>
        <div className="agent_reviews_content">
        <div class="ribbon ribbon-top-left"><span>#3 Agent</span></div>
          <a href="/AgentMaryProfile"><img src={agent4} alt="" /></a>
          <h3>Mary Williams</h3>
          <a href="#!" tel="123-456-7891">
            (123)-456-7891
          </a>
          <a href="#!" mailto="example@gmail.com"></a>
          <p>Rating</p>
          <div className="stars">
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarIcon />
          <StarHalfIcon />
          </div>
          <a href="/AgentMaryProfile" className="hero_button">View Listings</a>
        </div>
      </div>
    </div>
  );
}

export default agentReviews;
