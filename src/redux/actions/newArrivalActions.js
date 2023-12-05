// categoryActions.js

import request from "../../components/helpers/request";
export const FETCH_ARRIVAL_REQUEST = 'FETCH_ARRIVAL_REQUEST';
export const FETCH_ARRIVAL_SUCCESS = 'FETCH_ARRIVAL_SUCCESS';
export const FETCH_ARRIVAL_FAILURE = 'FETCH_ARRIVAL_FAILURE';

export const fetchProducts = (page) => async (dispatch) => {
    dispatch({ type: FETCH_ARRIVAL_REQUEST });
    try {
      const data = await request(`${process.env.REACT_APP_BASE_URL}/products/new/${page}`);
      dispatch({ type: FETCH_ARRIVAL_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_ARRIVAL_FAILURE, payload: error });
    }
};
