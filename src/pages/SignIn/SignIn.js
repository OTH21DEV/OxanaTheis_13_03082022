import React, {useState} from "react";
import "../../../src/App.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

//

import { useSelector, useDispatch } from "react-redux";
import { fetchApi } from "../../redux/login/actionLogin";



const SignIn = () => {
  
  const state = useSelector((state) => console.log(state));
  const dispatch = useDispatch();
  
  console.log(state);

  const [user, setUser] = useState({
    email: "",
    password: "",
})


  const handleForm = e => {
    e.preventDefault();
    dispatch(fetchApi(user))
    console.log(state)
  }

  return (
    <>
      <Header></Header>
      <main class="main bg-dark">
        <section class="sign-in-content">
          <i class="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={e => handleForm(e)}>
            <div class="input-wrapper">
              <label for="username">Username</label>
              <input type="text" id="username" 
              value={user.name} onChange={e => setUser({...user, email:e.target.value})}
              />
            </div>
            <div class="input-wrapper">
              <label for="password">Password</label>
              <input type="password" id="password" 
               value={user.password} onChange={e => setUser({...user, password:e.target.value})}
              />
            </div>
            <div class="input-remember">
              <input type="checkbox" id="remember-me" />
              <label for="remember-me">Remember me</label>
            </div>

         

            <button class="sign-in-button">Sign In</button>
          </form>
        </section>
      </main>
      <Footer></Footer>
    </>
  );
};

export default SignIn;
