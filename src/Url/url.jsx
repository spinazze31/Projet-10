import { Routes, Route } from "react-router-dom";
import Home from "../Pages/home";
import SignIn from "../Pages/signIn";
import User from "../Pages/user";
import ErrorPage from "../Pages/errorpage";

function Url() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/user" element={<User />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default Url;
