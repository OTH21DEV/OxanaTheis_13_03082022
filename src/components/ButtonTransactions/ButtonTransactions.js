import React ,{useEffect}from "react";
import "../../../src/App.css";
import { useNavigate } from "react-router-dom";

import AccountSection from "../../components/AccountSection/AccountSection";

const ButtonTransactions = (props) => {
  console.log(props.btn)


  let navigate = useNavigate();

  function handleBtn(e) {
    localStorage.setItem("btn", `${props.btn}`);
    navigate(`/transactions`);
  }

  return (
    <button class="transaction-button" onClick={(e)=>handleBtn(e)}>
      View transactions
    </button>
  );
};

export default ButtonTransactions;
