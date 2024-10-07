import { combineReducers } from "redux";
import categorySlice from "./categorySlice";
import authSlice from "./authSlice";
import productSlice from "./productSlice";
const reducers = combineReducers({
  category: categorySlice,
  auth: authSlice,
  product: productSlice,
});

export default reducers;
