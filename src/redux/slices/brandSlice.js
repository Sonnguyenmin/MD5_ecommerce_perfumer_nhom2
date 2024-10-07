import { createSlice } from '@reduxjs/toolkit';
import { FAILED, IDLE, PENDING, SUCCESSFULLY } from '../constants/status';
import { findBrandAll } from '../../services/brandService';

const brandSlice = createSlice({
  name: 'brand',
  initialState: {
    loadingBrand: IDLE,
    dataBrand: null,
    errorBrand: null,
    totalPagesBrand: 1,
    // size: 5,
    numberOfElementsBrand: 0,
    totalElementsBrand: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    // FIND ALL
    builder.addCase(findBrandAll.pending, (state) => {
      state.loadingBrand = PENDING;
    });

    builder.addCase(findBrandAll.fulfilled, (state, action) => {
      state.loadingBrand = SUCCESSFULLY;
      state.dataBrand = action.payload.content;
      state.totalPagesBrand = action.payload.totalPages;
      state.numberOfElementsBrand = action.payload.numberOfElements;
      state.totalElementsBrand = action.payload.totalElements;
    });

    builder.addCase(findBrandAll.rejected, (state, action) => {
      state.loading.Brand = FAILED;
      state.errorBrand = action.error.message;
    });
  },
});

export default brandSlice.reducer;