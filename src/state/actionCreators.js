import * as types from './actionTypes';
import axiosWithAuth from '../axios';

const baseUrl = ''

export const addFavorites = (favorites) => {
    return {
        type: types.ADD_FAVORITES,
        payload: favorites
    }
}

export const getFavorites = () => dispatch => {
    const userId = localStorage.getItem('user')

    axiosWithAuth().get(baseUrl + `/user/${userId}`)
    .then(res => {
        dispatch(addFavorites(res.favoritetrucks))
    })
    .catch(err => {
        alert(err.message)
    })
}