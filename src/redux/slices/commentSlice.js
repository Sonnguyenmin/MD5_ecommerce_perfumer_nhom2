import { createSlice } from '@reduxjs/toolkit';
import { FAILED, IDLE, PENDING, SUCCESSFULLY } from '../constants/status';
import { searchCommentsByUserName } from '../../services/commentService';

const commentSlice = createSlice({
  name: 'comment',
  initialState: {
    loadingComment: IDLE,
    dataComment: null,
    errorComment: null,
    totalPagesComment: 1,
    // size: 5,
    numberOfElementsComment: 0,
    totalElementsComment: 0,
    allComments: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // FIND ALL
    builder.addCase(searchCommentsByUserName.pending, (state) => {
      state.loadingComment = PENDING;
    });

    builder.addCase(searchCommentsByUserName.fulfilled, (state, action) => {
      state.loadingComment = SUCCESSFULLY;
      state.dataComment = action.payload.content;
      state.totalPagesComment = action.payload.totalPages;
      state.numberOfElementsComment = action.payload.numberOfElements;
      state.totalElementsComment = action.payload.totalElements;
    });

    builder.addCase(searchCommentsByUserName.rejected, (state, action) => {
      state.loadingComment = FAILED;
      state.errorComment = action.error.message;
    });
  },
});

export default commentSlice.reducer;
