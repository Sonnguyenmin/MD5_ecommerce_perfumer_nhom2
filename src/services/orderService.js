import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";
import { GET, POST } from "../constants/httpMethod";

export const orderNow = createAsyncThunk('OrderCheckout', async (OrderRequest, { rejectWithValue }) => {
    try {
        const res = await BASE_URL[POST]("user/cart/checkout", OrderRequest);
        console.log("orderService: ", res);
        return res;
    }
    catch (err) {
        return rejectWithValue(err);
    }
});