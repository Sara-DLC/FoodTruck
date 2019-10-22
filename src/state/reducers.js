import * as types from './actionTypes';

const initialTrucks = [{
    image: '',
    cuisineType: 'Chinese',
    customerRatingAvg: 5,
    currentLocation: {
        location: 'here'
    },
    nextLocation: {
        location: 'there'
    }
},
{
    image: '',
    cuisineType: 'Pizza',
    customerRatingAvg: 3,
    currentLocation: {
        location: 'here'
    },
    nextLocation: {
        location: 'there'
    }
}];

const initialMenu = [{
    itemName: 'Something',
    itemDescription: 'tastes good',
    customerRatingAvg: 3,
    itemPrice: 20
},
{
    itemName: 'good thing',
    itemDescription: 'tastes kinda good',
    customerRatingAvg: 3,
    itemPrice: 20
}];

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