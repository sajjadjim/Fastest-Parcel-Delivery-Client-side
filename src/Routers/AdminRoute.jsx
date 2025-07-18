import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import useUserRole from '../Hooks/useUserRole';
import { useLocation } from 'react-router';
import { Navigate } from 'react-router';

const AdminRoute = ({children}) => {
    const { user, loading } = use(AuthContext);
    const {role , roleLoading} = useUserRole()

    const location = useLocation();
    // console.log("User Location Now", location.pathname)
    // console.log("User Role Now", role)


    if (loading) {
        const [showSpinner, setShowSpinner] = React.useState(true);

        React.useEffect(() => {
            const timer = setTimeout(() => setShowSpinner(false), 1000);
            return () => clearTimeout(timer);
        }, []);

        if (showSpinner || roleLoading) {
            return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <span className="loading loading-spinner loading-xl"></span>
            </div>
            );
        }
        return null;
    }

    if (loading || roleLoading) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    if (!user || role !== 'admin') {
        return <Navigate state={{ from: location.pathname }} to='/forbidden' replace />;
    }
        return children;
    }
;

export default AdminRoute;