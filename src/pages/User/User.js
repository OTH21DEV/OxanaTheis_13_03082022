import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../src/App.css";
import Header from "../../components/Header/Header";
import AccountSection from "../../components/AccountSection/AccountSection";
import Footer from "../../components/Footer/Footer";
import { getUserDataFromApi } from "../../redux/user/actionUser";

const User = () => {
  const checkSectionTitle = "Argent Bank Checking (x8349)";
  const saveSectionTitle = "Argent Bank Savings (x6712)";
  const cardSectionTitle = "Argent Bank Credit Card (x8349)";
  const checkAmount = "$2,082.79";
  const saveAmount = "$10,928.42";
  const cardAmount = "$184.30";
  const availableBalance = "Available Balance";
  const currentBalance = "Current Balance";

  //getting state of User (data) from redux store

  const state = useSelector((state) => state.userInformation);
  const dispatch = useDispatch();

  const tokenLocalStorage = localStorage.getItem("token");
  //test
  const tokenSessionStorage = sessionStorage.getItem("token");

  //dispatch - take the userData from Api using received token ( saved in local storage - actionLogin)

  //V1
  /*
  useEffect(() => {
    
    dispatch(getUserDataFromApi(tokenLocalStorage));
  }, [tokenLocalStorage]);
*/

  //V2
  useEffect(() => {
    if (tokenLocalStorage) {
      dispatch(getUserDataFromApi(tokenLocalStorage));
    } if (tokenSessionStorage) {
      dispatch(getUserDataFromApi(tokenSessionStorage));
    }
  }, [tokenLocalStorage, tokenSessionStorage]);

  console.log(state);

  return (
    <>
      <Header />
      <main class="main bg-dark">
        <div class="header">
          <h1>
            Welcome back
            <br />
            <span>{state.firstName + " " + state.lastName}</span>
          </h1>
          <button class="edit-button">Edit Name</button>
        </div>
        <h2 class="sr-only">Accounts</h2>
        <AccountSection title={checkSectionTitle} amount={checkAmount} content={availableBalance} />
        <AccountSection title={saveSectionTitle} amount={saveAmount} content={availableBalance} />
        <AccountSection title={cardSectionTitle} amount={cardAmount} content={currentBalance} />
      </main>
      <Footer />
    </>
  );
};

export default User;
