// categoryActions.js

import request from "../../components/helpers/request";
export const FETCH_HOTOFFER_REQUEST = 'FETCH_HOTOFFER_REQUEST';
export const FETCH_HOTOFFER_SUCCESS = 'FETCH_HOTOFFER_SUCCESS';
export const FETCH_HOTOFFER_FAILURE = 'FETCH_HOTOFFER_FAILURE';

export const fetchProducts = (page) => async (dispatch) => {
    dispatch({ type: FETCH_HOTOFFER_REQUEST });
    try {
      const data = await request(`${process.env.REACT_APP_BASE_URL}/products/best/${page}`);
      dispatch({ type: FETCH_HOTOFFER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_HOTOFFER_FAILURE, payload: error });
    }
};
