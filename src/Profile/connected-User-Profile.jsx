import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../Reducer/profile-reducer";
import { useEffect } from "react";

function ConnectedUserProfile({ onSuccess }) {
  const { firstName, lastName, error } = useSelector((state) => state.profile);
  const { token } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userProfile(token));
  }, [firstName, lastName]);

  return (
    <>
      <h1>
        Welcome back
        <br />
        {firstName} {lastName}!
      </h1>
      <button onClick={() => onSuccess()} className="edit-button">
        Edit Name
      </button>
      <p>{error}</p>
    </>
  );
}

export default ConnectedUserProfile;
