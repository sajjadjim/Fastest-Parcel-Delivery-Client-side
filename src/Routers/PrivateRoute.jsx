import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()

    const location = useLocation();
    // console.log("User Location Now", location.pathname)


    if (loading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if (user && user?.email) {
        return children
    }

    else {
        return <Navigate state={location.pathname} to='/login'>
        </Navigate>
    }


};

export default PrivateRoute;