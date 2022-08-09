import React,{useState} from "react";



const EditNameForm = (props) => {
    const [userNewName, setUserNewName] = useState({
        firstName: "",
        lastName: "",
      });
  return (
    <form>
      <div class="input-wrapper">
        <label for="username">Username</label>
        <input type="text" placeholder={props.firstName} id="username" value={props.firstName} onChange={(e) => setUserNewName({ ...userNewName, firstName: e.target.value })} />
      </div>
      <div class="input-wrapper">
        <label for="password">Password</label>
        <input type="password" placeholder={props.lastName} id="password" value={props.lastName} onChange={(e) => setUserNewName({ ...userNewName, lastName: e.target.value })} />
      </div>

      <button class="sign-in-button">Save</button>
      <button class="sign-in-button">Cancel</button>
    </form>
  );
};

export default EditNameForm;
