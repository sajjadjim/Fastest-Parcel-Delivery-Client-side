import React from 'react';
import { Outlet } from 'react-router';
import AUthPicture from '../../public/authImage.png'
import FastestDelivarylogo from '../Shared/WebsiteLogo/FastestDelivarylogo';

const AuthLayout = () => {
    return (
        <div className="flex items-center justify-center min-h-screen px-2">
            <div className="flex flex-col md:flex-row w-full md:w-8/12 gap-6 md:gap-10 justify-center rounded-lg">
                <div className="w-full md:w-1/2 flex flex-col items-center">
                    <div className="my-6 md:my-10">
                        <FastestDelivarylogo />
                    </div>
                    <Outlet />
                </div>
                <div className="w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
                    <img
                        src={AUthPicture}
                        className="w-full max-w-xs md:max-w-sm rounded-lg"
                        alt="Auth"
                    />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;