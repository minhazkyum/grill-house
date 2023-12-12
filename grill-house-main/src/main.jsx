import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Main/Main";
import Home from "./Pages/Home/Home";
import Menu from "./Compo/Menu/Menu";
import Special from "./Compo/Special/Special";
import About from "./Compo/About/About";
import Method from "./Compo/Method/Method";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      {
        path: "/special",
        element: <Special></Special>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/method",
        element: <Method></Method>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
