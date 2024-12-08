import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeState } from "./contextApi/themeContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* wrapping App with theme-wrapper, so that it accessible in hirerachy */}
    <ThemeState>
      <App />
    </ThemeState>
  </StrictMode>
);
