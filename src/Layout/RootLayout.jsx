import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Pages/Navbar.jsx/Navbar'
import Footer from '../Pages/Footer/Footer'

const RootLayout = () => {
    return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'sticky', top: 0, zIndex: 1000 }}>
              <Navbar></Navbar>
            </div>
            <div style={{ flex: 1 }}>
                <Outlet />
            </div>
           <Footer></Footer>
        </div>
    );
};

export default RootLayout;