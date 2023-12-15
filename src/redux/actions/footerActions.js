// categoryActions.js
import request from "../../components/helpers/request";

export const FETCH_FOOTER_DATA_REQUEST = 'FETCH_FOOTER_DATA_REQUEST';
export const FETCH_FOOTER_DATA_SUCCESS = 'FETCH_FOOTER_DATA_SUCCESS';
export const FETCH_FOOTER_DATA_FAILURE = 'FETCH_FOOTER_DATA_FAILURE';

export const fetchfooter = () => async (dispatch) => {
    dispatch({ type: FETCH_FOOTER_DATA_REQUEST });
    try {
      const data = await request(`${process.env.REACT_APP_BASE_URL}/footer`);
      dispatch({ type: FETCH_FOOTER_DATA_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: FETCH_FOOTER_DATA_FAILURE, payload: error });
    }
};
