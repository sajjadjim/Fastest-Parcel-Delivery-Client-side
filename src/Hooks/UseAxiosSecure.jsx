import axios, { AxiosError } from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router';

const axiosSecure = axios.create({
  baseURL: 'https://pick-on-server.vercel.app',
  //   timeout: 1000,
  //   headers: {'X-Custom-Header': 'foobar'}
});

const UseAxiosSecure = () => {
  const { user, logOut } = use(AuthContext)

  const navigate = useNavigate()
  // axios interception here use dynamic to all secure collection taken accessToken from the user
  axiosSecure.interceptors.request.use(config => {
    config.headers.authorization = `Bearer ${user?.accessToken}`;
    return config;
  }, error => {
    return Promise.reject(error);
  })

  // axios interception for response here user status check if user status 401 he login but forbidden access to the page
  // if user status 403 he is not login but he try to access the page so we redirect him to the forbidden page
  // if user status 401 he is not login so we log out him and redirect to
  axiosSecure.interceptors.response.use(response => {
    return response;
  }, error => {
    const status = error.status;
    if (status === 403) {
      navigate('/forbidden');
    }
    else if (status === 401) {
      logOut()
        .then(() => {
          navigate('/login')
        })
        .catch(() => { })
    }
    return Promise.reject(error);
  });

  return axiosSecure
};

export default UseAxiosSecure;