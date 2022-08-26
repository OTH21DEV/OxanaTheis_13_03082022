import React from "react";
import { Outlet, Navigate } from "react-router-dom";

/**
 * Renders the child's route's element if there is a token otherwise redirects to signin page
 * @returns {JSX}
 */
const PrivateRoutes = () => {
  const tokenLocalStorage = localStorage.getItem("token");
  const tokenSessionStorage = sessionStorage.getItem("token");

  return tokenLocalStorage || tokenSessionStorage ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
