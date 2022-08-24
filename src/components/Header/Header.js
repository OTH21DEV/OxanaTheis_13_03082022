import "../../../src/App.css";
import React, { useState, useEffect } from "react";
import logo from "../../assets/argentBankLogo.png";
import logout from "../../assets/logout.png";
import { useSelector } from "react-redux";

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
      <nav class="main-nav">
        <a class="main-nav-logo" href="./index.html">
          <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 class="sr-only">Argent Bank</h1>
        </a>
        <div>
          <a class="main-nav-item" href="./signin">
            <i class="fa fa-user-circle"></i>
            Sign In
          </a>
        </div>
      </nav>
    ) : (
      <nav class="main-nav">
        <a class="main-nav-logo" href="./index.html">
          <img class="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
          <h1 class="sr-only">Argent Bank</h1>
        </a>

        <div class="wrapper">
          <div class="name-wrapper">
            <a class="main-nav-item" href="./signin">
              <i class="fa fa-user-circle"></i>
              {state.firstName}
            </a>
          </div>

          <div class="sign-out-wrapper">
            {matches ? (
              <a class="main-nav-item" href="/" onClick={(e)=> handleClick(e)}>
                <img src={logout} alt="Logout icon" />
              </a>
            ) : (
              <a class="main-nav-item" href="/" onClick={(e)=> handleClick(e)}>
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
