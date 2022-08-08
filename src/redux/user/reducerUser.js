import { GET_USER_DATA_SUCCESS, EDIT_USER_DATA } from "./type";

const initialState = {
 
  email: "",
  firstName: "",
  lastName: ""
};

const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,

      };

    default:
      return state;
  }
};
export default reducerUser;
