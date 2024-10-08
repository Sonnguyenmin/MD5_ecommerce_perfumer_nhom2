import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../api';
import { DELETE, GET, POST, PUT } from '../constants/httpMethod';

export const categoryByProductId = createAsyncThunk('shops/categoryId/procduct', async (id) => {
  const res = await BASE_URL[GET](`/category/${id}`);
  return res;
});
