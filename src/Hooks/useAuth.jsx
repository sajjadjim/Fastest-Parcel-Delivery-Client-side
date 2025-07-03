import React from 'react';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
// import { auth } from '../Firebase/Firebase.init';

const useAuth = () => {
    const authInfo = use(AuthContext)
    return authInfo;
};

export default useAuth;