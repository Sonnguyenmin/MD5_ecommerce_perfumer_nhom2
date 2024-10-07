import { createSlice } from '@reduxjs/toolkit';
import { FAILED, IDLE, PENDING, SUCCESSFULLY } from '../constants/status';
import { findBrandAll } from '../../services/brandService';

const brandSlice = createSlice({
  name: 'brand',
  initialState: {
    loading: IDLE,
    data: null,
    error: null,
    totalPages: 1,
    // size: 5,
    numberOfElements: 0,
    totalElements: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    // FIND ALL
    builder.addCase(findBrandAll.pending, (state) => {
      state.loading = PENDING;
    });

    builder.addCase(findBrandAll.fulfilled, (state, action) => {
      state.loading = SUCCESSFULLY;
      state.data = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.numberOfElements = action.payload.numberOfElements;
      state.totalElements = action.payload.totalElements;
    });

    builder.addCase(findBrandAll.rejected, (state, action) => {
      state.loading = FAILED;
      state.error = action.error.message;
    });
  },
});

export default brandSlice.reducer;
