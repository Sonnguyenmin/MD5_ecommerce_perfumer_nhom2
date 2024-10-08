import { combineReducers } from 'redux';
import categorySlice from './categorySlice';
import authSlice from './authSlice';
import userSlice from './userSlice';
import bannerSlice from './bannerSlice';
import brandSlice from './brandSlice';
import productSlice from './productSlice';
import shopsSlice from './shopsSlice';
import productDetailSlice from './productDetailSlice';

const reducers = combineReducers({
  category: categorySlice,
  auth: authSlice,
  users: userSlice,
  banner: bannerSlice,
  brand: brandSlice,
  product: productSlice,
  shops: shopsSlice,
  productDetail: productDetailSlice,
});

export default reducers;
