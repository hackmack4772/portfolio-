import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import ActivityTracker from "./components/ActivityTracker";
import { DarkModeProvider } from "./DarkModeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ActivityTracker />
    <DarkModeProvider>
      <App />{" "}
    </DarkModeProvider>
  </StrictMode>
);
