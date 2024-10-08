import { createSlice } from '@reduxjs/toolkit';
import { FAILED, PENDING, SUCCESSFULLY } from '../constants/status';
import { categoryByProductId } from '../../services/shopService';

const shopsSlice = createSlice({
  name: 'shops',
  initialState: {
    loadingCategoryUser: 'idle',
    dataCategoryUser: null,
    errorCategoryUser: null,
    totalPagesCategoryUser: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    // builder.addCase(categoryByProductId.pending, (state) => {
    //   state.loadingCategoryUser = PENDING;
    // });

    builder.addCase(categoryByProductId.fulfilled, (state, action) => {
      state.dataCategoryUser = action.payload;
    });

    // builder.addCase(findAllCategoryUser.rejected, (state, action) => {
    //   state.loadingCategoryUser = FAILED;
    //   state.errorCategoryUser = action.error.message;
    // });
  },
});

export default shopsSlice.reducer;
