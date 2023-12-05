// homeReducer.js

import {
  FETCH_HOME_DATA_REQUEST,
  FETCH_HOME_DATA_SUCCESS,
  FETCH_HOME_DATA_FAILURE,
} from "../actions/homeActions";

const initialState = {
  homeData: null,
  loading: false,
  error: null,
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOME_DATA_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_HOME_DATA_SUCCESS:
      return { ...state, loading: false, homeData: action.payload };
    case FETCH_HOME_DATA_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default homeReducer;
