import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { login } from "../actions/useractions.js";
import { useNavigate } from "react-router-dom";
import "./mainPageConnect.css";

function MainPageConnect() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignIn = async () => {
    const userInfo = await login(username, password);
    if (userInfo) {
      dispatch({
        type: "SET_USER",
        payload: userInfo,
      });
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/User");
    }
  }, [isLoggedIn, navigate]);

  return (
    <div className="container">
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <button
              type="button"
              className="sign-in-button"
              onClick={handleSignIn}
            >
              Sign In
            </button>
          </form>
        </section>
      </main>
    </div>
  );
}

export default MainPageConnect;
