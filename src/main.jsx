import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
// import ActivityTracker from "./components/ActivityTracker";
import { DarkModeProvider } from "./Context/DarkModeContext";
import { LoadingProvider } from "./Context/LoadingContext";
import Particle from "./components/Particle";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <ActivityTracker /> */}
    <DarkModeProvider>
       <LoadingProvider> 
       <Particle />
        <App />{" "}
        </LoadingProvider>
      
    </DarkModeProvider>
    
  </StrictMode>
);
