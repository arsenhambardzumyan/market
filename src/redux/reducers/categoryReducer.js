import {
  FETCH_CATEGORYPRODUCTS_REQUEST,
  FETCH_CATEGORYPRODUCTS_SUCCESS,
  FETCH_CATEGORYPRODUCTS_FAILURE,
} from '../actions/categoryActions';

const initialState = {
  category: [],
  loading: false,
  error: null,
};

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CATEGORYPRODUCTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_CATEGORYPRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        category: action.payload,
      };
    case FETCH_CATEGORYPRODUCTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
console.log(action)
};


export default categoryReducer;
