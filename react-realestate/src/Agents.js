import React from "react";
import StarIcon from "@material-ui/icons/Star";
import StarHalfIcon from "@material-ui/icons/StarHalf";
import agent1 from "./img/agent1.jpg";
import agent3 from "./img/agent3.jpg";
import agent4 from "./img/agent4.jpg";
import "./Agents.css";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import Fade from "react-reveal/Fade";
import { useHistory } from "react-router-dom";

function agentReviews(props) {
  const history = useHistory();
  return (
    <div className="agent_reviews">
      <svg
        className="slope_reverse"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
      >
        <path
          fill="#fafafa"
          fill-opacity="1"
          d="M0,96L1440,192L1440,0L0,0Z"
        ></path>
      </svg>
      <h2>Our Team</h2>
      <Fade duration="1210">

      <div className="agent_reviews_flex">
        <div className="agent_reviews_content">
        <div class="corner-ribbon top-left sticky orange"><p className="ribbon_text">Agent 1</p></div>
          <a onClick={() => history.push('/AgentJohnProfile')}
>
            <img src={agent1} alt="real estate agent" />
          </a>
          <h3>John Ryan</h3>
          <div>
            <PhoneIcon />
            <a href="#!" tel="123-456-7891">
              (123)-456-7891
            </a>
          </div>
          <div>
            <EmailOutlinedIcon />
            <a href="#!" mailto="example@gmail.com">
              example@gmail.com
            </a>
          </div>
          <p>Rating</p>
          <div className="stars">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
          </div>
          <a onClick={() => history.push('/AgentJohnProfile')}
 className="hero_button">
            View Listings
          </a>
        </div>
        <div className="agent_reviews_content">
        <div class="corner-ribbon top-left sticky orange"><p className="ribbon_text">Agent 2</p></div>

          <a onClick={() => history.push('/AgentKevinProfile')}
>
            <img src={agent3} alt="real estate agent" />
          </a>
          <h3>Kevin Richmond</h3>
          <div>
            <PhoneIcon />
            <a href="#!" tel="123-456-7891">
              (123)-456-7892
            </a>
          </div>
          <div>
            <EmailOutlinedIcon />
            <a href="#!" mailto="example@gmail.com">
              example@gmail.com
            </a>
          </div>
          <p>Rating</p>
          <div className="stars">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
          </div>
          <a onClick={() => history.push('/AgentKevinProfile')}
 className="hero_button">
            View Listings
          </a>
        </div>
        <div className="agent_reviews_content">
        <div class="corner-ribbon top-left sticky orange"><p className="ribbon_text">Agent 3</p></div>

          <a onClick={() => history.push('/AgentMaryProfile')}
>
            <img src={agent4} alt="real estate agent" />
          </a>
          <h3>Mary Williams</h3>
          <div>
            <PhoneIcon />
            <a href="#!" tel="123-456-7891">
              (123)-456-7893
            </a>
          </div>
          <div>
            <EmailOutlinedIcon />
            <a href="#!" mailto="example@gmail.com">
              example@gmail.com
            </a>
          </div>
          <p>Rating</p>
          <div className="stars">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarHalfIcon />
          </div>
          <a onClick={() => history.push('/AgentMaryProfile')}
 className="hero_button">
            View Listings
          </a>
        </div>
      </div>
      </Fade>
    </div>
  );
}

export default agentReviews;
