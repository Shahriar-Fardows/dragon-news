import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Error from "../Error/Error";
import Home from "../Layout/Pages/Home/Home";
import Login from "../Layout/Pages/Home/Header/Login/Login";

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
            {
              path: "/login",
              element: <Login/>,
            },
            
          ],
      },
])

export default router;