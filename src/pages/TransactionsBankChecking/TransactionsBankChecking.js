import React from "react";
import "../../../src/App.css";
import Header from "../../components/Header/Header";
import AccountSection from "../../components/AccountSection/AccountSection";
import TransactionTable from "../../components/TransactionTable/TransactionTable";
import Footer from "../../components/Footer/Footer";

/**
 * Displays user's transaction's details of account's section - bank checking section
 * @returns {JSX}
 */
const Transactions = () => {
  const checkSectionTitle = "Argent Bank Checking (x8349)";
  const checkAmount = "$2,082.79";
  const availableBalance = "Available Balance";

  return (
    <div>
      <Header />
      <main style={{ display: "flex", alignItems: "center", flexDirection: "column" }} class="main bg-dark">
        <AccountSection style={{ width: "100%", textAlign: "center", borderBottom: "solid #98a3b0 1px" }} title={checkSectionTitle} amount={checkAmount} content={availableBalance} />
        <TransactionTable />
      </main>
      <Footer />
    </div>
  );
};

export default Transactions;
