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
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/Payment-History/PaymentHistory";
import BeARider from "../Pages/Be A Raider/BeARider";
import RiderForm from "../Pages/Be A Raider/Rider_Form/RiderForm";
import Active_riders from "../Pages/Dashboard/Active Riders/Active_riders";
import Pending_Riders from "../Pages/Dashboard/Pending Riders/Pending_Riders";
import Track_pacakage from "../Pages/Dashboard/Track Pacakage/Track_pacakage";
import MakeAdmin from "../Pages/Dashboard/MakeAdmin/MakeAdmin";
import AdminRoute from "../Routers/AdminRoute";
import Forbidden from "../Pages/Forbidden Access/Forbidden";



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
      },
      {
        path: '/beARider',
        Component: BeARider
      },
      {
        path:'/riderForm',
        element: <PrivateRoute><RiderForm></RiderForm></PrivateRoute>,
        loader: () => fetch('../../public/DataAll/areaMap.json')
      },
      {
        path:'/forbidden',
        Component: Forbidden
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
      },
      {
        path: 'payment/:parcelId',
        Component: Payment
      },
      {
        path: 'payment-history',
        Component: PaymentHistory
      },
      {
        path:'/dashboard/active-riders',
        Component: Active_riders
      },
      {
        path:'/dashboard/pending-riders',
        Component: Pending_Riders
      },
      {
        path:'/dashboard/track-package',
        Component: Track_pacakage
      },
      {
        path:'make-admin',
        element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
      }
    ]
  }
]);
export default router;