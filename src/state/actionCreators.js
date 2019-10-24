import * as types from './actionTypes';
import axiosWithAuth from '../axios';

const baseUrl = 'https://food-truck-finder-rj.herokuapp.com/api';

export const addTrucks = (trucks) => {
    return {
        type: types.ADD_TRUCKS,
        payload: trucks
    }
}

export const getFavorites = () => dispatch => {
    const userId = localStorage.getItem('user')

    axiosWithAuth().get(baseUrl + `/user/${userId}`)
    .then(res => {
        dispatch(addTrucks(res.data.favoritetrucks))
    })
    .catch(err => {
        alert(err.message)
    })
}

export const removeFavorites = (id) => dispatch => {
    const userId = localStorage.getItem('user')

    axiosWithAuth().delete(baseUrl + `/user/${userId}`)
    .then(res => {
        dispatch(getFavorites())
    })
    .catch(err => {
        alert(err.message)
    })
}

export const addFavorites = (id) => dispatch => {
    const userId = localStorage.getItem('user')

    axiosWithAuth().post(baseUrl + `/user/${userId}`)
    .then(res => {
        dispatch(getFavorites())
    })
    .catch(err => {
        alert(err.message)
    })
}



export const getTrucks = () => dispatch => {
    const userId = localStorage.getItem('user')

    axiosWithAuth().get(baseUrl + `/vendor/${userId}`)
    .then(res => {
        dispatch(addTrucks(res.data.trucksOwned))
    })
    .catch(err => {
        alert(err.message)
    })
}

export const removeTruck = (id) => dispatch => {
    axiosWithAuth().delete(baseUrl + `/truck/${id}`)
    .then(res => {
        dispatch(getTrucks())
    })
    .catch(err => {
        alert(err.message)
    })
}

export const searchTrucks = (formValues) => dispatch => {
    return null;
}


export const addMenu = (menu) => {
    return {
        type: types.ADD_MENU,
        payload: menu
    }
}

export const getMenu = (id) => dispatch => {
    axiosWithAuth().get(baseUrl + `/truck/${id}`)
    .then(res => {
        dispatch(addMenu(res.data.menu))
    })
    .catch(err => {
        alert(err.message)
    })
}

export const setCurrentTruckId = id => {
    return {
        type: types.ADD_CURRENT_TRUCK_ID,
        payload: id
    }
}