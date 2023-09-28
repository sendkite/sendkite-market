import {createBrowserRouter} from "react-router-dom";
import StorePicker from "./StorePicker.jsx";
import NotFound from "./NotFound.jsx";
import App from "./App.jsx";

const WebRouter = createBrowserRouter([
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

export default WebRouter;