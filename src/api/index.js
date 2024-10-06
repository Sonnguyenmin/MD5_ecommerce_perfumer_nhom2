import axios from 'axios';
import { Cookies } from 'react-cookie';

export const BASE_URL = axios.create({
  baseURL: 'http://localhost:8080/api.example.com/v1/',
  headers: {
    'Content-Type': 'application/json',
  },
});

export const formAxios = axios.create({
  baseURL: 'http://localhost:8080/api.example.com/v1/',
  headers: {
    'Content-Type': 'multipart/form-data',
  },
});

const handleAddInterceptors = (instance) => {
  // request
  instance.interceptors.request.use(
    (config) => {
      const cookies = new Cookies();
      const accessToken = cookies.get('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken.data.accessToken}`;
      }
      return config;
    },
    (err) => Promise.reject(err),
  );
  // response
};

handleAddInterceptors(BASE_URL);
handleAddInterceptors(formAxios);
