// homeActions.js

import request from "../../components/helpers/request";

export const FETCH_HOME_DATA_REQUEST = "FETCH_HOME_DATA_REQUEST";
export const FETCH_HOME_DATA_SUCCESS = "FETCH_HOME_DATA_SUCCESS";
export const FETCH_HOME_DATA_FAILURE = "FETCH_HOME_DATA_FAILURE";

export const fetchHomeData = () => async (dispatch) => {
  dispatch({ type: FETCH_HOME_DATA_REQUEST });

  try {
    const data = await request(`${process.env.REACT_APP_BASE_URL}/main`);
    dispatch({ type: FETCH_HOME_DATA_SUCCESS, payload: data });    
  } catch (error) {
    dispatch({ type: FETCH_HOME_DATA_FAILURE, payload: error });
  }
};
