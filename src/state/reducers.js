import * as types from './actionTypes';

const initialTrucks = [];

const initialMenu = [];

export const trucksReducer = (state = initialTrucks, action) => {
    switch(action.type){
        case types.ADD_TRUCKS:
            return action.payload;
        default:
            return state
    }
}

export const menuReducer = (state = initialMenu, action) => {
    switch(action.type){
        case types.ADD_MENU:
            return action.payload;
        default:
            return state
    }
}