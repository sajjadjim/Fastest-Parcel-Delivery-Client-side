import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import RootLayout from "../Layout/RootLayout";
import Home from "../Pages/Footer/Home/Home";
import AllFaQ from "../Pages/Footer/Home/FaQ/ALlFaQ";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component:Home

        },
        {
          path:'/FaQ',
          Component:AllFaQ
        },
    ]
  },
]);
export default router;