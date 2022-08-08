import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../../src/App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getTokenFromApi } from "../../redux/login/actionLogin";

const SignIn = () => {
  //getting state of Login (data) from redux store
  const state = useSelector((state) => state.authentification);
  const dispatch = useDispatch();

  console.log(state);

  //set user - information will be set from input fields of form
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  //dispatch after form submit providing the user credentials
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(getTokenFromApi(user));
  };

  //if token received - user is aible to access the dashboard page
  let navigate = useNavigate();
  useEffect(() => {
    if (state.token) {
      navigate(`/dashboard`);
    }
  });

  return (
    <>
      <Header></Header>
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={(e) => handleForm(e)}>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" value={user.name} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>

            <button class="sign-in-button">Sign In</button>
            <ToastContainer />
          </form>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default SignIn;