import { configureStore } from '@reduxjs/toolkit'
import { applyMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {thunk} from 'redux-thunk'

import { composeWithDevTools } from '@redux-devtools/extension';



const ADD_FOOD = 'ADD_FOOD';
const SET_FOOD = 'SET_FOOD';
const SET_FOOD_ASYNC = 'SET_FOOD_ASYNC';
const DELETE_FOOD = 'DELETE_FOOD';



const initailState = {
    num: 0
}

// action
export const actionCreators = {
    addFood : () => {
        return {
            type: ADD_FOOD
        }
    },
    addFoodAsync : () => {
        return function(dispatch) {
            dispatch({
                type: ADD_FOOD
            })
        }
    },
    setFood: (payload) => {
        setTimeout(() => {
            // we can use store.dispatch here, or pass dispatch funtion to setFood as parameter in connect function as well.
            store.dispatch({
                type: SET_FOOD,
                payload
            })
        },2000);
        // return{
        //     type: SET_FOOD,
        //     payload
        // }
    },
    setFoodAsync : (payload) => {
        return function(dispatch) {
            dispatch({
                type: SET_FOOD_ASYNC,
                payload
            })
        }
    },
    // deleteFoodAsync: () => {
    //     return function(dispatch) {
    //         dispatch({
    //             type: DELETE_FOOD
    //         })
    //     }
    // }
}


// reducer
const reducer = (state = initailState, action) => {
    switch(action.type) {
        case ADD_FOOD: 
            return {
                ...state,
                num: state.num + 1
            };
            break;
        case SET_FOOD: 
        case SET_FOOD_ASYNC:
            return {
                ...state,
                num: action.payload.num
            }
        default: return state;
    }
}

// store.dispatch(actionCreators.addFood);

export const store = configureStore({
    reducer,
    // middleware: () => new Tuple(thunk, logger),
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger).concat(thunk)
    middleware: () => [thunk, logger]
    // middleware: () => [logger, composeWithDevTools]
});
