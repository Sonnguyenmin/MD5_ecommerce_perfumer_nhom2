import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, formAxios } from "../api";

export const findAllProduct = createAsyncThunk(
  "product/findAll",
  async ({ page, search }) => {
    const res = await BASE_URL.get(
      `admin/products?page=${page - 1}&search=${search}`
    );
    return res.data.content;
  }
);

export const findProductbyId = createAsyncThunk(
  "product/findById",
  async (id) => {
    const res = await BASE_URL.get(`admin/products/${id}`);
    return res.data.content;
  }
);

export const addProduct = createAsyncThunk("product/add", async (product) => {
  const res = formAxios.post("admin/products", product);
  return res;
});

export const editProduct = createAsyncThunk(
  "product/edit",
  async ({ id, product }) => {
    const res = formAxios.put(`admin/products/${id}`, product);
    console.log(res);
    return res;
  }
);

export const deleteProduct = createAsyncThunk("product/add", async (id) => {
  const res = BASE_URL.delete(`admin/products/${id}`);
  console.log(res);
  return res;
});
