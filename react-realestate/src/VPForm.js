import React from 'react'

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
    <button className="send_button">Submit</button>
</form>
        </div>
    )
}

export default VPForm
