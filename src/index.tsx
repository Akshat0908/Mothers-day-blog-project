import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Mainpage } from "./screens/Mainpage/Mainpage";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Mainpage />
  </StrictMode>,
);
