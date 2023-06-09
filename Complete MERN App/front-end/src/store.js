import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {productDetailsReducer, productReducer} from './reducers/productReducer';
import {userReducer} from './reducers/userReducer'

const reducers = combineReducers({
    products:productReducer,
    productDetails:productDetailsReducer,
    user:userReducer,
});

let initialState = {};

const middleWare = [thunk];

const store = configureStore(
    {reducer:reducers}, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
