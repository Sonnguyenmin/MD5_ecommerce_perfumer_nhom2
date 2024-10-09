import { createSlice } from '@reduxjs/toolkit';
import { FAILED, IDLE, PENDING, SUCCESSFULLY } from '../constants/status';
import { findProductDetailById } from '../../services/productDetailService';

const productDetailSlice = createSlice({
  name: 'ProductDetail',
  initialState: {
    loadingProDetail: IDLE,
    dataProDetail: null,
    errorProDetail: null,
    totalPagesProDetail: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findProductDetailById.fulfilled, (state, action) => {
      state.dataProduct = action.payload;
      console.log('admin sclie find product by id', action.payload);
    });
    builder.addCase(findProductDetailById.rejected, (state, action) => {
      state.loadingProduct = FAILED;
      state.errorProduct = action.error.message;
    });
  },
});

export default productDetailSlice.reducer;
