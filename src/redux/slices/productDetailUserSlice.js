import { createSlice } from '@reduxjs/toolkit';
import { FAILED, PENDING, SUCCESSFULLY } from '../constants/status';
import { findProductDetailById } from '../../services/productDetailService';
import { findProductByIdForUser } from '../../services/productService';

const productDetailUserSlice = createSlice({
  name: 'productDetail',
  initialState: {
    loadingProduct: 'idle',
    dataProduct: null,
    errorProduct: null,
    totalPagesProduct: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findProductDetailById.fulfilled, (state, action) => {
      state.dataProduct = action.payload;

    });
    builder.addCase(findProductDetailById.rejected, (state, action) => {
      state.loadingProduct = FAILED;
      state.errorProduct = action.error.message;
    });
    // builder.addCase(findProductByIdForUser.fulfilled, (state, action) => {
    //   state.dataProduct = action.payload;
    //   console.log("user sclie find product by id", action.payload);
    // })
    //   .addCase(findProductByIdForUser.rejected, (state, action) => {
    //     state.loadingProduct = FAILED;
    //     state.errorProduct = action.error.message;
    //   });

  },
});

export default productDetailUserSlice.reducer;
