import { createSlice } from "@reduxjs/toolkit";
import { FAILED, IDLE, PENDING, SUCCESSFULLY } from "../constants/status";
import { findAllProDetail } from "../../services/productDetailService";

const productDetailSlice = createSlice({
  name: "productDetail",
  initialState: {
    loadingProDetail: IDLE,
    dataProDetail: null,
    errorProDetail: null,
    totalPagesProDetail: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findAllProDetail.pending, (state) => {
      state.loadingProDetail = PENDING;
    });

    builder.addCase(findAllProDetail.fulfilled, (state, action) => {
      state.loadingProDetail = SUCCESSFULLY;
      state.dataProDetail = action.payload.content;
    });

    builder.addCase(findAllProDetail.rejected, (state, action) => {
      state.loadingProDetail = FAILED;
      state.errorProDetail = action.error.message;
    });
  },
});

export default productDetailSlice.reducer;