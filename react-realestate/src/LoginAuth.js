import React, { useRef } from "react";
import { facebookProvider, googleProvider } from "./config/AuthMethods";
import socialMediaAuth from "./service/auth";
import google from "./img/google.svg";
import FacebookIcon from '@material-ui/icons/Facebook';


export default function LoginAuth(props) {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
  };
  return (
    <div className="login_signup_auth">
      <div className="dark_gradient"></div>
      <div className="login_auth_flex">
        <div className="login_body">
          <h1>Sign Up</h1>
          
          <form id="login" className="contact_form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control form_input"
                aria-describedby="emailHelp"
                placeholder="Email"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control form_input"
                aria-describedby="passwordHelp"
                placeholder="Password"
              />
            </div>
            <div className="form-group" id="password-confirm">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control form_input"
                aria-describedby="passwordConfirmHelp"
                placeholder="Confirm Password"
              />
            </div>
            <button className="send_button" type="submit">
              Submit
            </button>
            <p className="or">or</p>
            
          </form>
          <div className="login_button_flex">
            <button className="google_login" onClick={() => handleOnClick(googleProvider)}>
              <span className="login_icon_flex">Login with Google <img src={google} alt="" /></span>
            </button>
            <button className="facebook_login" onClick={() => handleOnClick(facebookProvider)}>
              <span className="login_icon_flex">Login with Facebook <FacebookIcon /></span>
            </button>
            </div>
          <hr />
          <div className="">Already have an account? Log In</div>
        </div>
      </div>
    </div>
  );
}
