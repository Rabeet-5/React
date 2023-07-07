import axios from 'axios';
import {
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    CLEAR_ERRORS
} from '../constants/productConstants'

const getProducts = (keyword = '', currentPage = 1, price = [0, 25000]) => async (dispatch) => {

    try {

        dispatch({ type: ALL_PRODUCT_REQUEST });
        const { data } = await axios.get(`http://localhost:5000/api/v1/product?keyword=${keyword}&page=${currentPage}&price[gt]=${price[0]}&price[lt]=${price[1]}`);

        dispatch({
            type: ALL_PRODUCT_SUCCESS,
            payload: data,
        })

    } catch (error) {
        dispatch({
            type: ALL_PRODUCT_FAIL,
            payload: error.response.data
        })
    }

};


//Product Details Action

const getProductDetails = (id) => async (dispatch) => {

    try {

        dispatch({ type: PRODUCT_DETAILS_REQUEST });
        const { data } = await axios.get(`http://localhost:5000/api/v1/product/${id}`);

        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data.product,
        })

    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }

};





//For Clearing Errors
const clearErrors = () => async (dispatch) => {

    dispatch({
        type: CLEAR_ERRORS,
    })
}

export {
    getProducts, clearErrors, getProductDetails
}