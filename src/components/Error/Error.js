import React from "react";
import { Link } from "react-router-dom";
import error from "../../assets/error.svg";

const Error = () => {
  return (
    <div className="error-wrapper">
      <div>
        <span style={{ color: "#12002b", fontWeight: "bold", fontSize: "2.9em" }}>404 error</span>
        <br />
        <h3>PAGE NOT FOUND</h3>
        <p>Are you sure the website URL is correct?</p>
        <Link to="/" className="title-link">
          Go Back Home
        </Link>
      </div>
      <img className="error-image" src={error} alt=""></img>
    </div>
  );
};

export default Error;
