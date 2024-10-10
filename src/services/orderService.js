import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";
import { GET, POST, PUT } from "../constants/httpMethod";

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
export const getAllOrderAdmin = createAsyncThunk('order/getAllOrderAdmin', async () => {
    const res = await BASE_URL[GET]("/admin/order");

    return res.data;
});
export const updateOrderStatus = createAsyncThunk('order/changeStatusOrder', async ({ id, status }) => {
    const res = await BASE_URL[PUT](`/admin/order/status/${id}`, { status });

    return res.data;
});
export const getOrderDetailByOrderId = createAsyncThunk('order/orderDetail', async (id ) => {
    const res = await BASE_URL[GET](`/admin/order/orderById/${id}`);

    return res.data;
});