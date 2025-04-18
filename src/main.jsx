import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styleGlobal.css";
import { UserProvider } from "./context/Context.jsx";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </StrictMode>
);
