// categoryActions.js

import request from "../../components/helpers/request";

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_FAILURE = 'FETCH_CATEGORIES_FAILURE';

export const fetchProducts = () => async (dispatch) => {
    dispatch({ type: FETCH_CATEGORIES_REQUEST });
    try {
      const data = await request(`${process.env.REACT_APP_BASE_URL}/categories`);
      dispatch({ type: FETCH_CATEGORIES_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_CATEGORIES_FAILURE, payload: error });
    }
};
