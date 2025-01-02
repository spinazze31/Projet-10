import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Logo from "../../ArgentBank-Frontend/img/argentBankLogo.png";
import { logout } from "../Reducer/reducer";

function Header() {
  const { token } = useSelector((state) => state.user);
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
            <i className="fa fa-user-circle"></i>
            {token !== null ? (
              <p onClick={() => dispatch(logout())}>Sign out</p>
            ) : (
              <p>Sign in</p>
            )}
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
