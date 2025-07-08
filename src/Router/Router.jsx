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
import AssignRider from "../Pages/Dashboard/Asign Router/AssignRider";
import RiderRoute from "../Routers/RiderRoute";
import PendingDelivary from "../Pages/Dashboard/Rider Elements/Pending Delivary/PendingDelivary";
import CompletedDelivery from "../Pages/Dashboard/Rider Elements/CompletedDelivary/CompletedDelivery";
import MyEarning from "../Pages/Dashboard/Rider Elements/My Earning/MyEarning";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";




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
        index: true,
        Component: DashboardHome
      },
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
        path:'active-riders',
        element:  <AdminRoute><Active_riders></Active_riders></AdminRoute>
      },
      {
        path:'pending-riders',
        element: <AdminRoute> <Pending_Riders></Pending_Riders></AdminRoute>
      },
      {
        path:'track-package',
        Component: Track_pacakage
      },
      {
        path:'make-admin',
        element: <AdminRoute><MakeAdmin></MakeAdmin></AdminRoute>
      },
      {
        path:'assignRider',
        element: <AdminRoute><AssignRider></AssignRider></AdminRoute>
      },
      {
        path:'pending-deliveries',
        element: <RiderRoute><PendingDelivary></PendingDelivary></RiderRoute>
      },
      {
        path:'completed-deliveries',
        element: <RiderRoute><CompletedDelivery></CompletedDelivery></RiderRoute>
      },
      {
        path:'my-earnings',
        element:<RiderRoute><MyEarning></MyEarning></RiderRoute>
      }
    ]
  }
]);
export default router;