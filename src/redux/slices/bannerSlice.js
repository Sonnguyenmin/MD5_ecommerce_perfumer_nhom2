import { createSlice } from '@reduxjs/toolkit';
import * as status from '../constants/status';
import { findAllBanner, listBanner } from '../../services/bannerService';

const bannerSlice = createSlice({
  name: 'banners',
  initialState: {
    loading: status.IDLE,
    data: null,
    error: null,
    totalPages: 1,
    numberOfElements: 0,
    totalElements: 0,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(findAllBanner.pending, (state) => {
      state.loading = status.PENDING;
    });

    builder.addCase(findAllBanner.fulfilled, (state, action) => {
      state.loading = status.SUCCESSFULLY;
      state.data = action.payload.content;
      state.totalPages = action.payload.totalPages;
      state.numberOfElements = action.payload.numberOfElements;
      state.totalElements = action.payload.totalElements;
    });

    builder.addCase(findAllBanner.rejected, (state, action) => {
      state.loading = status.FAILED;
      state.error = action.error.message;
    });

    builder.addCase(listBanner.fulfilled, (state, action) => {
      state.data = action.payload.data.content;
    });
  },
});

export default bannerSlice.reducer;
