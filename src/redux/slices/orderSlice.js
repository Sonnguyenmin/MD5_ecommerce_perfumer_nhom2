import { createSlice } from "@reduxjs/toolkit";
import { FAILED, IDLE } from "../constants/status";
import { getAllOrderAdmin, getOrderDetailByOrderId, orderNow, updateOrderStatus } from "../../services/orderService";
const orderSlice = createSlice({
  name: 'order',
  initialState: {
    loadingOrder: IDLE,
    dataOrder: null,
    dataOrderDetail: null,
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
    builder.addCase(getAllOrderAdmin.fulfilled, (state, action) => {
      state.dataOrder = action.payload;
    });
    builder.addCase(getAllOrderAdmin.rejected, (state, action) => {
      state.loadingOrder = FAILED;
      state.errorOrder = action.error.message;
    })
    builder.addCase(updateOrderStatus.fulfilled, (state, action) => {
      state.loadingOrder = action.payload;
    })
    builder.addCase(updateOrderStatus.rejected, (state, action) => {
      state.loadingOrder = FAILED;
      state.errorOrder = action.error.message;
    })
    builder.addCase(getOrderDetailByOrderId.fulfilled, (state, action) => {
      state.dataOrderDetail = action.payload;
    })
    builder.addCase(getOrderDetailByOrderId.rejected, (state, action) => {
      state.loadingOrder = FAILED;
      state.errorOrder = action.error.message;
    })
  },
});

export default orderSlice.reducer;