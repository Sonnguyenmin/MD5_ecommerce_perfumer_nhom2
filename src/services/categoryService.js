import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";

export const findAll = createAsyncThunk(
  "category/findAll",
  async ({ page, search }) => {
    const res = await BASE_URL.get(
      `admin/categories?page=${page - 1}&search=${search}`
    );
    console.log(res.data);
    return res.data.content;
  }
);

export const addCategory = createAsyncThunk(
  "category/add",
  async (category) => {
    const res = await BASE_URL.post("admin/categories", category);
    console.log(res);
    return res;
  }
);

export const editCategory = createAsyncThunk(
  "category/edit",
  async ({ id, category }) => {
    const res = await BASE_URL.put(`admin/categories/${id}`, category);
    console.log(res);
    return res;
  }
);

export const deleteCategory = createAsyncThunk(
  "category/delete",
  async (id) => {
    const res = await BASE_URL.delete(`admin/categories/${id}`);
    console.log(res);
    return res;
  }
);
