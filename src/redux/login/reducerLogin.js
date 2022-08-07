import { CHECK_LOGIN_SUCCESS, CHECK_LOGIN_ERROR } from "./type";

const initialState = {
  // token: localStorage.getItem("token"),
  token: "",
  isLogged: false,
  error: "",
};

const reducerLogin = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_LOGIN_SUCCESS:
      return {
        ...state,
        isLogged: true,
        token: action.payload,
        error: "",
      };
    case CHECK_LOGIN_ERROR:
      return {
        ...state,
        isLogged: false,
        token: "",
        error: action.payload,
      };

    default:
      return state;
  }
};
export default reducerLogin;
