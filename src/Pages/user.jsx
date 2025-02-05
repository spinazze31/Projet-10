import Account from "../account/account";
import { useState } from "react";
import ConnectedUserProfile from "../Profile/connected-User-Profile";
import ModificationProfile from "../Profile/modification-profile";

function User() {
  const [isOpen, setIsopen] = useState(true);

  return (
    <>
      <main className="main-bg">
        {isOpen ? (
          <div className="header">
            <ConnectedUserProfile onSuccess={() => setIsopen(false)} />
          </div>
        ) : (
          <ModificationProfile onSuccess={() => setIsopen(true)} />
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
