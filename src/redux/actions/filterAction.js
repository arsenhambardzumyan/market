// FilterActon.js
import request from "../../components/helpers/request";

export const FETCH_FILTER_REQUEST = 'FETCH_FILTER_REQUEST';
export const FETCH_FILTER_SUCCESS = 'FETCH_FILTER_SUCCESS';
export const FETCH_FILTER_FAILURE = 'FETCH_FILTER_FAILURE';

export const fetchFilter = (filterData) => async (dispatch) => {
    dispatch({ type: FETCH_FILTER_REQUEST });
    try {
      const data = await request(`${process.env.REACT_APP_BASE_URL}/search-product` , 'POST' ,  filterData);
      dispatch({ type: FETCH_FILTER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_FILTER_FAILURE, payload: error });
    }
};
