import axios from 'axios';

export const BASE_URL = 'http://127.0.0.1:5000';

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
