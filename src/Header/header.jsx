import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../ArgentBank-Frontend/img/argentBankLogo.png";
import { logout } from "../Reducer/login-reducer";

function Header() {
  const { token } = useSelector((state) => state.user);
  const { userName } = useSelector((state) => state.profile);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="main-nav">
        <Link to="/" className="main-nav-logo">
          <img
            className="main-nav-logo-image"
            src={Logo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
          <Link to="/sign-in" className="main-nav-item">
            {token !== null ? (
              <>
                <span className="main-nav_username">{userName}</span>
                <i className="fa fa-user-circle"></i>
                <p
                  className="main-nav_logout"
                  onClick={() => dispatch(logout())}
                >
                  Sign out
                </p>
              </>
            ) : (
              <>
                <i className="fa fa-user-circle"></i>
                <p>Sign in</p>
              </>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
