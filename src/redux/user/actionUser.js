import { GET_USER_DATA_SUCCESS, EDIT_USER_DATA } from "./type";
import axios from "axios";

//data- received information from API

const getUserDataSuccess = (data) => {
    return {
      type: GET_USER_DATA_SUCCESS,
      payload: data,
    };
  };
  const editUserData = (data) => {
    return {
      type: EDIT_USER_DATA,
      payload: data,
    };
  };
  
  export const getUserDataFromApi = (receivedToken) => {
    return (dispatch) => {
      axios
        //post(url, data, config)
  
        .post(`http://localhost:3001/api/v1/user/profile`, {receivedToken}, { headers: { 
          //  "Access-Control-Allow-Origin" : "*",
        "Authorization": `Bearer ${receivedToken}`,
        "Content-Type": "application/json" 
        } })
  
        //answer from api: status, message , body
  
        .then((response) => {
          console.log(response);
        //  let receivedToken = response.data.body.token;
         // localStorage.setItem("token", `${receivedToken}`);
  
         dispatch(getUserDataSuccess(response.data.body));
        })
        .catch((error) => {
            console.log(error)
        //  let displayErrorMessage = toast.error(`${error.message}`, { position: toast.POSITION.BOTTOM_RIGHT });
         // dispatch(checkLoginError(displayErrorMessage));
  
        });
    };

  }

  export const updateUserData = (receivedToken) => {
    return (dispatch) => {
      axios
        //post(url, data, config)
  
        .put(`http://localhost:3001/api/v1/user/profile`, {receivedToken}, { headers: { 
          //  "Access-Control-Allow-Origin" : "*",
        "Authorization": `Bearer ${receivedToken}`,
        "Content-Type": "application/json" 
        } })
  
        //answer from api: status, message , body
  
        .then((response) => {
          console.log(response);
        //  let receivedToken = response.data.body.token;
         // localStorage.setItem("token", `${receivedToken}`);
  
         dispatch(editUserData(response.data.body));
        })
        .catch((error) => {
            console.log(error)
        //  let displayErrorMessage = toast.error(`${error.message}`, { position: toast.POSITION.BOTTOM_RIGHT });
         // dispatch(checkLoginError(displayErrorMessage));
  
        });
    };

  }