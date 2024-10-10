import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../api';

/**
 * Tạo hàm lấy danh sách order
 * Gọi API để lấy danh sách order
 * Trả về dữ liệu order
 */

export const listOrderByUser = createAsyncThunk('orderUser/ListOrder', async ({ page, search }) => {
  const res = await BASE_URL.get(`user/order/history?page=${page - 1}&search=${search}`);
  return res.data.content;
});
