import { createSlice } from '@reduxjs/toolkit';
import { FAILED, IDLE, PENDING, SUCCESSFULLY } from '../constants/status';
import { listOrderByUser } from '../../services/historyOrderUserService';

const historyOrderUserSlice = createSlice({
  name: 'historyOrderUser',
  initialState: {
    loadingHistoryOrderUser: IDLE,
    dataHistoryOrderUser: null,
    errorHistoryOrderUser: null,
    totalPagesHistoryOrderUser: 1,
    numberOfElementsHistoryOrderUser: 0,
    totalElementsHistoryOrderUser: 0,
    allHistoryOrderUser: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(listOrderByUser.pending, (state) => {
      state.loadingHistoryOrderUser = PENDING;
    });

    builder.addCase(listOrderByUser.fulfilled, (state, action) => {
      state.loadingHistoryOrderUser = SUCCESSFULLY;
      state.dataHistoryOrderUser = action.payload.content;
      state.totalPagesHistoryOrderUser = action.payload.totalPages;
      state.numberOfElementsHistoryOrderUser = action.payload.numberOfElements;
      state.totalElementsHistoryOrderUser = action.payload.totalElements;
    });

    builder.addCase(listOrderByUser.rejected, (state, action) => {
      state.loadingHistoryOrderUser = FAILED;
      state.errorHistoryOrderUser = action.error.message;
    });
  },
});

export default historyOrderUserSlice.reducer;
