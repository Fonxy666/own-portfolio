import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Nav } from "./Styles/HomePage.Styled";
import Layout from "./Layout";
import { RouterDiv } from "./Styles/Indexjs.Styled";

import HomePage from "./Components/HomePage";

const App = () => {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
  ]);

  return (
    <React.StrictMode>
      <Nav className="fixed-top">
        <Layout/>
      </Nav>
      <RouterDiv>
        <RouterProvider router={router}/>
      </RouterDiv>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
