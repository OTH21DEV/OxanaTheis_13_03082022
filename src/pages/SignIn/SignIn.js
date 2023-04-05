import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "../../../src/App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { getTokenFromApi } from "../../redux/login/actionLogin";

/**
 *Displays sign in page
 * @returns {JSX}
 */
const SignIn = () => {
  //getting state of Login (data) from redux store
  const state = useSelector((state) => state.authentification);
  const dispatch = useDispatch();


  //set user - information will be set from input fields of form for dispatch
  const [user, setUser] = useState({
    email: "steve@rogers.com",
    password: "password456",
  });

  //dispatch after form submit providing the user credentials and value of check box
  const handleForm = (e) => {
    e.preventDefault();
    dispatch(getTokenFromApi(user, isChecked));
  };

  //if token received - user is aible to access the dashboard page
  let navigate = useNavigate();
  useEffect(() => {
    if (state.token) {
      navigate(`/dashboard`);
    } 
   
  });

  //set value of remember me - checkbox
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Header></Header>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={(e) => handleForm(e)}>
            <div className="input-wrapper">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
            </div>
            <div className="input-remember">
              <input
                value=""
                type="checkbox"
                id="remember-me"
                onChange={() => {
                  setIsChecked(!isChecked);
                  localStorage.setItem("remember-me", `${!isChecked}`);
                }}
              />
              <label for="remember-me">Remember me</label>
            </div>

            <button className="sign-in-button">Sign In</button>
            <ToastContainer />
          </form>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default SignIn;
