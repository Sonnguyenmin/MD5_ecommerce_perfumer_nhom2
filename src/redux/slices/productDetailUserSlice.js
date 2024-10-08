import { createSlice } from '@reduxjs/toolkit';
import { FAILED, PENDING, SUCCESSFULLY } from '../constants/status';
import { findProductDetailById } from '../../services/productDetailService';

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
      console.log('Slice product detail', action.payload);
      console.log('product detail', action.payload);
      state.dataProduct = action.payload;
    });
    builder.addCase(findProductDetailById.rejected, (state, action) => {
      state.loadingProduct = FAILED;
      console.log('error: ', action);
      state.errorProduct = action.error.message;
    });
  },
});

export default productDetailUserSlice.reducer;
