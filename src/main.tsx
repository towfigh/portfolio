import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/App.scss";
import App from "./app/App.tsx";
import { ParallaxProvider } from "react-scroll-parallax";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParallaxProvider>
      <App />
    </ParallaxProvider>
  </StrictMode>
);
