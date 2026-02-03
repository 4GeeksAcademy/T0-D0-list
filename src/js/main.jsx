import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home.jsx";
import "../styles/index.css";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);