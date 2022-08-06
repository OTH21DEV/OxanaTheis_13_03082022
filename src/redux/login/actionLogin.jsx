import { FETCH_LOGIN_SUCCESS, FETCH_LOGIN_ERROR } from "./type";
import axios from "axios";

//we receive the token(from fetchApi response) if userCredentials(come from SignIn page while submit form) are confirmed by backend
const fetchLoginSuccess = (token) => {
  return {
    type: FETCH_LOGIN_SUCCESS,
    payload: token,
  };
};
const fetchLoginError = (error) => {
  return {
    type: FETCH_LOGIN_ERROR,
    payload: error,
  };
};

//userCredentials(come from SignIn page while submit form, dispatch fetchApi happen there)
//if confirmed - dispatch fetchLoginSuccess otherwise fetchLoginError

export const fetchApi = (userCredentials) => {
  return (dispatch) => {
    axios
      //post(url, data, config)

      .post(`http://localhost:3001/api/v1/user/login`, JSON.stringify(userCredentials), { headers: { "Content-Type": "application/json" } })

      //answer from api: status, message , body

      .then((response) => {
        console.log(response);
        let receivedToken = response.data.body.token;
        localStorage.setItem("token", `${receivedToken}`);

        dispatch(fetchLoginSuccess(receivedToken));
      })
      .catch((error) => {
        dispatch(fetchLoginError(error.message));
        console.log(error);
      });
  };
};
