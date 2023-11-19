// categoryActions.js

import request from "../../components/helpers/request";

export const FETCH_CATEGORYPRODUCTS_REQUEST = 'FETCH_CATEGORYPRODUCTS_REQUEST';
export const FETCH_CATEGORYPRODUCTS_SUCCESS = 'FETCH_CATEGORYPRODUCTS_SUCCESS';
export const FETCH_CATEGORYPRODUCTS_FAILURE = 'FETCH_CATEGORYPRODUCTS_FAILURE';

export const fetchCategoryProducts = (slug) => async (dispatch) => {
    dispatch({ type: FETCH_CATEGORYPRODUCTS_REQUEST });
    try {
      const data = await request(`${process.env.REACT_APP_BASE_URL}/category/${slug}`);
      dispatch({ type: FETCH_CATEGORYPRODUCTS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_CATEGORYPRODUCTS_FAILURE, payload: error });
    }
};
