import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "./Header/header.jsx";
import Url from "./Url/url.jsx";
import Footer from "./footer/footer.jsx";
import "../ArgentBank-Frontend/css/main.css";
import { store } from "./store/store.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Header />
        <Url />
      </Router>
      <Footer />
    </Provider>
  </StrictMode>
);
