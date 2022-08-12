import { GET_USER_DATA_SUCCESS, EDIT_USER_DATA } from "./type";
import axios from "axios";

//data- will receive initial user information from API
const getUserDataSuccess = (data) => {
  return {
    type: GET_USER_DATA_SUCCESS,
    payload: data,
  };
};

//data-will take updated user information after form submit
const editUserData = (data) => {
  return {
    type: EDIT_USER_DATA,
    payload: data,
  };
};

//Get user data -need previous received token when check login information(action login)
//will be taken from local storage (if remember me) or session storage (user page)
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
        console.log(response);

        dispatch(getUserDataSuccess(response.data.body));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//update user data after form submit (user page) with new user information
//need previous received token when check login information(action login) and
//updated user data (get after form submit on user page)

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
        console.log(response);

        dispatch(editUserData(updatedUserName));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};
