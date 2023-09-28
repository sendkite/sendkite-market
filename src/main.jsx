import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./components/App.jsx";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './css/style.css'
import StorePicker from "./components/StorePicker.jsx";
import NotFound from "./components/NotFound.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <StorePicker />,
    errorElement: <NotFound />,
  },
  {
    path: "/store/:storeId",
    element: <App />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("main")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
