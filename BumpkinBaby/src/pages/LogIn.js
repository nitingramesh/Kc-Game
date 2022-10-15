import React, { useState, useEffect } from "react";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./LogIn.css";
//import fire from "./fire";

const LogIn = () => {
  /*
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };
  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);
  */

  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/homepage");
  }, [navigate]);

  return (
    <div className="log-in-div6">
      <div className="rectangle-div44" />
      <button className="click-here-div">Click here</button>
      <div className="dont-have-an-account">Don’t have an account?</div>
      <img className="rectangle-icon2" alt="" src="../rectangle@2x.png" />
      <div className="log-in-div7">Log in</div>
      <input
        className="component-input3"
        type="text"
        autoFocus
        required
        //value={email}
        //onChange={(e) => setEmail(e.target.value)}
        placeholder="Username"
        minLength={5}
      />
      <input
        className="component-input4"
        type="password"
        autoFocus
        required
        //value={password}
        //onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        minLength={10}
      />

      <button className="button6" onClick={onButtonClick}>
        <div className="rectangle-div45" />
        <div className="log-in-div8">Log in</div>
      </button>
      <div className="logo-div10">
        <div className="baby-got-rash10">Bumpkin baby</div>
        <img className="group-icon10" alt="" src="../group10.svg" />
      </div>
    </div>
  );
};

export default LogIn;
