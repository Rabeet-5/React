import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS
}
    from '../constants/userConstants'
import axios from 'axios'

export const Login = (email, password) => async (dispatch) => {

    try {

        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { 'Content-Type': 'application/json' } };

        const { data } = await axios.post(`http://localhost:5000/api/v1/login`, { email, password }, config)

        dispatch({ type: LOGIN_SUCCESS, payload: data.user });

    } catch (error) {
        const errorMessage =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message });
    }
};

//For Clearing Errors
export const clearErrors = () => async (dispatch) => {

    dispatch({
        type: CLEAR_ERRORS,
    })
};