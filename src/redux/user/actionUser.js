import { GET_USER_DATA_SUCCESS, EDIT_USER_DATA } from "./type";
import axios from "axios";
import propTypes from "prop-types";

/**
 * Get user data action
 * @param {Object} data Contains user data information from API
 * @returns {Object}
 */
const getUserDataSuccess = (data) => {
  return {
    type: GET_USER_DATA_SUCCESS,
    payload: data,
  };
};

/**
 * Update user data action
 * @param {Object} data Conatins updated user information after form submit
 * @returns {Object}
 */
const editUserData = (data) => {
  return {
    type: EDIT_USER_DATA,
    payload: data,
  };
};

/**
 * Get user data from API - need the user token
 * @param {String} receivedToken Token which is received while login(action login - checkLoginSuccess).Will be taken from local storage (if remember me) or session storage (user page)
 * @returns {Object}
 */
export const getUserDataFromApi = (receivedToken) => {
  return (dispatch) => {
    axios
      //post(url, data, config)

      .post(
        `http://localhost:3001/api/v1/user/profile`,
        { receivedToken },
        {
          headers: {
            Authorization: `Bearer ${receivedToken}`,
            "Content-Type": "application/json",
          },
        }
      )

      //response: status, message , body (user data)
      .then((response) => {
        dispatch(getUserDataSuccess(response.data.body));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

/**
 * Update user data after form submit (user page) with new user information
 * @param {String} receivedToken Token which is received while login(action login - checkLoginSuccess)
 * @param {Object} updatedUserName Contains updated user data (get after form submit on user page)
 * @param {String} updatedUserName.firstName Contains updated user firstname (get after form submit on user page)
 * @param {String} updatedUserName.lastName Contains updated user lastname (get after form submit on user page)
 * @returns {Object}
 */
export const updateUserData = (receivedToken, updatedUserName) => {
  return (dispatch) => {
    axios
      //post(url, data, config)

      .put(`http://localhost:3001/api/v1/user/profile`, updatedUserName, {
        headers: {
          Authorization: `Bearer ${receivedToken}`,
          "Content-Type": "application/json",
        },
      })

      //answer from api: status, message , body

      .then((response) => {
       // console.log(response);

        dispatch(editUserData(updatedUserName));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

getUserDataSuccess.propTypes = {
  data: propTypes.object.isRequired,
};

editUserData.propTypes = {
  data: propTypes.object.isRequired,
};

getUserDataFromApi.propTypes = {
  receivedToken: propTypes.string.isRequired,
};

updateUserData.propTypes = {
  receivedToken: propTypes.string.isRequired,
  updatedUserName: propTypes.shape({
    firstName: propTypes.string.isRequired,
    lastName: propTypes.string.isRequired,
  }),
};
