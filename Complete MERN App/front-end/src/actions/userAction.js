import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    REGISTER_USER_REQUEST,
    REGISTER_USER_SUCCESS,
    REGISTER_USER_FAIL,
    LOAD_USER_REQUEST,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_FAIL,
    LOGOUT_SUCCESS
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

export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST });

        const config = { headers: { 'Content-Type': 'multipart/form-data' } };

        const { data } = await axios.post(`http://localhost:5000/api/v1/register`, userData, config)

        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })


    }
    catch (error) {
        const errorMessage =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data.message });
    }
}

//Load User
export const LoadUser = () => async (dispatch) => {

    try {

        dispatch({ type: LOAD_USER_REQUEST });

        const { data } = await axios.get(`http://localhost:5000/api/v1/me`)

        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user });

    } catch (error) {
        const errorMessage =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;

        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message });
    }
};

//Logout user
export const logout = () => async (dispatch) => {
    try {
        await axios.get(`http://localhost:5000/api/v1/logout`);
        dispatch({ type: LOGOUT_SUCCESS });
    } catch (error) {
        const errorMessage =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message });
    }
};

//For Clearing Errors
export const clearErrors = () => async (dispatch) => {

    dispatch({
        type: CLEAR_ERRORS,
    })
};