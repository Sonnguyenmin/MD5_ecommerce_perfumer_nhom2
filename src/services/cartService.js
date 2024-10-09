import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";
import { GET } from "../constants/httpMethod";

export const findAllCart = createAsyncThunk('CartList', async () => {
    const res = await BASE_URL[GET]("user/cart/list");
    console.log("car list day: ", res.data.content);
    return res.data.content;
});