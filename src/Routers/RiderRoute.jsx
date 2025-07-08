import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import useUserRole from '../Hooks/useUserRole';

const RiderRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    const { role, roleLoading } = useUserRole()

    if (loading || roleLoading) {
        return <span className="loading loading-spinner loading-xl"></span>
    }

    if (!user || role !== 'rider') {
        return <Navigate state={{ from: location.pathname }} to="/forbidden"></Navigate>
    }

    return children;
};

export default RiderRoute;