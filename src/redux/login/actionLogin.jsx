import { CHECK_LOGIN_SUCCESS, CHECK_LOGIN_ERROR } from "./type";
import axios from "axios";
import { toast } from "react-toastify";
import propTypes from "prop-types";

/**
 *
 * @param {String} token
 * @returns {Object} Token is received from fetchApi response if userCredentials(come from SignIn page while submit form) are confirmed by backend
 */
const checkLoginSuccess = (token) => {
  return {
    type: CHECK_LOGIN_SUCCESS,
    payload: token,
  };
};

/**
 *
 * @param {String} error
 * @returns {Object}
 */
const checkLoginError = (error) => {
  return {
    type: CHECK_LOGIN_ERROR,
    payload: error,
  };
};

/**
 *
 * Gets token from API, if user confirmed - dispatch checkLoginSuccess otherwise checkLoginError
 * @param {Object} userCredentials UserCredentials are the user email and password from input fields of form (page SignIn).Dispatch getTokenFromApi happen there
 * @param {String} userCredentials.email Email from input field
 * @param {String} userCredentials.password Password from input field
 * @param {Boolean} rememberMe Default value is false, onChange becomes true -in SignIn page , value saved in local storage
 * @returns {Object}
 */
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
        if (rememberMe === true) {
          localStorage.setItem("token", `${receivedToken}`);
        } else {
          sessionStorage.setItem("token", `${receivedToken}`);
        }

        dispatch(checkLoginSuccess(receivedToken));
      })
      .catch((error) => {
        let displayErrorMessage = toast.error(`${error.response.data.message}`, { position: toast.POSITION.BOTTOM_RIGHT });

        dispatch(checkLoginError(displayErrorMessage));
      });
  };
};

checkLoginSuccess.propTypes = {
  token: propTypes.string,
};

checkLoginError.propTypes = {
  error: propTypes.string,
};

getTokenFromApi.propTypes = {
  userCredentials: propTypes.shape({
    email: propTypes.string.isRequired,
    password: propTypes.string.isRequired,
  }),
  rememberMe: propTypes.bool.isRequired,
};
