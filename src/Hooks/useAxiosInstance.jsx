import axios from "axios";

const useAxiosInstance = () => {
const axiosInstance = axios.create({
  baseURL: 'http://localhost:3000',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
});
    return axiosInstance
};

export default useAxiosInstance;