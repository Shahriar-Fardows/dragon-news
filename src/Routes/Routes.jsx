import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Error/Error";
import Home from "../Layout/Pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/> ,
        errorElement: < Error/>,
        children: [
            {
              path: "/",
              element: <Home/>,
            },
          ],
      },
])

export default router;