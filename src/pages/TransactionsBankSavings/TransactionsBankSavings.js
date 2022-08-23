import React from "react";
import "../../../src/App.css";
import Header from "../../components/Header/Header";
import AccountSection from "../../components/AccountSection/AccountSection";

/**
 * Displays user's transaction's details of account's section - bank saving section
 * @returns {JSX}
 */
const TransactionsBankSavings = () => {
  const saveSectionTitle = "Argent Bank Savings (x6712)";
  const saveAmount = "$10,928.42";
  const availableBalance = "Available Balance";

  return (
    <div>
      <Header />
      <AccountSection style={{ width: "100%", textAlign: "center" }} title={saveSectionTitle} amount={saveAmount} content={availableBalance} />
    </div>
  );
};

export default TransactionsBankSavings;
