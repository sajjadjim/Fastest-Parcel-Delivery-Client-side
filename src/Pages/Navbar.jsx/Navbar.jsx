import React, { use } from 'react';
import { NavLink } from 'react-router';
import FastestDelivarylogo from '../../Shared/WebsiteLogo/FastestDelivarylogo';
import { Link } from 'react-router';
// import {useAuth} from '../../../Hooks/useAuth'
import { AuthContext } from '../../Context/AuthContext';

const Navbar = () => {

  const { user, logOut } = use(AuthContext);

  // console.log(authInfo)
  // logout the user from website 
  const handleLogOut = () => {
    logOut()
  }

  const navItems = <>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/addparcel'>Add Parcel</NavLink></li>
    {
      user &&
      <>
        <li><NavLink to='/dashboard'>Dashboard</NavLink></li>
      </>
    }
    <li><NavLink to='/beARider'>Be Rider</NavLink></li>
    <li><NavLink to='/coverage'>Coverage</NavLink></li>


  </>
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            {navItems}
          </ul>
        </div>
        <div className=" text-xl"><FastestDelivarylogo></FastestDelivarylogo></div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end">
        {
          user ? <Link onClick={handleLogOut} className='btn-primary btn text-black'>Logout</Link> :
            <Link to='/login' className='btn-primary btn text-black'>Login</Link>
        }
      </div>
    </div>
  );
};

export default Navbar;