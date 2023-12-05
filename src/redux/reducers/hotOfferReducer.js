import {
  FETCH_HOTOFFER_REQUEST,
  FETCH_HOTOFFER_SUCCESS,
  FETCH_HOTOFFER_FAILURE,
} from '../actions/hotOfferActions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

const hotOfferReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_HOTOFFER_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_HOTOFFER_SUCCESS:
      console.log(action.payload.data);
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FETCH_HOTOFFER_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default hotOfferReducer;
