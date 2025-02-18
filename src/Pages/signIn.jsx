import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userConnection } from "../Reducer/login-reducer";
import { userProfile } from "../Reducer/profile-reducer";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { token, error } = useSelector((state) => state.user);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = { email, password };

    dispatch(userConnection(credentials));
  };

  useEffect(() => {
    if (token != null) {
      navigate("/user");
      const fetchProfile = async () => {
        dispatch(userProfile(token));
      };
      fetchProfile();
    }
  }, [token]);

  return (
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <label htmlFor="username">Email</label>
              <input
                type="text"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <button className="sign-in-button">Sign In</button>
            <p className="error_connection">{error}</p>
          </form>
        </section>
      </main>
    </>
  );
}

export default SignIn;
