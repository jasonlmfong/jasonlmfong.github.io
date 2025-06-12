import React from "react";
import { createRoot } from "react-dom/client";
import "./css/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App.tsx";

const container = document.getElementById("root");
// Use non-null assertion if you are sure container exists
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
