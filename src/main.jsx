import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ContextComponent } from "./context/ContextComponent.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextComponent>
      <App />
    </ContextComponent>
  </React.StrictMode>
);
