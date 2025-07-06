import axios from 'axios';
import React, { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
  //   timeout: 1000,
  //   headers: {'X-Custom-Header': 'foobar'}
});

const UseAxiosSecure = () => {
  const { user } = use(AuthContext)

  // axios interception here use dynamic to all secure collection taken accessToken from the user
  axiosSecure.interceptors.request.use(config => {
  config.headers.authorization = `Bearer ${user?.accessToken}`;
  return config;
  }, error => {
    return Promise.reject(error);
  })

  return axiosSecure
};

export default UseAxiosSecure;