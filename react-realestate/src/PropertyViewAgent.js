import React from 'react';
import agent1 from './img/agent1.jpg';
import agent2 from './img/agent2.jpg';
import agent3 from './img/agent3.jpg';
import agent4 from './img/agent4.jpg';
function PropertyViewAgent(props) {
    return (
        <div className="pspr_top_agent">
            <a onClick={props.aplink}><img src={props.agentImg} alt="" /></a>
            <h3>{props.agentName}</h3>
            <p>Phone: <a href="tel:1234561234">(123)-456-1234</a></p>
            <p>Office #: <a href="1234561235">(123)-456-1235</a></p>
            <p>Email: <a href="mailto:lorem@gmail.com">loremipsum@gmail.com</a></p>
            <p>Fax: <a href="tel:1234567891">(123)-456-7891</a></p>
            <a onClick={props.aplink} className="pspr_top_button">View My Listings</a>
        </div>
    )
}

export default PropertyViewAgent
