import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { MoveProvider } from "./assets/Context/MoveContext.jsx";
import { PiecesProvider } from "./assets/Components/Context/PiecesContext.jsx";
import { DiceProvider } from "./assets/Context/DiceContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoveProvider>
      <PiecesProvider>
        <DiceProvider>
          <App />
        </DiceProvider>
      </PiecesProvider>
    </MoveProvider>
  </React.StrictMode>
);
