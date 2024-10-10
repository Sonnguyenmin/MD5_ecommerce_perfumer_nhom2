import { createSlice } from '@reduxjs/toolkit';
import { FAILED, PENDING, SUCCESSFULLY } from '../constants/status';
import { findProductByIdForUser } from '../../services/productService';

const productRealSlice = createSlice({
  name: 'productDetail',
  initialState: {
    status: 'idle',
    data: null,
    error: null,
    totalPagesProduct: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(findProductByIdForUser.fulfilled, (state, action) => {
        state.data = action.payload.data.content;
      })
      .addCase(findProductByIdForUser.rejected, (state, action) => {
        state.loadingProduct = FAILED;
        state.errorProduct = action.error.message;
      });
  },
});

export default productRealSlice.reducer;
