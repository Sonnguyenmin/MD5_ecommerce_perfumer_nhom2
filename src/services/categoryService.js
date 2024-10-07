import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../api';
import { DELETE, GET, POST, PUT } from '../constants/httpMethod';

export const findAllCategory = createAsyncThunk('category/findAll', async ({ page, search }) => {
  const res = await BASE_URL.get(`admin/categories?page=${page - 1}&search=${search}`);
  return res.data.content;
});

export const findAllCategoryNoPagination = createAsyncThunk('category/findAllNoPagi', async () => {
  const res = await BASE_URL.get(`admin/categories?noPagination=true`);
  return res.data.content;
});

export const addCategory = createAsyncThunk('category/add', async (category) => {
  const res = await BASE_URL.post('admin/categories', category);
  return res;
});

export const editCategory = createAsyncThunk('category/edit', async ({ id, category }) => {
  const res = await BASE_URL[PUT](`admin/categories/${id}`, category);
  return res;
});

export const deleteCategory = createAsyncThunk('category/delete', async (id) => {
  const res = await BASE_URL[DELETE](`admin/categories/${id}`);
  return res;
});
