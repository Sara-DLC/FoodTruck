import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../state/actionCreators';
import './scss/Truck.scss';

const Truck = (props) => {
    const {truck, buttonText} = props;

    return (
        <div className='truck'>
            <div className='truck-image'>
                <img src={truck.imageOfTruck} alt='food truck'/>
            </div>
            <div className='truck-info'>
                <p>Cuisine Type: {truck.cuisineType}</p>
                <p>Average Customer Rating: {truck.customerRatingAvg}</p>
                <p>Current Location: {truck.currentLocation.location}</p>
                <p>Current Location Depart Time: {truck.currentLocation.departureTime}</p>
                <p>Next Location: {truck.nextLocation.location}</p>
                <p>Next Location Arrival Time: {truck.nextLocation.arrivalTime}</p>
            </div>
            <div className='truck-button'>
                <button><Link to={`/trucks/${truck.id}/menu`}>Menu</Link></button>
                <button>{buttonText}</button>
                <p>ADD RATING</p>
            </div>
        </div>
    )

}

export default connect(
    state => state,
    actionCreators
)(Truck);
