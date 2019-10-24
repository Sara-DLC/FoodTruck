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
    // uncomment if backendTrue
    // const userId = localStorage.getItem('user')

    // axiosWithAuth().get(baseUrl + `/user/${userId}`)
    // .then(res => {
    //     dispatch(addTrucks(res.data.favoritetrucks))
    // })
    // .catch(err => {
    //     alert(err.message)
    // })

    // MockAPI Call
    axiosWithAuth()
        .get("https://my.api.mockaroo.com/trucks.json?key=59ae78a0",
        {
          headers: {
              'X-API-Key': '59ae78a0'
          }
        })
        .then(response => {
            dispatch(addTrucks(response.data))
        })
        .catch(error => {
            alert(error.message)
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
    // uncomment if backend is true
    // const userId = localStorage.getItem('user')

    // axiosWithAuth().get(baseUrl + `/vendor/${userId}`)
    // .then(res => {
    //     dispatch(addTrucks(res.data.trucksOwned))
    // })
    // .catch(err => {
    //     alert(err.message)
    // })

    // MockAPI Call

    axiosWithAuth()
        .get("https://my.api.mockaroo.com/trucks.json?key=59ae78a0",
        {
          headers: {
              'X-API-Key': '59ae78a0'
          }
        })
        .then(response => {
            dispatch(addTrucks(response.data))
        })
        .catch(error => {
            alert(error.message)
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
    axiosWithAuth()
        .get("https://my.api.mockaroo.com/trucks.json?key=59ae78a0",
        {
          headers: {
              'X-API-Key': '59ae78a0'
          }
        })
        .then(response => {
            dispatch(addTrucks(response.data))
        })
        .catch(error => {
            alert(error.message)
        })
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