// categoryReducer.js

import {
  FETCH_BRANDS_DATA_REQUEST,
  FETCH_BRANDS_DATA_SUCCESS,
  FETCH_BRANDS_DATA_FAILURE,
} from '../actions/brandsActions';

const initialState = {
  brandsData: [],
  loading: false,
  error: null,
};

const brandsReducer = (state = initialState, action) => {
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

export default brandsReducer;
