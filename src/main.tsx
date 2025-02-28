import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { useRoutes } from "react-router-dom";
import routes from "tempo-routes";

import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

// Define process for Next.js compatibility
window.process = { env: { NODE_ENV: "development" } };

const basename = import.meta.env.BASE_URL;

const TempoRoutes = () => {
  if (import.meta.env.VITE_TEMPO === "true") {
    return useRoutes(routes);
  }
  return null;
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
      <TempoRoutes />
    </BrowserRouter>
  </React.StrictMode>,
);
