import React from 'react';
import { NavLink } from 'react-router';
import { Outlet } from 'react-router';
import FastestDelivarylogo from '../Shared/WebsiteLogo/FastestDelivarylogo';
import { Link } from 'react-router';
import { FaHome, FaBox, FaCreditCard, FaSearchLocation, FaUserEdit , FaUserShield} from 'react-icons/fa';
import { RiMotorbikeFill } from "react-icons/ri";
import useUserRole from '../Hooks/useUserRole';

const DashBoardLayout = () => {
const {role , roleLoading} = useUserRole();
console.log(role)

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* Navbar */}
                <div className="navbar bg-base-300 w-full lg:hidden">
                    <div className="flex-none ">
                        <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-6 w-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                ></path>
                            </svg>
                        </label>
                    </div>
                    <div className="mx-2 flex-1 px-2 lg:hidden">Dashboard</div>

                </div>
                {/* Page content here */}
                <Outlet></Outlet>
                {/* Page content here */}

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                    <FastestDelivarylogo></FastestDelivarylogo>


                    <li>
                        <Link to='/' className="flex items-center gap-2 hover:text-blue-600 transition-all">
                            <FaHome className="text-blue-500 group-hover:scale-110" /> Home
                        </Link>
                    </li>
                    <li>
                        <NavLink to="/dashboard/myParcels" className="flex items-center gap-2 hover:text-purple-600 transition-all">
                            <FaBox className="text-purple-500 group-hover:scale-110" /> My Parcels
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/payment-history" className="flex items-center gap-2 hover:text-green-600 transition-all">
                            <FaCreditCard className="text-green-500 group-hover:scale-110" /> Payment History
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/track-package" className="flex items-center gap-2 hover:text-pink-600 transition-all">
                            <FaSearchLocation className="text-pink-500 group-hover:scale-110" /> Track Package
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/update-profile" className="flex items-center gap-2 hover:text-yellow-600 transition-all">
                            <FaUserEdit className="text-yellow-500 group-hover:scale-110" /> Update Profile
                        </NavLink>
                    </li>

                    {
                        !roleLoading && role === 'admin' && 
                        <>
                        <li>
                        <NavLink to="/dashboard/active-riders" className="flex items-center gap-2 hover:text-cyan-600 transition-all">
                            <RiMotorbikeFill className="text-cyan-500 group-hover:scale-110" /> Active Riders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/pending-riders" className="flex items-center gap-2 hover:text-red-600 transition-all">
                            <RiMotorbikeFill className="text-red-500 group-hover:scale-110" /> Pending Riders
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/assignRider">
                            <RiMotorbikeFill className="inline-block mr-2 text-yellow-500" />
                            Assign Rider
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/dashboard/make-Admin">
                            <FaUserShield className="inline-block mr-2" />
                            Make Admin
                        </NavLink>
                    </li>
                        </>
                    }
                </ul>
            </div>
        </div>
    );
};

export default DashBoardLayout;