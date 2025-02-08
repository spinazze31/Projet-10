import { useDispatch, useSelector } from "react-redux";
import { putProfile } from "../api/api";
import { useState } from "react";
import { userProfile } from "../Reducer/profile-reducer";

function ModificationProfile({ onSuccess }) {
  const { firstName, lastName, error } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [userName, setUserName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const userInformation = { userName };
    const buttonType = e.target.name;
    if (buttonType === "cancelButton") {
      onSuccess();
    } else putProfile(userInformation, token);
    dispatch(userProfile(token));
    onSuccess();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="form_container">
        <h2 className="form_container-title"> Edit user info</h2>
        <div className="form_input">
          <label htmlFor="user_name" className="form_title">
            User name :
          </label>
          <input
            onChange={(e) => setUserName(e.target.value)}
            type="text"
            name="user_name"
            id="user_name"
          />
        </div>
        <div className="form_input">
          <label htmlFor="first_name" className="form_title">
            First name :
          </label>
          <input
            className="form_background-color"
            type="text"
            name="first_name"
            id="first_name"
            defaultValue={firstName}
            readOnly
          />
        </div>
        <div className="form_input">
          <label htmlFor="last_name" className="form_title">
            Last name :
          </label>
          <input
            className="form_background-color"
            type="text"
            name="last_name"
            id="last_name"
            defaultValue={lastName}
            readOnly
          />
        </div>
        <div className="edit_button-container">
          <button
            type="submit"
            name="saveButton"
            className="edit-button button_user"
          >
            Save
          </button>
          <button
            onClick={handleSubmit}
            type="button"
            name="cancelButton"
            className="edit-button button_user"
          >
            Cancel
          </button>
        </div>
      </form>
      <p>{error}</p>
    </>
  );
}

export default ModificationProfile;
