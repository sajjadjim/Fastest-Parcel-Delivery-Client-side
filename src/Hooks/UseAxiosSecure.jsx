import axios from 'axios';
import React from 'react';

const UseAxiosSecure = () => {

const axiosSecure = axios.create({
  baseURL: 'http://localhost:3000',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
});

    return axiosSecure
};

export default UseAxiosSecure;