import { createSlice } from '@reduxjs/toolkit';
import { FAILED, PENDING, SUCCESSFULLY } from '../constants/status';
import { addWishList, getAllWishlist } from '../../services/wishlistService';

const wishListSlice = createSlice({
  name: 'wishList',
  initialState: {
    loadingWishlist: 'idle',
    dataWishlist: null,
    errorWishlist: null,
  },
  reducers: {
    removeWishlist: (state) => {
      state.dataWishlist = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllWishlist.pending, (state) => {
      state.loadingWishlist = PENDING;
    });

    builder.addCase(getAllWishlist.fulfilled, (state, action) => {
      state.loadingWishlist = SUCCESSFULLY;
      state.dataWishlist = action.payload.content;
    });

    builder.addCase(getAllWishlist.rejected, (state, action) => {
      state.loadingWishlist = FAILED;
      state.errorWishlist = action.error.message;
    });

    builder.addCase(addWishList.fulfilled, (state, action) => {
      state.dataWishlist = action.payload;
    });
  },
});

export const { removeWishlist } = wishListSlice.actions;
export default wishListSlice.reducer;
