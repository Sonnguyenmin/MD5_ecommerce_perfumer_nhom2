import { createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from '../api/axiosInstance';
import { POST } from '../constants/httpMethod';
import { Cookies } from 'react-cookie';

/**
 * Hàm thực hiện đăng ký tài khoản người dùng
 * @param {*} user - Đối tượng chứa thông tin người dùng cần đăng ký
 * @returns  - Trả về một Promise chứa phản hồi từ server
 */
export const register = async (user) => {
  const response = await BASE_URL[POST]('auth/sign-up', user);
  return response;
};

/**
 * Hàm thực hiện đăng nhập tài khoản người dùng
 * xử lý bất đồng bộ
 * @param {*} user - Đối tượng chứa thông tin người dùng cần đăng nhập
 * @returns  - Trả về một Promise chứa phản hồi từ server
 */
export const login = createAsyncThunk('auth/login', async (user, { rejectWithValue }) => {
  try {
    const response = await BASE_URL[POST]('auth/sign-in', user);
    const cookies = new Cookies();

    cookies.set('accessToken', response.data, { maxAge: 86400000 });
    return response.data;
  } catch (error) {
    return rejectWithValue(error?.response?.data?.data);
  }
});

/**
 * Hàm lấy dữ liệu từ Cookie và lưu vào redux
 */
export const loadUserFormCookie = createAsyncThunk('auth/loadUserFormCookie', async (token) => {
  return token;
});
