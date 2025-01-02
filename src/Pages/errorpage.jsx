import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <div className="error_container">
        <p className="error_title">404</p>
        <p className="error_txt">La page que vous recherchez n'existe pas.</p>
        <Link to="/" className="error_link">
          Retouner vers la page d'accueil
        </Link>
      </div>
    </>
  );
}
export default ErrorPage;
