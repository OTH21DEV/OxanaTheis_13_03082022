import React from "react";
import "../../../src/App.css";
import Header from "../../components/Header/Header";
import AccountSection from "../../components/AccountSection/AccountSection";

/**
 * Displays user's transaction's details of account's section - credit card section
 * @returns {JSX}
 */
const TransactionsCreditCard = () => {
  const cardSectionTitle = "Argent Bank Credit Card (x8349)";
  const cardAmount = "$184.30";
  const currentBalance = "Current Balance";

  return (
    <div>
      <Header />
      <AccountSection style={{ width: "100%", textAlign: "center" }} title={cardSectionTitle} amount={cardAmount} content={currentBalance} />
    </div>
  );
};

export default TransactionsCreditCard;
