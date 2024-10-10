import { createSlice } from "@reduxjs/toolkit";
import { FAILED, IDLE } from "../constants/status";
import { getAllDashBoard } from "../../services/DashBoardService";
const dashBoardSlice = createSlice({
  name: 'dashBoard',
  initialState: {
    loadingDashBoard: IDLE,
    dataDashBoard: null,
    errorDashBoard: null,
    totalPagesDashBoard: 1,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllDashBoard.fulfilled, (state, action) => {
      state.dataDashBoard = action.payload;
    });
    builder.addCase(getAllDashBoard.rejected, (state, action) => {
      state.dataDashBoard = FAILED;
      state.errorDashBoard = action.error.message;
    });
    
  },
});

export default dashBoardSlice.reducer;