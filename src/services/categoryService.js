import { createAsyncThunk } from '@reduxjs/toolkit';
import { BASE_URL } from '../api';
import { DELETE, GET, POST, PUT } from '../constants/httpMethod';

export const listCategory = createAsyncThunk('category/listCategory', async () => {
  const res = await BASE_URL[GET]('/listCategories');
  return res.data.content;
});

export const findAllCategory = createAsyncThunk('category/findAll', async ({ page, search }) => {
  const res = await BASE_URL[GET](`admin/categories?page=${page - 1}&search=${search}`);
  return res.data.content;
});

export const findAllCategoryNoPagination = createAsyncThunk('category/findAllNoPagi', async () => {
  const res = await BASE_URL[GET](`admin/categories?noPagination=true`);
  return res.data.content;
});

export const addCategory = createAsyncThunk('category/add', async (category) => {
  const res = await BASE_URL[POST]('admin/categories', category);
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
