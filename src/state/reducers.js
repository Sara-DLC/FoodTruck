import * as types from './actionTypes';

const initialTrucks = [{
    id: 1,
    imageOfTruck: 'https://www.mtlblog.com/u/2018/04/03/aa440c103b0e8954d031664dcb2ebd9d7fa1c305.jpg_1200x630.jpg',
    cuisineType: 'Fast Food',
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
    imageOfTruck: 'https://f00d.ca/montreal/wp-content/uploads/2013/10/MFT-GRUM-093013-01.jpg?w=640',
    cuisineType: 'Fast Food',
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
    itemName: 'Burger',
    itemPhotos: 'https://www.designindaba.com/sites/default/files/styles/scaledlarge/public/node/news/23566/sonic-burger.jpg?itok=zGk5pjcI',
    itemDescription: 'classic hamburger',
    customerRatingAvg: 4,
    itemPrice: 5
},
{
    itemName: 'Pizza',
    itemPhotos: 'https://images-gmi-pmc.edge-generalmills.com/f4c0a86f-b080-45cd-a8a7-06b63cdb4671.jpg',
    itemDescription: 'Fresh Pepperoni pizza',
    customerRatingAvg: 5,
    itemPrice: 8
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