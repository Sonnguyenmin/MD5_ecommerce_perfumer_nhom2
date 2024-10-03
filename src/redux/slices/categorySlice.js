import { createSlice } from "@reduxjs/toolkit";
import { findAll } from "../../services/categoryService";
import { FAILED, PENDING, SUCCESSFULLY } from "../constants/status";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    loading: "idle",
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
    builder.addCase(findAll.pending, (state) => {
      state.loading = PENDING;
    });

    builder.addCase(findAll.fulfilled, (state, action) => {
      state.loading = SUCCESSFULLY;
      state.data = action.payload.content;
      console.log(action.payload);
      state.totalPages = action.payload.totalPages;
      state.numberOfElements = action.payload.numberOfElements;
      state.totalElements = action.payload.totalElements;
    });

    builder.addCase(findAll.rejected, (state, action) => {
      state.loading = FAILED;
      state.error = action.error.message;
    });
  },
});

export default categorySlice.reducer;
