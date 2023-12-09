import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import Layout from "./Layout/Layout";
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
      <RouterProvider router={router}>
        <Layout />
      </RouterProvider>
    </React.StrictMode>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

reportWebVitals();
