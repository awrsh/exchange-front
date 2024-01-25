import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContextProvider from "./context/GlobalContextProvider.tsx";
import Pages from "./App.tsx";
import "./styles/global.css";
import ThemeContextProvider from "./context/ThemeContextProvider.tsx";





ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
        <ThemeContextProvider>
          <Routes>
            {Pages.map((item, idx) => (
              <Route key={idx} path={item.path} element={item.element} />
            ))}
          </Routes>
        </ThemeContextProvider>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


