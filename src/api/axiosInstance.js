import axios from 'axios';
import { Cookies } from 'react-cookie';

const BASE_URL = axios.create({
  baseURL: 'http://localhost:8080/api.example.com/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleAddInterceptors = (instance) => {
  // request
  instance.interceptors.request.use(
    (config) => {
      const cookies = new Cookies();
      const accessToken = cookies.get('accessToken');
      const type = cookies.get('type');
      if (accessToken && type) {
        config.headers.Authorization = `${type} ${accessToken}`;
      }
      return config;
    },
    (err) => Promise.reject(err),
  );
  // response
};

export default BASE_URL;
