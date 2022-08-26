import { GET_USER_DATA_SUCCESS, EDIT_USER_DATA } from "./type";
import propTypes from "prop-types";

const initialState = {
  email: "",
  firstName: "",
  lastName: "",
};

/**
 * Reducer for user actions
 * @param {Object} state State is equal to initial state
 * @param {Object} action User actions
 * @param {String} action.type type of user action
 * @param {Object} action.payload user data (received or to update)
 * @param {String} action.payload.email user email (received or to update)
 * @param {String} action.payload.firstName user firstname (received or to update)
 * @param {String} action.payload.lastName user lastname (received or to update)
 * @returns {Object} new State
 */
const reducerUser = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_DATA_SUCCESS:
      return {
        ...state,
        email: action.payload.email,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };

    case EDIT_USER_DATA:
      return {
        ...state,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
      };
    default:
      return state;
  }
};

reducerUser.propTypes = {
  state: propTypes.object.isRequired,
  action: propTypes.shape({
    type: propTypes.string.isRequired,
    payload: propTypes.shape({
      email: propTypes.string.isRequired,
      firstName: propTypes.string.isRequired,
      lastName: propTypes.string.isRequired,
    }),
  }),
};
export default reducerUser;
