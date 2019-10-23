import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../state/actionCreators';
import { Link } from 'react-router-dom';
// import Truck from './Truck';

const VendorPage = (props) => {

    const {getTrucks, trucks} = props;

    // useEffect(()=>{
    //     getTrucks();
    // },[]);

    return (
        <div className='vendor-page'>
            <button>Create Truck</button>
            <div className='favorite-trucks'>
           
                {trucks.map(truck => (
                    <div className='truck'>
                    <div className='truck-image'>
                        <img src={truck.image} alt='food truck'/>
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
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>
                </div>
                ))}
            </div>  
        </div>
        
    )
}

export default connect(
    state => state,
    actionCreators
)(VendorPage);