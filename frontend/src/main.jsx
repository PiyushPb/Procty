import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
// Material Tailwind ui
import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    {/* Material Tailwind ui */}
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </>
);
