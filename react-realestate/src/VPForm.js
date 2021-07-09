import React from 'react'
import { MDBBtn } from "mdb-react-ui-kit";


function VPForm(props) {
    return (
        <div>
            <div className="form_title">
                <a href="#!">{props.title}</a>
            </div>
            <form id="contact-form" className="contact_form">
    <div className="form-group">
        <label htmlFor="name">Name</label>
        <input type="text"  name="name" className="form-control form_input" aria-labelledby="name" placeholder="Name" />
    </div>
    <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input type="phone"  name="phone" className="form-control form_input" aria-labelledby="phone" placeholder="Phone" />
    </div>
    <div className="form-group">
        <label htmlFor="email">Email</label>
        <input type="email"  name="email" className="form-control form_input" aria-labelledby="email" placeholder="Email" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
    <textarea  name="message" className="form-control form_input" rows="3" aria-labelledby="message" placeholder="Message"></textarea>
    </div>
    <MDBBtn className="send_button hero_button">Submit</MDBBtn>
</form>
        </div>
    )
}

export default VPForm
