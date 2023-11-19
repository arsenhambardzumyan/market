// categoryActions.js

import request from "../../components/helpers/request";

export const FETCH_BRANDS_DATA_REQUEST = 'FETCH_BRANDS_DATA_REQUEST';
export const FETCH_BRANDS_DATA_SUCCESS = 'FETCH_BRANDS_DATA_SUCCESS';
export const FETCH_BRANDS_DATA_FAILURE = 'FETCH_BRANDS_DATA_FAILURE';

export const fetchBrands = () => async (dispatch) => {
    dispatch({ type: FETCH_BRANDS_DATA_REQUEST });
    try {
      const data = await request(`${process.env.REACT_APP_BASE_URL}/brands`);
      dispatch({ type: FETCH_BRANDS_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_BRANDS_DATA_FAILURE, payload: error });
    }
};
