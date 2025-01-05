import Account from "../account/account";
import { useState } from "react";
import { putProfile } from "../api/api";
import { useSelector } from "react-redux";

function User() {
  const [isOpen, setIsopen] = useState(true);
  const [userName, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { token } = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInformations = { userName, firstName, lastName };
    const buttonType = e.target.name;
    if (buttonType === "cancelButton") {
      setIsopen(true);
    } else putProfile(userInformations, token);
  };
  return (
    <>
      <main className="main-bg">
        {isOpen ? (
          <div className="header">
            <h1>
              Welcome back
              <br />
              Tony Jarvis!
            </h1>
            <button onClick={() => setIsopen(false)} className="edit-button">
              Edit Name
            </button>
          </div>
        ) : (
          <form className="form_container">
            <h2 className="form_container-title"> Edit user info</h2>
            <div className="form_input">
              <label htmlFor="user_name" className="form_title">
                User name :
              </label>
              <input
                onChange={(e) => setUsername(e.target.value)}
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
                onChange={(e) => setFirstName(e.target.value)}
                type="text"
                name="first_name"
                id="first_name"
              />
            </div>
            <div className="form_input">
              <label htmlFor="last_name" className="form_title">
                Last name :
              </label>
              <input
                onChange={(e) => setLastName(e.target.value)}
                type="text"
                name="last_name"
                id="last_name"
              />
            </div>
            <div className="edit_button-container">
              <button
                onSubmit={handleSubmit}
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
        )}
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />
        <Account
          title="Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Current Balance"
        />
      </main>
    </>
  );
}
export default User;
