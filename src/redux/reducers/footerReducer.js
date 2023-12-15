// categoryReducer.js

import {
  FETCH_FOOTER_DATA_REQUEST,
  FETCH_FOOTER_DATA_SUCCESS,
  FETCH_FOOTER_DATA_FAILURE,
} from '../actions/footerActions';

const initialState = {
  footerData: [],
  loading: false,
  error: null,
};

const footerReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOOTER_DATA_REQUEST:
      return { ...state, loading: true, error: null };

    case FETCH_FOOTER_DATA_SUCCESS:
      return { ...state, loading: false, footerData: action.payload, error: null };

    case FETCH_FOOTER_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};

export default footerReducer;
