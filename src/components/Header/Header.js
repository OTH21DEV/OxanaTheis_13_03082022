import "../../../src/App.css";
import React, { useState, useEffect } from "react";
import logo from "../../assets/argentBankLogo.png";
import logout from "../../assets/logout.png";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";

/**
 * Displays header
 * @returns {JSX}
 */

function Header() {
  const state = useSelector((state) => state.userInformation);
  const page = window.location.pathname;

  
  const [matches, setMatches] = useState(window.matchMedia("(min-width:375px) and (max-width:600px)").matches);

  useEffect(() => {
    window.matchMedia("(min-width: 375px)and (max-width:600px)").addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  function handleClick(e){
   localStorage.clear()
   sessionStorage.clear()
  }
  const displayHeader =
    page === "/signin" || page === "/" ? (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link className="main-nav-item" to="/signin">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
    ) : (
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>

        <div className="wrapper">
          <div className="name-wrapper">
            <Link className="main-nav-item" to="/signin">
              <i className="fa fa-user-circle"></i>
              {state.firstName}
            </Link>
          </div>

          <div className="sign-out-wrapper">
            {matches ? (
              <a className="main-nav-item" href="/" onClick={(e)=> handleClick(e)}>
                <img src={logout} alt="Logout icon" />
              </a>
            ) : (
              <a className="main-nav-item" href="/" onClick={(e)=> handleClick(e)}>
                <img src={logout} alt="Logout icon" />
                Sign Out
              </a>
            )}
          </div>
        </div>
      </nav>
    );
  return displayHeader;
}
export default Header;
