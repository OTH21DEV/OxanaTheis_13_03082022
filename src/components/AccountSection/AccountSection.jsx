import "../../../src/App.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import propTypes from "prop-types";
/*"docs": "jsdoc -c jsdoc.conf.json" */
/**
 * Displays the account's section on the user's page
 * @param {Object} props Account's section information
 * @param {String} props.title Account's section title
 * @param {String} props.amount Account's section amount
 * @param {String} props.content Account's section content
 * @param {String} props.btnId Account's section button id
 * @returns {JSX}
 */
const AccountSection = (props) => {
  const page = window.location.pathname.split("/")[1];

  let navigate = useNavigate();

  function handleBtn(e) {
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

AccountSection.propTypes = {
  props: propTypes.shape({
    title: propTypes.string.isRequired,
    amount: propTypes.string.isRequired,
    content: propTypes.string.isRequired,
    btnId: propTypes.string.isRequired,
  }),
};
export default AccountSection;
