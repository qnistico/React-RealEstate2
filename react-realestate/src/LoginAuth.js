import React, { useRef } from "react";
import { facebookProvider, googleProvider } from "./config/AuthMethods";
import socialMediaAuth from "./service/auth";
import google from "./img/google.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import { auth } from "./config/firebase-config";



export default function LoginAuth(props) {
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
  };

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const register = (e) => {
    e.preventDefault();

    auth.createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
    console.log(authUser);
    })
    .catch((error) => {
    alert(error.message);
    });

  }

  const signIn = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    ).then((authUser) => {
      console.log(authUser);
      })
      .catch((error) => alert(error.message));
  }

  

  return (
    <div className="login_signup_auth">
      <div className="dark_gradient"></div>
      <div className="login_auth_flex">
        <div className="login_body">
          <div className="login_signup_header">
          <h1>Log In</h1>
          </div>
<div className="login_signup_content">
          <form id="login" className="contact_form">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control form_input"
                aria-describedby="emailHelp"
                placeholder="Email"
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control form_input"
                aria-describedby="passwordHelp"
                placeholder="Password"
                ref={passwordRef}
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
            <button className="send_button" type="submit" onClick={signIn}>
              Log In
            </button>
            <p className="or">or</p>
          </form>
          <div className="login_button_flex">
            <button
              className="google_login"
              onClick={() => handleOnClick(googleProvider)}
            >
              <span className="login_icon_flex">
                Login with Google <img src={google} alt="" />
              </span>
            </button>
            <button
              className="facebook_login"
              onClick={() => handleOnClick(facebookProvider)}
            >
              <span className="login_icon_flex">
                Login with Facebook <FacebookIcon />
              </span>
            </button>
            </div>
          </div>
        </div>
        <div className="login_body signup_body">
          <div className="login_signup_header">
          <h1>Sign Up</h1>
          </div>
          <div className="login_signup_content">
          <form id="sign_up" className="contact_form">
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
            <button className="send_button sb_2" type="submit" onClick={register}>
              Sign Up
            </button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
}
