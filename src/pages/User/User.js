import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "../../../src/App.css";
import Header from "../../components/Header/Header";
import AccountSection from "../../components/AccountSection/AccountSection";
import Footer from "../../components/Footer/Footer";
import { getUserDataFromApi } from "../../redux/user/actionUser";
import { updateUserData } from "../../redux/user/actionUser";

/**
 * Displays user page
 * @returns {JSX}
 */
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

  /**
   * Displays error message for each input field
   * @param {String} tag  Tag is a part of the name class of div element in the form (includes input )
   * @param {String} message Message is a text content for each error case
   * @param {boolean} valid
   */
  const errorDisplay = (tag, message, valid) => {
    const spanMsg = document.querySelector("." + tag + "-formData > span");
    const inputField = document.querySelector("." + tag + "-formData");

    if (!valid) {
      inputField.classList.add("error");
      spanMsg.textContent = message;
    } else {
      inputField.classList.remove("error");
      spanMsg.textContent = message;
    }
  };

  /**
   * Controls the input fields and displays an error message
   * @param {String} type Type is a given name of input field
   * @param {String} value Value of input field
   * @param {HTMLElement} element Element is the input field
   */
  const nameChecker = (type, value, element) => {
    if (value.length < 3 || value.length > 20) {
      errorDisplay(type, type + " must contain 3-20 characters");

      element.style.border = "3px solid red";
    } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
      errorDisplay(type, type + "  must not contain special characters");

      element.style.border = "3px solid red";
    } else {
      errorDisplay(type, "", true);
      errorDisplay.textContent = "";
      element.style.border = "3px solid green";
    }
  };

  /**
   * Onchange event of input , controls the fields and displays error message
   * @param {*} e
   */
  function handleInput(e) {
    console.log(e.target);
    e.preventDefault();
    if (e.target.id === "firstname-user") {
      nameChecker("firstname", e.target.value, document.getElementById("firstname-user"));
    }

    if (e.target.id === "lastname-user") {
      nameChecker("lastname", e.target.value, document.getElementById("lastname-user"));
    }
  }

  /**
   * Onsubmit event , controls the input fields and dispatch actions 
   */
  function handleForm(e) {
    let isValid = true;
    e.preventDefault();

    if (e.target[0].value.length < 3 || e.target[0].value.length > 20 || !e.target[0].value.match(/^[a-zA-Z0-9_.-]*$/)) {
      isValid = false;
      errorDisplay("firstname", "Please complete this field as requested");
      document.getElementById("firstname-user").style.border = "3px solid red";
    }

    if (e.target[1].value.length < 3 || e.target[1].value.length > 20 || !e.target[1].value.match(/^[a-zA-Z0-9_.-]*$/)) {
      isValid = false;
      errorDisplay("lastname", "Please complete this field as requested");
      document.getElementById("lastname-user").style.border = "3px solid red";
    }

    if (isValid === true) {
      if (tokenLocalStorage) {
        dispatch(updateUserData(tokenLocalStorage, userNewName));
      } else if (tokenSessionStorage) {
        dispatch(updateUserData(tokenSessionStorage, userNewName));
      }
      setEditUser(false);
    }
  }

  // console.log(editUser);

  /**
   * Cancel the edit Form while click button 'cancel'
   */
  function cancelEditUserName() {
    setEditUser(false);
  }

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
     

        <form onSubmit={(e) => handleForm(e)}>
          <div class="edit-wrapper">
            <div className="firstname-formData">
              <label for="firstname-user"></label>
              <input
                type="text"
                placeholder={state.firstName}
                id="firstname-user"
                value={userNewName.firstName}
                onChange={(e) => {
                  setUserNewName({ ...userNewName, firstName: e.target.value });
                  handleInput(e);
                }}
              />
              <span class="error"></span>
            </div>
            <div className="lastname-formData">
              <label for="lastname-user"></label>
              <input
                type="text"
                placeholder={state.lastName}
                id="lastname-user"
                value={userNewName.lastName}
                onChange={(e) => {
                  setUserNewName({ ...userNewName, lastName: e.target.value });
                  handleInput(e);
                }}
              />

              <span class="error"></span>
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
