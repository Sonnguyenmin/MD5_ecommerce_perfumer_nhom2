import { combineReducers } from 'redux';
import categorySlice from './categorySlice';
import authSlice from './authSlice';
import userSlice from './userSlice';
import bannerSlice from './bannerSlice';

const reducers = combineReducers({
  category: categorySlice,
  auth: authSlice,
  users: userSlice,
  banner: bannerSlice,
});

export default reducers;
