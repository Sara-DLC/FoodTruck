import * as types from './actionTypes';

const initialTrucks = [{
    id: 1,
    imageOfTruck: '',
    cuisineType: 'Chinese',
    customerRatingAvg: 5,
    menu: [],
    currentLocation: {
        location: 'route 1',
        departureTime: '4.00pm',
    },
    nextLocation: {
        location: 'route 54',
        departureTime: '6.00pm',
        arrivalTime: '5.00pm',
    }
},
{
    id:2,
    imageOfTruck: '',
    cuisineType: 'Pizza',
    customerRatingAvg: 3,
    currentLocation: {
        location: 'route 19',
        departureTime: '10.00pm',
    },
    nextLocation: {
        location: 'route 4',
        departureTime: '12.00am',
        arrivalTime: '11.00pm',
    }
}];

const initialMenu = [{
    itemName: 'Something',
    itemPhotos: [],
    itemDescription: 'tastes good',
    customerRatingAvg: 3,
    itemPrice: 20
},
{
    itemName: 'good thing',
    itemPhotos: [],
    itemDescription: 'tastes kinda good',
    customerRatingAvg: 5,
    itemPrice: 200
}];

const initialCurrentTruckId = null

export const trucksReducer = (state = initialTrucks, action) => {
    switch(action.type){
        case types.ADD_TRUCKS:
            return action.payload;
        default:
            return state;
    }
}

export const menuReducer = (state = initialMenu, action) => {
    switch(action.type){
        case types.ADD_MENU:
            return action.payload;
        default:
            return state;
    }
}

export const currentTruckIdReducer = (state=initialCurrentTruckId, action) => {
    switch(action.type){
        case types.ADD_CURRENT_TRUCK_ID:
            return action.payload;
        default:
            return state;
    }
}