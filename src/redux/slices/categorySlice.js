import { createSlice } from '@reduxjs/toolkit';
import { findAllCategory, findAllCategoryNoPagination, listCategory } from '../../services/categoryService';
import { FAILED, IDLE, PENDING, SUCCESSFULLY } from '../constants/status';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    loadingCategory: IDLE,
    dataCategory: null,
    errorCategory: null,
    totalPagesCategory: 1,

    // size: 5,
    numberOfElementsCategory: 0,
    totalElementsCategory: 0,
    allCategories: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // FIND ALL PAGINATION
    builder.addCase(findAllCategory.pending, (state) => {
      state.loadingCategory = PENDING;
    });

    builder.addCase(findAllCategory.fulfilled, (state, action) => {
      state.loadingCategory = SUCCESSFULLY;
      state.dataCategory = action.payload.content;
      state.totalPagesCategory = action.payload.totalPages;
      state.numberOfElementsCategory = action.payload.numberOfElements;
      state.totalElementsCategory = action.payload.totalElements;
    });

    builder.addCase(findAllCategory.rejected, (state, action) => {
      state.loadingCategory = FAILED;
      state.errorCategory = action.error.message;
    });
    // FIND ALL NO PAGINATION
    builder.addCase(findAllCategoryNoPagination.pending, (state) => {
      state.loadingCategory = PENDING;
    });

    builder.addCase(findAllCategoryNoPagination.fulfilled, (state, action) => {
      state.loadingCategory = SUCCESSFULLY;
      state.allCategories = action.payload;
    });

    builder.addCase(findAllCategoryNoPagination.rejected, (state, action) => {
      state.loadingCategory = FAILED;
      state.errorCategory = action.error.message;
    });

    builder.addCase(listCategory.fulfilled, (state, action) => {
      state.dataCategory = action.payload;
    });

    // builder.addCase(listCategory.fulfilled, (state, action) => {
    //   console.log("category slice: ", action.payload);
    //   state.data = action.payload.content
    // });


  },
});

export default categorySlice.reducer;
