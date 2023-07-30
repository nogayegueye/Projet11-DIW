import React, { useState } from "react";
import "./formEdit.css";
import { useDispatch } from "react-redux";
import { updateUserName } from "../actions/useractions";

function FormEdit({
  onCancel,
  defaultUsername,
  defaultFirstName,
  defaultLastName,
  user,

}) {
  const [userName, setUserName] = useState(defaultUsername);
  const dispatch = useDispatch();

  const handleUserNameChange = (e) => {

    setUserName(e.target.value);
  };

  const handleSaveClick = async (e) => {
    e.preventDefault();

    const updatedUser = await updateUserName(user.user.id, userName, user.token);

    if (updatedUser) {
      dispatch({ type: "UPDATE_USERNAME", payload: updatedUser });
    }
  };

  return (
    <div>
      <main className="main bg-dark">
        <section className="sign-in-content-edit">
          <h1>Edit user info</h1>
          <form action="/submit-form" method="POST">
            <div className="input-wrapper-edit">
              <label htmlFor="username-edit">User name</label>
              <input
                type="text"
                id="username-edit"
                // defaultValue={defaultUsername}
                value={userName}
                onChange={handleUserNameChange}
              />
            </div>
            <div className="input-wrapper-edit">
              <label htmlFor="First-text-edit">First name</label>
              <input
                type="text"
                id="First-text-edit"
                readOnly
                defaultValue={defaultFirstName}
                
              />
            </div>
            <div className="input-wrapper-edit">
              <label htmlFor="Last-text-edit">Last name</label>
              <input
                type="text"
                id="Last-text-edit"
                readOnly
                defaultValue={defaultLastName}
              />
            </div>
            <div className="button-edit">
              <button className="sign-in-button" onClick={handleSaveClick}>
                Save
              </button>
              <button type="button" className="sign-in-button" onClick={onCancel}>
                Cancel
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default FormEdit;
