import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../src/App.css";
import Header from "../../components/Header/Header";
import AccountSection from "../../components/AccountSection/AccountSection";
//import EditNameForm from "../../components/EditNameForm/EditNameForm";
import Footer from "../../components/Footer/Footer";
import { getUserDataFromApi } from "../../redux/user/actionUser";
import { updateUserData } from "../../redux/user/actionUser";

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

  //received token while signin(actionLogin)
  const tokenLocalStorage = localStorage.getItem("token");
  const tokenSessionStorage = sessionStorage.getItem("token");

  //dispatch - take the userData from Api using received token ( saved in local storage - actionLogin)
  useEffect(() => {
    if (tokenLocalStorage) {
      dispatch(getUserDataFromApi(tokenLocalStorage));
    }
    if (tokenSessionStorage) {
      dispatch(getUserDataFromApi(tokenSessionStorage));
    }
  }, [tokenLocalStorage, tokenSessionStorage]);

  console.log(state);

  //set Click of edit btn - default value false
  const [editUser, setEditUser] = useState(false);

  //set mode edit while click
  function handleClick(e) {
    setEditUser(true);
  }

  //set new constant to provide to dispatch while update user data
  const [userNewName, setUserNewName] = useState({
    firstName: "",
    lastName: "",
  });

  //dispatch update after form submit and set edit mode on false
  function handleForm(e) {
    e.preventDefault();

    if (tokenLocalStorage) {
      dispatch(updateUserData(tokenLocalStorage, userNewName));
    }
    if (tokenSessionStorage) {
      console.log(tokenSessionStorage);
      dispatch(updateUserData(tokenSessionStorage, userNewName));
    }
    setEditUser(false);
  }

  console.log(editUser);

  //cancel btn -edit Form
  function cancelEditUserName() {
    setEditUser(false);
  }

  //test btn transaction
/*
  const btn = document.querySelectorAll(".transaction-button");

  const btnCheckTransaction = btn[0];
  const btnSaveTransaction = btn[1];
  const btnCardTransaction = btn[2];

  console.log(btn);
  */
  //

  //display dashboard information
  const displayMode = !editUser ? (
    <>
      <Header />
      <main class="main bg-dark">
        <div class="header">
          <h1>
            Welcome back
            <br />
            <span>{state.firstName + " " + state.lastName}</span>
          </h1>
          <button class="edit-button" onClick={handleClick}>
            Edit Name
          </button>
        </div>
        <h2 class="sr-only">Accounts</h2>
        <AccountSection btnId={"0"} title={checkSectionTitle} amount={checkAmount} content={availableBalance} />
        <AccountSection btnId={"1"} title={saveSectionTitle} amount={saveAmount} content={availableBalance} />
        <AccountSection btnId={"2"} title={cardSectionTitle} amount={cardAmount} content={currentBalance} />
      </main>

      <Footer />
    </>
  ) : (
    <>
      <Header name={state.firstName} />
      <main class="main bg-dark">
        <div class="header">
          <h1>
            Welcome back
            <br />
          </h1>
        </div>
        {/* <EditNameForm firstName={state.firstName} lastName={state.lastName} />*/}

        <form onSubmit={(e) => handleForm(e)}>
          <div class="edit-wrapper">
            <div>
              <label for="user-firstname"></label>
              <input type="text" placeholder={state.firstName} id="user-firstname" value={userNewName.firstName} onChange={(e) => setUserNewName({ ...userNewName, firstName: e.target.value })} />
            </div>
            <div>
              <label for="user-lastname"></label>
              <input type="text" placeholder={state.lastName} id="user-lastname" value={userNewName.lastName} onChange={(e) => setUserNewName({ ...userNewName, lastName: e.target.value })} />
            </div>
          </div>
          <div class="btn-edit-wrapper">
            <button type="submit" class="save-button">
              Save
            </button>
            <button class="cancel-button" onClick={cancelEditUserName}>
              Cancel
            </button>
          </div>
        </form>

        <h2 class="sr-only">Accounts</h2>
        <AccountSection title={checkSectionTitle} amount={checkAmount} content={availableBalance} />
        <AccountSection title={saveSectionTitle} amount={saveAmount} content={availableBalance} />
        <AccountSection title={cardSectionTitle} amount={cardAmount} content={currentBalance} />
      </main>
      <Footer />
    </>
  );

  return displayMode;
};

export default User;
