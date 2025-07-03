import React from 'react';
import Navbar from '../Pages/Footer/Navbar.jsx/Navbar';
import Footer from '../Pages/Footer/Home/Footer/Footer';
import { Outlet } from 'react-router';


const RootLayout = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
                <Navbar />
            </div>
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
           <Footer></Footer>
        </div>
    );
};

export default RootLayout;