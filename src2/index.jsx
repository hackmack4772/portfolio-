import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ActivityTracker from "./components/ActivityTracker";

ReactDOM.render(
  <React.StrictMode>
    <ActivityTracker />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
