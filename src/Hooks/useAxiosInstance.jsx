import axios from "axios";

const useAxiosInstance = () => {
const axiosInstance = axios.create({
  baseURL: 'https://pick-on-server.vercel.app',
//   timeout: 1000,
//   headers: {'X-Custom-Header': 'foobar'}
});
    return axiosInstance
};

export default useAxiosInstance;