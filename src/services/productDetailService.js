import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";
import { GET } from "../constants/httpMethod";

export const findProductDetailById = createAsyncThunk("productDetail", async ({ id }) => {
    const res = await BASE_URL[GET](`listProductDetail/${id}`);
    console.log("product detail service: ", res);
    return res.data;
})