import React from 'react';
import Loading from '../../../components/Loading';
import UserDashboard from './UserDashboard';
import RiderDashboard from './RiderDashboard';
import AdminDashboard from './AdminDashboard';
import useUserRole from '../../../Hooks/useUserRole';
import Forbidden from '../../Forbidden Access/Forbidden';

const DashboardHome = () => {
    const { role, roleLoading } = useUserRole()

    if (roleLoading) {
        return <Loading></Loading>
    }

    if(role === 'user'){
        return <UserDashboard></UserDashboard>
    }
    else if(role === 'rider'){
        return <RiderDashboard></RiderDashboard>
    }
    else if(role ==='admin'){
        return <AdminDashboard></AdminDashboard>
    }
    else {
        return <Forbidden></Forbidden>
    }

};

export default DashboardHome;