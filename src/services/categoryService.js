import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";

export const findAll = createAsyncThunk(
  "category/findAll",
  async ({ page, search }) => {
    const res = await BASE_URL.get(
      `admin/categories?page=${page - 1}&searchName=${search}`
    );
    console.log(res.data);
    return res.data;
  }
);
