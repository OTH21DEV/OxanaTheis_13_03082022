import { CHECK_LOGIN_SUCCESS, CHECK_LOGIN_ERROR } from "./type";
import axios from "axios";
import { toast } from "react-toastify";

//we receive the token(from fetchApi response) if userCredentials(come from SignIn page while submit form) are confirmed by backend
const checkLoginSuccess = (token) => {
  return {
    type: CHECK_LOGIN_SUCCESS,
    payload: token,
  };
};
const checkLoginError = (error) => {
  return {
    type: CHECK_LOGIN_ERROR,
    payload: error,
  };
};

//userCredentials(come from SignIn page while submit form, dispatch getTokenFromApi happen there)
//rememberMe - checkBox value (default value false, onChange becomes true -in SignIn page, saved in local storage)
//if confirmed - dispatch checkLoginSuccess otherwise checkLoginError

export const getTokenFromApi = (userCredentials, rememberMe) => {
  return (dispatch) => {
    axios
      //post(url, data, config)

      .post(`http://localhost:3001/api/v1/user/login`, JSON.stringify(userCredentials, rememberMe), { headers: { "Content-Type": "application/json" } })

      //answer from api: status, message , body

      .then((response) => {
        //console.log(response);
        let receivedToken = response.data.body.token;

        //check box: remember me, if yes - token saved in local storage, otherwise in session storage
        if (rememberMe === true ) {
          localStorage.setItem("token", `${receivedToken}`);
        } else {
          sessionStorage.setItem("token", `${receivedToken}`);
        }
   

        dispatch(checkLoginSuccess(receivedToken));
      })
      .catch((error) => {
        let displayErrorMessage = toast.error(`${error.message}`, { position: toast.POSITION.BOTTOM_RIGHT });
        dispatch(checkLoginError(displayErrorMessage));
      });
  };
};
