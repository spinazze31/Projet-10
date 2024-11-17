import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./Header/header.jsx";
import Url from "./Url/url.jsx";
import Footer from "./footer/footer.jsx";
import "../ArgentBank-Frontend/css/main.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Header />
      <Url />
    </Router>
    <Footer />
  </StrictMode>
);
