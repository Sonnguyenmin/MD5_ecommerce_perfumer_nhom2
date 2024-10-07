import { createSlice } from '@reduxjs/toolkit';
import * as status from '../constants/status';
import { loadUserFormCookie, login } from '../../services/authService';
import { Cookies } from 'react-cookie';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    status: status.IDLE,
    data: null,
    error: null,
  },
  reducers: {
    logout: (state) => {
      const cookies = new Cookies();
      cookies.remove('accessToken');
      localStorage.removeItem('userInfo');

      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.status = status.PENDING;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.status = status.SUCCESSFULLY;
        state.data = action.payload;
      })

      .addCase(login.rejected, (state, action) => {
        state.status = status.FAILED;
        state.error = action.error.message;
      })

      .addCase(loadUserFormCookie.fulfilled, (state, action) => {
        state.data = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
