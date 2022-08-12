import React from "react";
import "../../../src/App.css";
import Header from "../../components/Header/Header";
import AccountSection from "../../components/AccountSection/AccountSection";

const Transactions = () => {
  const checkSectionTitle = "Argent Bank Checking (x8349)";
  const checkAmount = "$2,082.79";
  const availableBalance = "Available Balance";

  const btn = document.querySelector(".transaction-button");
  console.log(btn);

  const page = window.location.pathname.split("/")[2];
  console.log(page);

  if (page === "bankchecking") {
    btn.style.visibility = "hidden";
  }
  /*

    const btn = document.querySelectorAll(".transaction-button");
    const btnCheckTransaction = btn[0];
    console.log( btnCheckTransaction )
    const btnSaveTransaction = btn[1];
    console.log( btnSaveTransaction )
    const btnCardTransaction = btn[2];
    */

  /*
const test = btnCheckTransaction[0]?(
    <AccountSection title={checkSectionTitle} amount={checkAmount} content={availableBalance}/>
):
<AccountSection title={saveSectionTitle} amount={saveAmount} content={availableBalance} />
*/
  return (
    <div>
      <Header />
      <AccountSection title={checkSectionTitle} amount={checkAmount} content={availableBalance} />
    </div>
  );
};

export default Transactions;
