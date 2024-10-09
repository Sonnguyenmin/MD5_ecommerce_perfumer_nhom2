import { createSlice } from "@reduxjs/toolkit";
import { findAllCart } from "../../services/cartService";
import { FAILED, IDLE } from "../constants/status";

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    loadingCart: IDLE,
    dataCart: null,
    errorCart: null,
    totalPagesCart: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findAllCart.fulfilled, (state, action) => {
      state.dataCart = action.payload;
    });
    builder.addCase(findAllCart.rejected, (state, action) => {
      state.loadingCart = FAILED;
      state.errorCart = action.error.message;
    });
  },
});

export default cartSlice.reducer;
