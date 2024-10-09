import { createSlice } from "@reduxjs/toolkit";
import { FAILED, IDLE } from "../constants/status";
import { orderNow } from "../../services/orderService";
const orderSlice = createSlice({
  name: 'order',
  initialState: {
    loadingOrder: IDLE,
    dataOrder: null,
    errorOrder: null,
    totalPagesOrder: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(orderNow.fulfilled, (state, action) => {
      state.dataOrder = action.payload;
    });
    builder.addCase(orderNow.rejected, (state, action) => {
      state.loadingOrder = FAILED;
      state.errorOrder = action.error.message;
    });
  },
});

export default orderSlice.reducer;