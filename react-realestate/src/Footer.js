import React from 'react';
import "./Footer.css";

function Footer() {
    return (
        <div>
            <footer>
                <div className="footer_flex">
                    <div className="footer_item footer_description">
                        <h4></h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis.</p>
                    </div>
                    <div className="footer_item footer_properties">
                        <h4></h4>
                        <ul>
                            <li>Mansions</li>
                            <li>Homes</li>
                            <li>Apartments</li>
                            <li>Offices</li>
                        </ul>
                    </div>
                    <div className="footer_item footer_agents">
                        <h4></h4>
                        <ul>
                            <li>John Ryan's Listings</li>
                            <li>Katie Adams' Listings</li>
                            <li>Meridith Williams' Listings</li>
                        </ul>
                    </div>
                    <div className="footer_item footer_contact">
                        <h4></h4>
                        <ul>
                            <li>Contact RealProperties</li>
                            <li>Contact Agent Ryan</li>
                            <li>Contact Agent Adams</li>
                            <li>Contact Agent Williams</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
