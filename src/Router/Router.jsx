import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from '../Pages/Home/Home'
import RootLayout from "../Layout/RootLayout";
import AllFaQ from "../Pages/Home/FaQ/ALlFaQ";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Authentication/Login/Login";
import Register from "../Pages/Authentication/Register/Register";
import Coverage from "../Pages/Coverage Area/Coverage";
import PrivateRoute from "../Routers/PrivateRoute";
import AddParcel from "../Pages/Add Parcel/AddParcel";
import DashBoardLayout from "../Layout/DashBoardLayout";
import MyParcels from "../Pages/Dashboard/MyParcels/MyParcels";



const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home

      },
      {
        path: '/FaQ',
        Component: AllFaQ
      },
      {
        path: '/coverage',
        element: <PrivateRoute><Coverage></Coverage></PrivateRoute>,
        loader: () => fetch('../../public/DataAll/areaMap.json')
      },
      // add parcel components 
      {
        path: '/addparcel',
        element: <PrivateRoute><AddParcel></AddParcel></PrivateRoute>,
        loader: () => fetch('../../public/DataAll/areaMap.json')
      }
    ]
  },

  // Authentication Layouts Components 
  {
    path: '/',
    Component: AuthLayout,
    children: [
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/register',
        Component: Register
      }
    ]
  },
  // Authentication Layouts Components 
  {
    path: '/dashboard',
    element: <PrivateRoute><DashBoardLayout></DashBoardLayout></PrivateRoute>,
    children: [
      {
        path: 'myParcels',
        Component: MyParcels
      }
    ]
  }
]);
export default router;