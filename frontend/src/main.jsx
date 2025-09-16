import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/authProvider"; // Certifique-se que o caminho está correto

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        {" "}
        {/* O AuthProvider deve abraçar o App */}
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
