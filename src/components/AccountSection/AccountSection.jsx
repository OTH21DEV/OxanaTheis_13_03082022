import "../../../src/App.css";
//import { useNavigate } from "react-router-dom";
import React from "react";
//import ButtonTransactions from "../ButtonTransactions/ButtonTransactions";
import { useNavigate } from "react-router-dom";

const AccountSection = (props) => {
  console.log(props.btnId);

  const page = window.location.pathname.split("/")[1];
  console.log(page);

  let navigate = useNavigate();

  function handleBtn(e) {
    console.log(e);

    if (props.btnId === "0") {
      navigate(`/transactions/bankchecking`);
    }
    if (props.btnId === "1") {
      navigate(`/transactions/banksavings`);
    }
    if (props.btnId === "2") {
      navigate(`/transactions/bankcreditcard`);
    }
  }

  return (
    <section class="account" style={props.style}>
      <div class="account-content-wrapper">
        <h3 class="account-title">{props.title}</h3>
        <p class="account-amount">{props.amount}</p>
        <p class="account-amount-description">{props.content}</p>
      </div>
      <div class="account-content-wrapper cta">
        {/* <ButtonTransactions btntype={props.btn}/>*/}
        {page === "dashboard" ? (
          <button class="transaction-button" onClick={(e) => handleBtn(e)}>
            View transactions
          </button>
        ) : (
          <></>
        )}
      </div>
    </section>
  );
};

export default AccountSection;
