import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalContextProvider from "./context/GlobalContextProvider.tsx";
import Pages from "./App.tsx";
import "./styles/global.css";





ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalContextProvider>
          <Routes>
            {Pages.map((item, idx) => (
              <Route key={idx} path={item.path} element={item.element} />
            ))}
          </Routes>
      </GlobalContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);


