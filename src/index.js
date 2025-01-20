import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ActivityTracker from "./components/ActivityTracker"; // Adjust the path as needed

ReactDOM.render(
  <React.StrictMode>
    {/* <ActivityTracker /> */}
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
