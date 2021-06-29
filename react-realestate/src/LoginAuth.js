import React from "react";

export default function LoginAuth() {
  return (
    <div className="login_signup_auth">
      <div className="login_auth_flex">
        <div className="signup_body">
          <h2>Sign Up</h2>
          <form id="login_form" className="contact_form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="form-control form_input"
                aria-describedby="emailHelp"
                placeholder="Email"
                ref={emailRef}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="Password">Password</label>
              <input
                type="password"
                className="form-control form_input"
                aria-describedby="passwordHelp"
                placeholder="Password"
                ref={passwordRef}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="passwordConfirm">Confirm Password</label>
              <input
                type="password"
                className="form-control form_input"
                aria-describedby="passwordConfirmHelp"
                placeholder="Confirm Password"
                ref={passwordConfirmRef}
                required
              />
            </div>
            <button className="send_button" type="submit">
              Submit
            </button>
          </form>
        </div>
        <div className="login_body">Already have an account? Log In</div>
      </div>
    </div>
  );
}
