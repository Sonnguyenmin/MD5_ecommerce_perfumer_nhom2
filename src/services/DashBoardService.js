import { createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../api";
import { GET } from "../constants/httpMethod";

export const getAllDashBoard = createAsyncThunk('dashBoard', async () => {
    const res = await BASE_URL[GET]("/admin/dashBoard");
    console.log("dashBoard: ", res.data);
    return res.data;
});