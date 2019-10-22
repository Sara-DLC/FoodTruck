import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actionCreators from '../state/actionCreators';
import './scss/Truck.scss';

const Truck = (props) => {
    const {truck} = props;

    return (
        <div className='truck'>
            <div className='truck-image'>
                <img src={truck.image} alt='food truck'/>
            </div>
            <div className='truck-info'>
                <p>Cuisine Type: {truck.cuisineType}</p>
                <p>Average Customer Rating: {truck.customerRatingAvg}</p>
                <p>Current Location: {truck.currentLocation.location}</p>
                <p>Next Location: {truck.nextLocation.location}</p>
            </div>
            <div className='truck-button'>
                <button><Link to={`/trucks/${truck.id}`}>Menu</Link></button>
                <button>Generic2</button>
            </div>
        </div>
    )

}

export default connect(
    state => state,
    actionCreators
)(Truck);
