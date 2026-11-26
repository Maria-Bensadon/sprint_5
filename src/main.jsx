import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.jsx";
import { CursosProvider } from "./context/CursosContext";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <CursosProvider>
          <App />
        </CursosProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
);
