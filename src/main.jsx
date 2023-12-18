import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.scss";
import "./styles/tailwind.css";
import { BarberProvider } from "./context/BarberContext";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="">
    <ThemeProvider>
      <BarberProvider>
        <App />
      </BarberProvider>
    </ThemeProvider>
  </BrowserRouter>
);
