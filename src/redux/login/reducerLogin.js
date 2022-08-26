import { CHECK_LOGIN_SUCCESS, CHECK_LOGIN_ERROR } from "./type";
import propTypes from "prop-types";

const initialState = {
  token: "",
  isLogged: false,
  error: "",
};

/**
 * Reducer for Login actions
 * @param {Object} state State is equal to initial state
 * @param {Object} action Login actions
 * @param {String} action.type type of login action
 * @param {String} action.payload received token
 * @returns {Object} new State
 */
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
reducerLogin.propTypes = {
  state: propTypes.object.isRequired,
  action: propTypes.shape({
    type: propTypes.string.isRequired,
    payload: propTypes.string.isRequired,
  }),
};

export default reducerLogin;
