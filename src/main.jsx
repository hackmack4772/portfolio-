import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import ActivityTracker from "./components/ActivityTracker";
import { DarkModeProvider } from './Context/DarkModeContext';
import { LoadingProvider } from './Context/LoadingContext';
import Particle from "./components/Particle";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/*     <ActivityTracker /> */}
    <LoadingProvider>
      <DarkModeProvider>
        <App />
      </DarkModeProvider>
    </LoadingProvider>
  </React.StrictMode>
);
