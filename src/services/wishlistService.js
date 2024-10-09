import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../api';
import { DELETE, GET, POST, PUT } from '../constants/httpMethod';

export const addWishList = createAsyncThunk('product/addWishList', async (id) => {
  const res = await BASE_URL[POST](`user/wishList`, { productId: id });

  return res.data.content;
});

export const getAllWishlist = createAsyncThunk('/product/getAllWishlist', async () => {
  const res = await BASE_URL[GET]('user/wishList');
  return res.data;
});
