import * as types from './actionTypes';

const initialTrucks = []

const initialFavorites = []

export const trucksReducer = (state = initialTrucks, action) => {
    switch(action.type){
        default:
            return state
    }
}

export const favoritesReducer = (state = initialFavorites, action) => {
    switch(action.type){
        case types.ADD_FAVORITES:
            return action.payload;
        default:
            return state;
    }
}