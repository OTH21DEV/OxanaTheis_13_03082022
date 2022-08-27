import React, { useState } from "react";
import { updateUserData } from "../../redux/user/actionUser";
import { useSelector, useDispatch } from "react-redux";
import propTypes from "prop-types";


const EditNameForm = (props) => {
  console.log(props)
  const dispatch = useDispatch();

  const [userNewName, setUserNewName] = useState({
    firstName: "",
    lastName: "",
  });
  console.log(props);

  const tokenLocalStorage = localStorage.getItem("token");
  //test
  const tokenSessionStorage = sessionStorage.getItem("token");

  //dipatch - take the userData from Api using received token ( saved in local storage - actionLogin)

  function handleForm(e) {
    e.preventDefault();

    if (tokenLocalStorage) {
      dispatch(updateUserData(tokenLocalStorage, userNewName));
    }
    if (tokenSessionStorage) {
      console.log(tokenSessionStorage);
      dispatch(updateUserData(tokenSessionStorage, userNewName));
    }
  }
  const state = useSelector((state) => state.userInformation);
  console.log(state);

  return (
    <form onSubmit={(e) => handleForm(e)}>
      <div className="edit-wrapper">
        <div>
          <label for="user-firstname"></label>
          <input type="text" placeholder={props.firstName} id="user-firstname" value={userNewName.firstName} onChange={(e) => setUserNewName({ ...userNewName, firstName: e.target.value })} />
        </div>
        <div>
          <label for="user-lastname"></label>
          <input type="text" placeholder={props.lastName} id="user-lastname" value={userNewName.lastName} onChange={(e) => setUserNewName({ ...userNewName, lastName: e.target.value })} />
        </div>
      </div>
      <div className="btn-edit-wrapper">
        <button type="submit" className="save-button">
          Save
        </button>
        <button className="cancel-button">Cancel</button>
      </div>
    </form>
  );
};

export default EditNameForm;
