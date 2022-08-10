import React,{useState} from "react";



const EditNameForm = (props) => {
    const [userNewName, setUserNewName] = useState({
        firstName: "",
        lastName: "",
      });
      console.log(props)
  return (
    <form>
      <div class="edit-wrapper">
      <div >
        <label for="user-firstname"></label>
        <input type="text" placeholder={props.firstName} id="user-firstname" value={props.firstName} onChange={(e) => setUserNewName({ ...userNewName, firstName: e.target.value })} />
      </div>
      <div >
        <label for="user-lastname"></label>
        <input type="text" placeholder={props.lastName} id="user-lastname" value={props.lastName} onChange={(e) => setUserNewName({ ...userNewName, lastName: e.target.value })} />
      </div>
      </div>
      <div class="btn-edit-wrapper">
      <button class="save-button">Save</button>
      <button class="cancel-button">Cancel</button>
      </div>
    </form>
  );
};

export default EditNameForm;
