import "../../../src/App.css";
import React from "react";
import logo from "../../assets/argentBankLogo.png";
import logout from "../../assets/logout.png";
import { useSelector} from "react-redux";


function Header() {
  const state = useSelector((state) => state.userInformation);
  const page = window.location.pathname;

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
            <a class="main-nav-item" href="./signin">
              <img src={logout} alt="Logout icon" />
              Sign Out
            </a>
          </div>
        </div>
      </nav>
    );
  return displayHeader;
}
export default Header;
