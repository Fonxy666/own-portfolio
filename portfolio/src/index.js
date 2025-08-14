import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Nav } from "./Styles/HomePage.Styled";
import Layout from "./Layout";
import { RouterDiv } from "./Styles/Indexjs.Styled";

import HomePage from "./Components/HomePage";

const App = () => {
  return (
    <React.StrictMode>
      <Nav className="fixed-top">
        <Layout />
      </Nav>
      <RouterDiv>
        <HashRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </HashRouter>
      </RouterDiv>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
