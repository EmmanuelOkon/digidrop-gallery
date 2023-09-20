import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import "@fontsource/poppins";
import "@fontsource/raleway";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
