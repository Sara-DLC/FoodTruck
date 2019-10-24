import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../state/actionCreators';
import  StarRating from './Rating';
import './scss/Truck.scss';

import ft1 from '../img/ft1.jpg';


const Truck = (props) => {
    const {truck, buttonText, removeFavorites, addFavorites, addTrucks, trucks} = props;

    const submit = id => event => {
        event.preventDefault();
        if(buttonText === 'Remove'){
            const newTrucks = trucks.filter(truck => {
                return truck.id !== id
            })
            addTrucks(newTrucks)
            // uncomment if backend true
            // removeFavorites(id);
        }
        else {
            addFavorites(id)
        }
    }

    return (
        <div className='truck'>
        
            <div className='truck-image'>
                <img src={ft1} alt='food truck'/>
            </div>
            <div className='truck-info'>
        
                <p><strong>Cuisine Type:</strong> </p>
                <p><strong>Average Customer Rating:</strong> </p>
                <p><strong>Current Location:</strong> </p>
                <p><strong>Current Location Depart Time:</strong></p>
                <p><strong>Next Location:</strong> </p>
                <p><strong>Next Location Arrival Time:</strong> </p>
            </div>
            <div className='truck-info'>
        
                <p>{truck.cuisineType}</p>
                <p>{truck.customerRatingAvg}</p>
                <p>{truck.currentLocation.location}</p>
                <p>{truck.currentLocation.departureTime}</p>
                <p>{truck.nextLocation.location}</p>
                <p>{truck.nextLocation.arrivalTime}</p>
            </div>
            <div className='truck-button'>
                <button><Link to={`/trucks/${truck.id}/menu`}>Menu</Link></button>
                <button onClick={submit(truck.id)}>{buttonText}</button>
                <div className="rating">       
                    <StarRating totalStars={5} />         
                </div>
            </div>
         
        </div>
    )

}

export default connect(
    state => state,
    actionCreators
)(Truck);
