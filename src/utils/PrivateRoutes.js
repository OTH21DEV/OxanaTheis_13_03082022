import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const tokenLocalStorage = localStorage.getItem("token");
  const tokenSessionStorage = sessionStorage.getItem("token");

  return tokenLocalStorage || tokenSessionStorage ? <Outlet /> : <Navigate to="/signin" />;
};

export default PrivateRoutes;
