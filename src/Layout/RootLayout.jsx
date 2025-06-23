import React from 'react';
import Navbar from '../Pages/Footer/Navbar.jsx/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Pages/Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;