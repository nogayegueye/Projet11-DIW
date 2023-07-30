import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import argentBankLogo from "../images/argentBankLogo.png";
import "./navbar.scss";
import { logout } from "../actions/useractions.js";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

function Navbar({ isLoggedIn }) {
  const user = useSelector((state) => state.user);
  const userName = user?.user?.userName || "Guest";
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(logout());

    navigate("/");
  };

  return (
    <div>
      <nav className="main-nav">
        <NavLink to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Logo Argent Bank"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </NavLink>

        {isLoggedIn && (
          <div>
            <a href="./user.html" className="main-nav-item">
              <i className="fa fa-user-circle"></i>
              {userName}
            </a>
            <button className="main-nav-item-button" onClick={handleSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </div>
        )}
        {!isLoggedIn && (
          <NavLink to="/Connexion" className="main-nav-item">
            <i className="fa fa-user-circle"></i> Sign In
          </NavLink>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
