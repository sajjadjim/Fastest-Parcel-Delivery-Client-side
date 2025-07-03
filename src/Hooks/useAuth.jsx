import React from 'react';
import { AuthContext } from '../Context/AuthContext';
import { use } from 'react';
import AuthProvider from '../Context/AuthProvider';

const useAuth = () => {

    const authInfo = use(AuthContext);
    // const { authInfo } = useContext(AuthContext);
    // console.log(authInfo)
    // const authInfo = useContext(AuthContext)
    return authInfo;
};

export default useAuth;

