import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './css/style.css'
import WebRouter from "./components/WebRouter.jsx";

ReactDOM.createRoot(document.getElementById("main")).render(
  <React.StrictMode>
    <RouterProvider router={WebRouter} />
  </React.StrictMode>
);
