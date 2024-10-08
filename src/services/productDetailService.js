import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL, formAxios } from "../api";

export const findAllProDetail = createAsyncThunk(
  "productDetail/findAll",
  async ({ page, id }) => {
    const res = await BASE_URL.get(
      `admin/productDetails/products/${id}?page=${page - 1}`
    );
    return res.data.content;
  }
);

export const addProductDetail = createAsyncThunk(
  "product/add",
  async (productDetail) => {
    const res = await formAxios.post("admin/productDetails  ", productDetail);
    console.log(res);
    return res;
  }
);
