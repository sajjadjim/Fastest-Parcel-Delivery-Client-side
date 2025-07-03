import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router';
import { useLocation } from 'react-router';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth()

    const location = useLocation();
    // console.log("User Location Now", location.pathname)


    if (loading) {
        const [showSpinner, setShowSpinner] = React.useState(true);

        React.useEffect(() => {
            const timer = setTimeout(() => setShowSpinner(false), 1000);
            return () => clearTimeout(timer);
        }, []);

        if (showSpinner) {
            return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <span className="loading loading-spinner loading-xl"></span>
            </div>
            );
        }
        return null;
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