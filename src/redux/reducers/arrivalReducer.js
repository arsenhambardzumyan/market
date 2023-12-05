import {
  FETCH_ARRIVAL_REQUEST,
  FETCH_ARRIVAL_SUCCESS,
  FETCH_ARRIVAL_FAILURE,
} from '../actions/newArrivalActions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const arrivalReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ARRIVAL_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ARRIVAL_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_ARRIVAL_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default arrivalReducer;
