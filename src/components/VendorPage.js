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
                {trucks.map(item => (
                    <div className='truck'>
                    <div className='truck-image'>
                        <img src={item.image} alt='food truck'/>
                    </div>
                    <div className='truck-info'>
                        <p>Cuisine Type: {item.cuisineType}</p>
                        <p>Average Customer Rating: {item.customerRatingAvg}</p>
                        <p>Current Location: {item.currentLocation.location}</p>
                        <p>Next Location: {item.nextLocation.location}</p>
                    </div>
                    <div className='truck-button'>
                        <button><Link to={`/trucks/${item.id}/menu`}>Menu</Link></button>
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