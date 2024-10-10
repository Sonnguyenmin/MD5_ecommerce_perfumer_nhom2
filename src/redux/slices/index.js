import { combineReducers } from 'redux';
import categorySlice from './categorySlice';
import authSlice from './authSlice';
import userSlice from './userSlice';
import bannerSlice from './bannerSlice';
import brandSlice from './brandSlice';
import productSlice from './productSlice';
import wishListSlice from './wishListSlice';
import productDetailSlice from './productDetailSlice';
import productDetailUserSlice from './productDetailUserSlice';
import productRealSlice from './productRealSlice';
import cartSlice from './cartSlice';
import orderSlice from './orderSlice';
import historyOrderUserSlice from './historyOrderUserSlice';
import dashBoardSlice from './dashBoardSlice';
const reducers = combineReducers({
  category: categorySlice,
  auth: authSlice,
  users: userSlice,
  banner: bannerSlice,
  brand: brandSlice,
  product: productSlice,
  ProductDetail: productDetailSlice,
  productDetailUser: productDetailUserSlice,
  wishList: wishListSlice,
  productReal: productRealSlice,
  carts: cartSlice,
  orders: orderSlice,
  historyOrderUser: historyOrderUserSlice,
  dashBoards: dashBoardSlice,
});

export default reducers;
