import { createAsyncThunk } from '@reduxjs/toolkit';

import { BASE_URL, formAxios } from '../api';
import { GET } from '../constants/httpMethod';

export const findProductDetailById = createAsyncThunk('productDetailByIdProduct', async ({ id }) => {
  const res = await BASE_URL.get(`/listProductDetail/${id}`);
  return res.data;
});

export const findOneProductDetailById = async ({ id }) => {
  const res = await BASE_URL.get(`/listProductDetail/${id}`);
  return res.data;
};

export const findAllProDetail = createAsyncThunk('productDetail/findAll', async ({ page, id }) => {
  const res = await BASE_URL.get(`admin/productDetails/products/${id}?page=${page - 1}`);
  return res.data.content;
});

export const addProductDetail = createAsyncThunk('product/add', async (productDetail) => {
  const res = await formAxios.post('admin/productDetails  ', productDetail);
  return res;
});

export const filerProductByCategory = createAsyncThunk(
  'product/filerProductByCategory',
  async (id, { rejectWithValue }) => {
    try {
      const res = await BASE_URL[GET](`/category/${id}`);

      return res.data.content;
    } catch (error) {
      console.log(error);

      if (error.response.data.statusCode === 404) {
        return [];
      }
    }
  },
);
