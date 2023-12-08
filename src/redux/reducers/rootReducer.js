import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import homeReducer from "./homeReducer";
import shopReducer from './shopReducer';
import hotOfferReducer from './hotOfferReducer';
import arrivalReducer from './arrivalReducer';
import brandsReducer from './brandsReducer';
import categoryReducer from './categoryReducer';
import productReducer from './productReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  home: homeReducer,
  shop: shopReducer,
  hotOffer: hotOfferReducer,
  arrival: arrivalReducer,
  brands: brandsReducer,
  category: categoryReducer,
  product: productReducer
});

export default rootReducer;
