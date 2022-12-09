import React from "react";
import ReactDOM from "react-dom/client";
import "./Style/output.css";
import App from "./App";
import { GameStateProvider } from "./Hooks/useGameState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GameStateProvider>
      <App />
    </GameStateProvider>
  </React.StrictMode>
);
