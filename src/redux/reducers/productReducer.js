// productReducer.js
import { FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from '../actions/productActions';

const initialState = {
    products: [],
    loading: false,
    error: null,
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            };
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                loading: false,
                products: action.payload,
                error: null,
            };
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                loading: false,
                products: [],
                error: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;
