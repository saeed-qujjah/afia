import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import AuthContext from "../store/auth-context";
import Cookies from "js-cookie";

const RedirectPage = () => {
  // const ctx = useContext(AuthContext);
  // const nav = useNavigate();

  // useEffect(() => {
  //   if (!ctx.isLoggedIn) {
  //     nav("/Login");
  //   } else if (+Cookies.get("isAdmin") === 1) {
  //     nav("/TableAll");
  //   } else {
  //     nav("/QrReader");
  //   }
  // }, [ctx.isLoggedIn]);

  return <div></div>;
};

export default RedirectPage;
