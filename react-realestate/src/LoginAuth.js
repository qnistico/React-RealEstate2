import React, { useRef } from "react";
import { facebookProvider, googleProvider } from "./config/AuthMethods";
import socialMediaAuth from "./service/auth";
import google from "./img/google.svg";
import FacebookIcon from "@material-ui/icons/Facebook";
import { auth } from "./config/firebase-config";
import Fade from "react-reveal/Fade";
import { Helmet } from "react-helmet";
import firebase from "firebase";
import { login, logout, selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";




export default function LoginAuth(props) {
  {/*
  const handleOnClick = async (provider) => {
    const res = await socialMediaAuth(provider);
  };
*/}

  const user = useSelector(selectUser);


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
    <div>
      <Helmet>
        <title>Log In or Sign Up - PA Premium Realty</title>
        <meta
          name="description"
          content="Browse houses and apartments for sale and for rent in Pennsylvania"
        />
        
      </Helmet>
      <Fade duration="1210">
    <div className="login_signup_auth">
      <div className="dark_gradient"></div>
      <div className="login_auth_flex">
        <div className="login_body">
          <div className="login_signup_header">
          <h1> Demo Log In</h1>
          </div>
<div className="login_signup_content">
          <form id="login" className="contact_form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                className="form-control form_input"
                aria-label="email"
                placeholder="Email"
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                aria-label="password"
                className="form-control form_input"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            
            <button className="send_button" type="submit" onClick={signIn}>
              Log In
            </button>
          </form>
          {/*
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
          */}
          </div>
        </div>
        <div className="login_body signup_body">
          <div className="login_signup_header">
          <h2>Demo Sign Up</h2>
          </div>
          <div className="login_signup_content">
          <form id="sign_up" className="contact_form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                aria-label="email"
                className="form-control form_input"
                placeholder="Email"
                ref={emailRef}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                aria-label="password"
                className="form-control form_input"
                placeholder="Password"
                ref={passwordRef}
              />
            </div>
            
            <button className="send_button sb_2" type="submit" onClick={register}>
              Sign Up
            </button>
            {/*
            <button onClick={() => auth.signOut()}></button>
            */}
          </form>
          </div>
        </div>
      </div>
    </div>
    </Fade>
    </div>
  );
}
