import { createAsyncThunk } from '@reduxjs/toolkit';
import BASE_URL from '../api/axiosInstance';
import { POST } from '../constants/httpMethod';

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
export const login = createAsyncThunk('auth/sign-in', async (user) => {
  const response = await BASE_URL[POST]('auth/sign-in', user);
  return response.data;
});

export const verifyToken = async (token) => {
  const response = await BASE_URL[GET]();
};
