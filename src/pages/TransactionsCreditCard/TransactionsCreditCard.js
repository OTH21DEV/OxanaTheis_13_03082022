import React from "react";
import "../../../src/App.css";
import Header from "../../components/Header/Header";
import AccountSection from "../../components/AccountSection/AccountSection";

const TransactionsCreditCard = () => {
  
    const cardSectionTitle = "Argent Bank Credit Card (x8349)";
    const cardAmount = "$184.30";
    const currentBalance = "Current Balance";

  const btn = document.querySelector(".transaction-button");
  console.log(btn);

  const page = window.location.pathname.split("/")[2];
  console.log(page);


  return (
    <div>
      <Header />
      <AccountSection style={{width:'100%', textAlign:'center'}} title={cardSectionTitle} amount={cardAmount} content={currentBalance} />
    </div>
  );
};

export default TransactionsCreditCard;
