import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import homeReducer from "./homeReducer";
import shopReducer from './shopReducer';
import categoryReducer from './categoryReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  home: homeReducer,
  shop: shopReducer,
  category: categoryReducer
});
export default rootReducer;
