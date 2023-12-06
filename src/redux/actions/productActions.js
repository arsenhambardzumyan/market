// productActions.js
import request from "../../components/helpers/request";


export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCTS_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsRequest = () => ({
    type: FETCH_PRODUCT_REQUEST,
});

export const fetchProductsSuccess = (products) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: products,
});

export const fetchProductsFailure = (error) => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: error,
});

export const fetchProduct = (slug) => async (dispatch) => {
    dispatch({ type: FETCH_PRODUCT_REQUEST });
    try {
        const data = await request(`${process.env.REACT_APP_BASE_URL}/product/${slug}`);
        dispatch({ type: FETCH_PRODUCT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: FETCH_PRODUCT_FAILURE, payload: error });
    }
};
