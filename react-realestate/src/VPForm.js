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
        <input type="text" className="form-control form_input" placeholder="Name" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Phone</label>
        <input type="phone" className="form-control form_input" aria-describedby="phoneHelp" placeholder="Phone" />
    </div>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email</label>
        <input type="email" className="form-control form_input" aria-describedby="emailHelp" placeholder="Email" />
    </div>
    <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea className="form-control form_input" rows="3" placeholder="Message"></textarea>
    </div>
    <MDBBtn className="send_button hero_button">Submit</MDBBtn>
</form>
        </div>
    )
}

export default VPForm
