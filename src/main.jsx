import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import LoaderStairs from "./components/common/LoaderStairs.jsx";
import NavContext from "./context/NavContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LoaderStairs>
        <NavContext>
        <App />
        </NavContext>
      </LoaderStairs>
    </BrowserRouter>
  </StrictMode>
);
