import { combineReducers, applyMiddleware } from 'redux'
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/productReducer';


const reducers = combineReducers({
    products:productReducer,
});

let initialState = {};

const middleWare = [thunk];

const store = configureStore(
    {reducer:reducers}, 
    initialState,
    composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
