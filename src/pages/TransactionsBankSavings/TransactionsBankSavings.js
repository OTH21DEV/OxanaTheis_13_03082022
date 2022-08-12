import React from "react";
import "../../../src/App.css";
import Header from "../../components/Header/Header";
import AccountSection from "../../components/AccountSection/AccountSection";

const TransactionsBankSavings = () => {
    const saveSectionTitle = "Argent Bank Savings (x6712)";
    const saveAmount = "$10,928.42";
    const availableBalance = "Available Balance";
   

  const btn = document.querySelector(".transaction-button");
  console.log(btn);

  const page = window.location.pathname.split("/")[2];
  console.log(page);


  return (
    <div>
      <Header />
      <AccountSection title={saveSectionTitle} amount={saveAmount} content={availableBalance} />
    </div>
  );
};

export default TransactionsBankSavings;
