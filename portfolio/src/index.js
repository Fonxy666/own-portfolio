import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import { Nav } from "./Styles/HomePage.Styled";
import Layout from "./Layout";

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
      <div style={{background: "#f5f4e9", position: "relative", top: "90px"}}>
        <RouterProvider router={router}/>
      </div>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
