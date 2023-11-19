// categoryReducer.js

import {
  FETCH_BRANDS_DATA_REQUEST,
  FETCH_BRANDS_DATA_SUCCESS,
  FETCH_BRANDS_DATA_FAILURE,
} from '../actions/categoryActions';

const initialState = {
  brandsData: null,
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRANDS_DATA_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_BRANDS_DATA_SUCCESS:
      return { ...state, loading: false, brandsData: action.payload, error: null };

    case FETCH_BRANDS_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default categoryReducer;
