import { createSlice } from '@reduxjs/toolkit';
import { findAllProduct } from '../../services/productService';
import { FAILED, PENDING, SUCCESSFULLY } from '../constants/status';

const productSlice = createSlice({
  name: 'product',
  initialState: {
    loadingProduct: 'idle',
    dataProduct: null,
    errorProduct: null,
    totalPagesProduct: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findAllProduct.pending, (state) => {
      state.loadingProduct = PENDING;
    });

    builder.addCase(findAllProduct.fulfilled, (state, action) => {
      state.loadingProduct = SUCCESSFULLY;
      state.dataProduct = action.payload.content;
    });

    builder.addCase(findAllProduct.rejected, (state, action) => {
      state.loadingProduct = FAILED;
      state.errorProduct = action.error.message;
    });
  },
});

export default productSlice.reducer;
